---
name: skill-creator
description: >
  Guia interativo pra criar skills novas do zero com estrutura correta.
  Entrevista o usuário sobre o processo, monta o frontmatter, define triggers,
  fases, checkpoints e output, e escreve o arquivo SKILL.md final.
  Use quando o usuário chamar /skill-creator, quando /mapear precisar criar uma skill
  sem template pronto, ou quando o usuário disser "cria uma skill pra mim", 
  "quero automatizar isso", "monta uma skill do zero".
---

# /skill-creator — Criação de Skills

## Contexto

Essa skill estrutura skills novas com a anatomia certa: frontmatter com triggers claros, workflow em fases com checkpoints, output definido e regras que evitam comportamento errado. O objetivo é criar skills que funcionam sem precisar de instrução extra a cada uso.

Se você veio do `/mapear`, ele já montou um briefing. Use esse briefing direto — não repita perguntas que ele já fez.

---

## Fase 1 — Entender o processo

Se não tiver briefing do `/mapear`, perguntar ao usuário (uma pergunta por vez):

> "Pra criar a skill certa, me conta: o que você faz nesse processo? Descreve como se tivesse me ensinando a fazer no lugar de você."

Depois de entender o processo, aprofundar nos pontos que ainda não ficaram claros:

- "O que dispara esse processo? Qual mensagem ou situação faz você começar?"
- "O que entra? (texto, arquivo, link, nada — o usuário só chama a skill)"
- "O que sai? (arquivo salvo, resposta no chat, ação executada)"
- "Tem etapas que você sempre faz, nessa ordem?"
- "Tem alguma etapa onde você precisa aprovar antes de continuar?"
- "A skill vai precisar de alguma ferramenta? (navegador, API, CLI)"
- "Tem alguma parte do processo que precisa de código? (conectar com API, gerar arquivo, processar dados)"

Parar de perguntar quando tiver:
1. O processo descrito em uma frase
2. Os gatilhos (palavras ou situações que disparam)
3. O input (o que entra)
4. O output (o que sai e onde fica)
5. O passo a passo aproximado
6. Os pontos de aprovação (checkpoints), se houver

---

## Fase 2 — Propor a estrutura

Com as respostas em mão, determinar o formato da skill:

**Arquivo simples** (`nome.md`) — quando a skill é só instruções, sem código, sem templates HTML, sem arquivos de referência.

**Pasta** (`nome/SKILL.md + arquivos`) — quando a skill precisa de:
- Scripts Python ou JS (`scripts/`)
- Templates HTML pra gerar arquivos visuais
- Arquivos de referência ou exemplos

Apresentar a estrutura proposta antes de escrever qualquer arquivo:

> "Vou criar a skill `/[nome]` com essa estrutura:
>
> **Frontmatter:**
> - Nome: `[nome-da-skill]`
> - Triggers: [lista das palavras/situações que vão disparar]
>
> **Workflow:**
> - Fase 1 — [nome]: [o que faz em uma frase]
> - Fase 2 — [nome]: [o que faz em uma frase]
> - [Checkpoint]: [onde para pra aprovação, se houver]
>
> **Output:**
> - [O que é gerado e onde salva]
>
> **Formato:** [arquivo único `nome.md` / pasta `nome/` com SKILL.md + scripts]
>
> Isso tá correto? Tem algo que quer mudar antes de eu escrever?"

**CHECKPOINT:** Esperar aprovação da estrutura. Só escrever o arquivo depois que o usuário confirmar.

---

## Fase 3 — Escrever a skill

Com a estrutura aprovada, escrever o arquivo `SKILL.md` seguindo a anatomia abaixo.

### Anatomia obrigatória

**Frontmatter:**
```yaml
---
name: nome-da-skill
description: >
  O que a skill faz em 1-2 frases.
  Inclui as palavras/situações que disparam a skill.
  Use quando o usuário chamar /nome-da-skill, disser "[trigger 1]",
  "[trigger 2]", ou "[trigger 3]".
---
```

**Cabeçalho:**
```markdown
# /nome-da-skill — Título Curto
```

**Seções (incluir só as que se aplicam):**

