# Automação de Currículos – Arquitetura

## Contexto

Hoje o processo de gerar Currículo + LinkedIn + material Gupy/sites de vaga pra cada cliente é feito manualmente: o time cola 5-10 descrições de vaga num Agente de ChatGPT, copia as respostas e monta os 3 documentos à mão. As etapas 2 (análise de vagas), 3 (reestruturação da experiência) e 4 (montagem dos 3 documentos) são as mais trabalhosas e são as que essa automação substitui. A etapa 5 (Excel de acompanhamento + links de vaga) já é rápida hoje e não precisa mudar.

**Documentos pré-existentes por cliente:** quando alguém entra no processo, o onboarding já cria a pasta do cliente com os 3 documentos finais (Currículo, LinkedIn, Sites de Vaga) prontos, vazios ou com o template padrão. **A automação nunca cria esses 3 documentos – ela sempre edita os que já existem.** O único documento que a automação cria do zero é o Documento Mestre (Estágio A), porque esse é um artefato interno, não algo que o cliente acessa.

**Cuidado especial com o LinkedIn:** cada seção do documento de LinkedIn tem um cabeçalho fixo no formato `[Nome da Seção] (Clique aqui para localizar a seção)`, com link pra uma aula em vídeo explicando a estratégia daquela seção pro cliente. A IA preenche **todas** as seções do LinkedIn (nada fica em branco esperando o cliente preencher sozinho) – mas o cabeçalho com o link do vídeo nunca pode ser alterado ou removido, só o conteúdo abaixo dele.

Decisão confirmada (atualizada em 2026-08-13): o Documento Mestre deixou de ser gerado pela IA – o cliente preenche o template do Documento Mestre diretamente no Drive. O **Estágio A foi removido**. O pipeline passa a ser B → C → D → E, disparado por um formulário simples com 2 campos (link do Documento Mestre já preenchido + link da pasta do cliente no Drive). As pastas dos clientes vivem no Google Workspace da própria Conectaria, então o Make já tem acesso direto via a conta conectada, sem precisar de permissão por cliente.

**Pendência em aberto:** ainda não decidimos se mantém o checkpoint humano (time aprova manualmente antes do pipeline disparar) ou se o webhook dispara o pipeline direto na submissão do formulário. Definir antes de ativar em produção.

## Gatilho

1. Cliente preenche o template do Documento Mestre no Drive (não passa mais por formulário de experiência – o documento já nasce pronto).
2. Cliente (ou o time) preenche um formulário simples com 2 campos: link do Documento Mestre + link da pasta do cliente no Drive.
3. O formulário envia esses dados para o webhook do Make: `https://hook.us2.make.com/q9b6tabqqys1uv10aq4or6ghuhlcdiu3`
4. Make extrai os IDs das duas URLs (regex) e dispara o pipeline (Estágios B a F).

Esse desenho é mais simples que o anterior – troca "IA constrói o Documento Mestre a partir de um formulário longo" por "cliente entrega o Documento Mestre pronto e a IA só lê". Reduz uma chamada de IA inteira (Estágio A) do pipeline.

## Visão geral do pipeline

```
Form de Experiência do Cliente (por cargo) + currículo atual anexado
        │
        ▼
[Gatilho] Time revisa e aprova manualmente o disparo
        │
        ▼
[Estágio A] Gerar Documento Mestre  ─────────────────► cria doc novo no Drive do cliente
   (usa também o currículo atual como fonte           (1x por cliente)
   pra conferir dados factuais)
        │
        ▼
[Estágio B] Pesquisa de vagas do cargo
   Make verifica se já existe
   "Pesquisa de Vagas – [Cargo]" no Drive
        │
        ├── existe ───────────────────────────────►  reusa
        │
        └── não existe → IA busca 5-10 vagas na web (web_search)
              → IA analisa cada uma + síntese geral
              → salva "Pesquisa de Vagas – [Cargo]"
        │
        ▼
[Estágio C] Reestruturar experiência
   Documento Mestre + Pesquisa do cargo → bullets VRD tailored
        │
        ▼
[Estágio D] Validar fatos
   Compara bullets gerados x Documento Mestre
   Se houver divergência → IA corrige e reprocessa (limite de 2 tentativas)
        │
        ▼
[Estágio E] Preencher os 3 documentos JÁ EXISTENTES na pasta do cliente
   Currículo ───  (reescreve o documento inteiro)
   LinkedIn  ───┼── preenche todas as seções, preservando os cabeçalhos com vídeo
   Gupy/Sites───  (reescreve o documento inteiro)
        │
        ▼
[Estágio F – já existe] Excel de vagas/candidaturas + links personalizados
```

## Por que separar em 5 chamadas de IA (e não uma só)

Cada estágio tem um input/output diferente e uma responsabilidade específica – isso facilita debugar quando algo sai errado (dá pra saber exatamente em qual etapa o problema apareceu), permite reusar o Estágio B entre clientes diferentes que buscam o mesmo cargo, e deixa o Estágio D (validação) auditável, porque ele roda depois da geração e não junto com ela.

## Convenção de nomenclatura no Drive

- `Documento Mestre – [Nome do Cliente]` – banco de experiência completo do cliente, **criado pela automação** (único documento que não existe previamente)
- `Pesquisa de Vagas – [Cargo]` – reutilizável entre clientes, **criado pela automação**. Nome do cargo deve ser normalizado (ver abaixo) pra busca funcionar
- **Currículo, LinkedIn e Sites de Vaga** – **já existem na pasta do cliente desde o onboarding.** A automação precisa localizá-los (por nome/tipo dentro da pasta do cliente, não criar um novo) e editar o conteúdo. Ainda não confirmei com o time o padrão exato de nome que o onboarding usa pra esses 3 documentos – ver pendência abaixo.

