# Resumo da sessão – Automação de Currículos, LinkedIn e Gupy

Sessão de 2026-08-13. Contexto completo pra continuar em outro computador.

## Onde isso vive
- `operacional/automacao-curriculos/spec-arquitetura.md` – arquitetura completa e atualizada (Estágio A foi removido, ver decisão abaixo)
- `operacional/automacao-curriculos/prompts/` – os 7 prompts prontos (estágios A a E3 – o A ficou como referência histórica, não é mais usado no pipeline)
- `operacional/automacao-curriculos/formulario-teste/index.html` – formulário HTML simples de teste (2 campos: link do Documento Mestre + link da pasta do cliente), com fetch pro webhook do Make
- `operacional/automacao-curriculos/formulario-teste.zip` – o mesmo formulário empacotado

## Decisões tomadas nessa sessão

1. **Estágio A removido.** O Documento Mestre não é mais gerado pela IA a partir de um formulário – o cliente preenche o template diretamente no Drive. A automação só lê o que já existe.
2. **Gatilho simplificado.** Site/formulário com 2 campos (link do Documento Mestre + link da pasta do cliente) – webhook do Make dispara o pipeline B–C–D–E. Ainda em aberto: manter ou não o checkpoint humano antes de disparar (pendência da spec original).
3. **Cargo vem de dentro do Documento Mestre**, não de um campo novo no formulário – extraído via Text Parser (regex) dos rótulos fixos "Principal cargo que você busca:" e "3 cargos secundários que você busca também:".
4. **Todos os cargos (principal + secundários) são combinados numa lista única** e mandados numa chamada de IA só pro Estágio B – não faz um loop/pesquisa separada por cargo. Trade-off aceito: a lógica de reusar "Pesquisa de Vagas" entre clientes fica menos eficaz (lista tende a ser única por cliente), mas evita a complexidade de rodar múltiplas pesquisas.
5. **Modelo escolhido: Claude Sonnet 5** (`claude-sonnet-5`) pro Estágio B – mais barato que Opus, custo estimado de $0,03 a $0,06 por pesquisa.
6. **Pastas dos clientes são do Google Workspace da própria Conectaria** – Make já tem acesso direto, sem precisar de permissão por cliente.

## Estado do cenário no Make (o que já foi construído e testado)

Fluxo até agora, na ordem:

1. **Webhook** (Custom webhook) – recebe `link_documento_mestre` e `link_pasta_cliente`
2. **2x Text Parser** (regex `([-\w]{25,})`) – extrai o ID do documento e o ID da pasta das URLs. **Importante:** o padrão precisa estar entre parênteses `(...)` pra funcionar – sem isso o Make não retorna nada (bug que resolvemos)
3. **Google Drive "Search for Files/Folders"** – localiza os documentos dentro da pasta do cliente
4. **Google Drive "Download a File"** – **Google Drive "Upload a File"** (com "Convert a File: Yes", mimeType `application/vnd.google-apps.document`) – resolve o problema de documentos serem Word disfarçado de Google Docs (sintoma: URL com `rtpof=true&sd=true`, erro `[403] Export only supports Docs Editors files`). O "Copy a File" nativo NÃO converte formato, por isso trocamos pra Download+Upload.
5. **Google Docs "Get Content of a Document"** – lê o texto do Documento Mestre convertido. Testado e funcionando (retorna Text Content, Body, etc.)
6. **2x Text Parser** – extrai "Principal cargo que você busca" e "3 cargos secundários que você busca também" do texto do Documento Mestre

## Próximos passos (não feitos ainda)

1. Combinar os dois cargos extraídos numa string só (fórmula `{{parser1.$1}}, {{replace(parser2.$1; "\n"; ", ")}}`)
2. Montar o módulo HTTP (ou avaliar o app nativo "Anthropic Claude" no Make – estava em avaliação se o módulo "Create a Prompt" suporta a ferramenta `web_search` nativa da Anthropic) pra chamar a API com o prompt do Estágio B (`prompts/estagio-b-analise-vagas.md`)
3. Adicionar um módulo Google Docs "Create a Document" depois da chamada de IA pra salvar a pesquisa como "Pesquisa de Vagas – [Cargo]" – **isso ainda não foi montado**, a chamada de IA sozinha só devolve texto, não salva nada
4. Seguir pros Estágios C (reestruturar experiência), D (validar fatos) e E1-E3 (preencher Currículo, LinkedIn, Gupy)
5. Decidir e testar o campo "Retrieve" do Google Drive Search (Files vs Files and folders) e confirmar o padrão de nome exato dos 3 documentos do cliente (Currículo, LinkedIn, Gupy) dentro da pasta

## Chave de API

Uma chave de API da Anthropic foi gerada e colada no chat nessa sessão – **recomendo revogar essa chave no Console (Settings → API Keys) e gerar uma nova**, já que ficou registrada no histórico de conversa. Cole a nova direto no campo do Make, nunca no chat.

## Outras pendências da spec original (ainda válidas)

- Definir lista fixa de cargos aceitos pra normalização (ou decidir não normalizar, já que agora é lista combinada por cliente)
- Confirmar padrão de nome dos 3 documentos pré-criados no onboarding
- Testar o Estágio D (validação) com casos reais antes de desligar revisão manual
- Migração da biblioteca de pesquisas antiga (1,4M caracteres) – não bloqueante, pode ser feita depois
