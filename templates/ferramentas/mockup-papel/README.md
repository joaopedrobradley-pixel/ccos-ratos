# Mockup de papel (canto dobrado)

Gera o efeito de página com sombra, leve inclinação e canto dobrado (dog-ear), com fundo transparente — pronto pra compor com outra imagem no Canva/Photoshop.

## Uso

1. Instale as dependências (uma vez só):
   ```bash
   npm install
   npx playwright install chromium
   ```
2. Abra `mockup-papel.html` e troque o `src` da `<img>` pela sua imagem (print do currículo, template, etc).
3. Gere o PNG:
   ```bash
   npm run gerar
   ```
   O arquivo `mockup.png` sai com fundo transparente na mesma pasta.

## Ajustes

No `<style>` de `mockup-papel.html`, dentro de `#paper-wrap`:
- `--rotate`: ângulo de inclinação (ex: `-3deg`)
- `--fold`: tamanho do canto dobrado em px (ex: `58px`)