### Normalização do nome do cargo

Pra "Pesquisa de Vagas – Engenheiro Civil" ser encontrada de forma confiável, o Make precisa normalizar o cargo antes de buscar/salvar: minúsculo, sem acento, singular. Ex.: "Engenheiros Civis Sênior" e "Engenheiro Civil" devem resolver pro mesmo cargo-base "engenheiro civil". Duas opções:

1. **Lista fixa de cargos aceitos** (mais simples, mais previsível) – o time mantém uma lista curta dos cargos que a Conectaria atende e o Make sempre mapeia a entrada pro cargo mais próximo dessa lista antes de buscar.
2. **IA normaliza o cargo antes da busca** – uma chamada rápida e barata que recebe o cargo como o cliente descreveu e devolve a forma canônica. Mais flexível, mas depende de manter consistência entre execuções.

Recomendo começar com a lista fixa (opção 1) – vocês já sabem quais áreas atendem (`_contexto/empresa.md` cita vendas, marketing e tecnologia como foco principal), então a lista não deve ser gigante, e evita o cargo "quase igual" gerar duas pesquisas duplicadas.

## Pastas neste workspace

- `operacional/automacao-curriculos/spec-arquitetura.md` – este arquivo
- `operacional/automacao-curriculos/prompts/` – os 6 prompts prontos pra colar nos módulos de IA do Make (formato: bloco de system prompt + bloco de user prompt, com as variáveis que o Make precisa preencher marcadas entre `{{ }}`)

## Pendências antes de ligar o pipeline em produção

1. **Migrar a biblioteca de pesquisas atual** (doc único de 1,4M caracteres) pros documentos individuais por cargo – ver plano de migração no final deste documento.
2. **Definir a lista fixa de cargos aceitos** pra normalização.
3. **Busca das 5-10 vagas** – resolvido: em vez de o time colar manualmente, o Estágio B usa a ferramenta nativa de busca na web do Claude (`web_search`, sem custo de configuração extra, habilitada direto na chamada de API que o Make faz). Ela busca vagas reais e atuais pro cargo, prioritariamente via Google (que indexa Gupy, Catho, Indeed, páginas de carreira de empresas). **Evitar depender de busca automatizada direto no LinkedIn** – a plataforma bloqueia acesso automatizado e navegar/raspar o site programaticamente viola os termos de uso deles, com risco de bloqueio de conta. Se uma vaga específica do LinkedIn aparecer nos resultados de busca do Google (o que acontece, já que o Google indexa parte do conteúdo público do LinkedIn), tudo bem usá-la – a diferença é não automatizar login/navegação dentro do LinkedIn. O time continua podendo colar vagas manualmente como alternativa, quando quiser garantir uma vaga específica que não apareceu na busca automática.
4. **Testar o Estágio D com casos reais** antes de confiar 100% na autocorreção – rodar em paralelo com o processo manual por algumas semanas, comparando a saída da IA com o que o time geraria, antes de desligar de vez a revisão humana.
5. **Confirmar o padrão de nome/local dos 3 documentos pré-criados no onboarding** (Currículo, LinkedIn, Sites de Vaga) – preciso de um link de exemplo de uma pasta de cliente já onboardado pra eu ver o nome exato dos arquivos e como o Make vai localizá-los de forma confiável (nome fixo? busca por tipo de documento dentro da pasta?).
6. **Confirmar onde o currículo atual do cliente (anexado no formulário de entrada) fica salvo** – pra o Make saber de onde puxar esse arquivo e passar pro Estágio A.
7. **Definir o mecanismo do gatilho no Make** – como o time vai "aprovar" o disparo na prática (botão, mensagem, mover card no ClickUp) – qualquer uma funciona, mas precisa escolher uma pra montar o cenário do Make.

## Plano de migração da biblioteca de pesquisas

O documento atual (`https://docs.google.com/document/d/1ED3NRaE0NaWAE4AVizIwFxwBTar89R0Q7FxXj4VCyA8`) tem ~1.350 seções organizadas de forma inconsistente (às vezes H1 é a área, às vezes é o cargo, às vezes é o título da vaga individual). Proposta:

1. **Não apagar o documento original** – ele continua como arquivo histórico/backup.
2. Rodar uma passada (pode ser feita por IA, em lotes, dado o tamanho) que:
   - Identifica os blocos de "Análise da Vaga – X" e a qual cargo cada um pertence
   - Agrupa por cargo
   - Cria um novo Google Doc por cargo, seguindo a convenção de nome acima, com o mesmo formato de conteúdo (palavras-chave + atividades reestruturadas) que já existe hoje
3. Cargos com pouquíssimas vagas analisadas (1-2) podem ficar de fora da migração inicial – sinal de que ainda não vale a pena reusar, e vão ser criados on-demand pelo Estágio B na primeira vez que aparecerem.
4. Depois da migração, o time revisa uma amostra dos docs novos pra confirmar que a organização ficou correta antes do Make passar a depender deles.

Esse é um trabalho mecânico mas grande (1,4M caracteres) – dá pra fazer sob demanda quando vocês quiserem começar a migração de verdade. Não é bloqueante pra escrever e testar os prompts dos outros estágios.