- `## Contexto` — o que a skill faz e pra que serve. Uma leitura rápida deve deixar claro o propósito
- `## Antes de começar` — arquivos que a skill precisa ler antes de qualquer coisa (contexto, preferências, design guide)
- `## Input` — o que o usuário fornece
- `## Workflow` — as fases com passos numerados e checkpoints onde a skill para pra aprovação
- `## Output` — o que é gerado, em qual formato, onde fica salvo
- `## Regras` — o que a skill nunca deve fazer e comportamentos críticos

### Princípios de escrita

**Frontmatter:**
- Os triggers precisam cobrir como o usuário *realmente* pede a coisa, não só o nome técnico
- Se o usuário diz "faz um carrossel" e não "cria carrossel para Instagram", os triggers são "faz um carrossel", "carrossel"
- A description deve ter 3-5 linhas: o que faz + quando usar

**Workflow:**
- Dividir em fases quando o processo tem etapas claramente separadas
- Cada passo começa com verbo no infinitivo: "Ler...", "Perguntar...", "Gerar...", "Salvar..."
- Checkpoints ficam em negrito: **CHECKPOINT:** — a skill para e espera o usuário aprovar antes de seguir
- Blocos de código pra comandos de terminal, não inline
- Perguntas pro usuário ficam em bloco de citação (`>`)

**Output:**
- Se gera arquivo: indicar o caminho completo onde salva
- Se gera múltiplos arquivos: mostrar a estrutura de pastas

**Regras:**
- Listar só o que é crítico e não óbvio
- Sem "sempre fazer X" que já está no workflow
- Focar em: o que a skill não deve fazer, como resolver casos de borda, o que fazer se faltar contexto

### Skills com código

Quando a skill precisa executar código (conectar API, gerar PDF, processar dados), criar uma pasta com a estrutura:

```
.claude/commands/nome-da-skill/
  SKILL.md          ← instruções e workflow
  scripts/
    main.py         ← script principal
    requirements.txt (se Python)
```

No `SKILL.md`, referenciar o script com caminho relativo e incluir como executar:

```bash
python .claude/commands/nome-da-skill/scripts/main.py --arg valor
```

Se precisar de credenciais ou variáveis de ambiente, a skill deve checar se estão configuradas antes de executar e instruir o usuário a configurar se não estiverem.

### O que não colocar na skill

- Explicações do óbvio ("ler o arquivo antes de editar")
- Regras que já são comportamento padrão do Claude
- Passos que o usuário vai adaptar a cada uso — a skill cobre o que é consistente
- Formatação desnecessária (tabelas, cabeçalhos pra seções de 2 linhas)

---

## Fase 4 — Definir onde salvar

Antes de salvar, confirmar com o usuário:

> "Onde você quer instalar essa skill?
>
> 1. **Só nesse projeto** — `.claude/commands/[nome].md` (só funciona aqui)
> 2. **Em qualquer projeto** — `~/.claude/commands/[nome].md` (funciona em todo lugar)
>
> Se for uma skill específica do seu negócio, vai em (1). Se for algo genérico que você usa em qualquer contexto, vai em (2)."

Salvar no caminho confirmado.

---

## Fase 5 — Revisar e entregar

Depois de salvar, mostrar o arquivo criado no chat e perguntar:

> "Skill `/[nome]` criada em `[caminho]`. Quer testar agora ou ajustar algo primeiro?"

Se o usuário pedir ajuste, editar o arquivo e mostrar o trecho alterado. Não reescrever a skill inteira — só o que mudou.

---

## Regras

- Uma pergunta por vez na entrevista. Não listar 5 perguntas de uma vez
- Nunca inventar etapas que o usuário não descreveu
- Sempre mostrar a estrutura proposta antes de escrever o arquivo
- Se vier briefing do `/mapear`, usar direto — não repetir perguntas já respondidas
- Se o processo for simples demais (2-3 passos, sem entregável), sugerir que talvez não precise de skill: "Isso é bem direto. Quer criar a skill mesmo assim ou prefere só anotar o passo a passo em algum lugar?"
- Triggers no frontmatter precisam ser as palavras reais do usuário, não o nome técnico da skill
