# Apresentação Comercial — Código da Contratação Imediata

Pacote auto-contido da apresentação em slides (`/apresentacao`).

## Como rodar

```bash
bun install
bun run dev
```

Abra `http://localhost:8080/apresentacao`.

## Navegação

- Use as **setas direcionais** (← / →) ou **Page Up / Page Down** para trocar de slide.
- Use **Home** para o primeiro slide e **End** para o último.
- Clique nos botões **Voltar / Avançar** ou nos indicadores na barra inferior.

## O que está incluído

- Rota `/apresentacao` com todos os slides (Hero, Mentor, Provas, Método, Feedbacks, Jornada, ROI, Entregáveis, Escassez, Investimento, Fechamento).
- Filtros interativos de cases na slide de Feedbacks.
- QR Codes de PIX e Cartão nos slides de investimento.

## Sobre a homepage (`/`)

A apresentação importa componentes compartilhados (`Hero`, `Proof`, `Journey`, `RoiTable`) do arquivo da homepage. Por isso o arquivo `src/routes/index.tsx` está no pacote, mas a página de entrada recomendada é `/apresentacao`.

## Onde editar

- Slides e conteúdo: `src/components/apresentacao/slides.tsx`
- Ordem dos slides: `src/routes/apresentacao.tsx`
- Cases e filtros: `src/components/cases/casesData.ts` e `src/components/cases/CaseFilters.tsx`
- Preços e planos: `src/components/apresentacao/slides.tsx` (const `PLANS`)
- Estilos e tema: `src/styles.css`

## Build para produção

```bash
bun run build
```
