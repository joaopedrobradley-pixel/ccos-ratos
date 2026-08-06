# Edição de Vídeo com IA — Processo Gemini Omni (método Zoë)

## O que você precisa
- Claude (pra gerar os prompts de cena)
- Gemini Omni Flash (labs.google — pra gerar/editar de fato)
- Um vídeo de referência com o estilo que você quer
- Seu roteiro (as falas do vídeo)

## Passo a passo

**1. Achar o vídeo de referência**
Instagram Reels / YouTube, buscar "kinetic typography reel", "motion design short" ou "AI video edit style". Baixar 1-2 vídeos com a energia certa. *(Já temos 3 baixados — ver seção "Modelos" abaixo, prontos pra usar.)*

**2. Abrir o Claude, subir a referência + roteiro**
Anexar o vídeo de referência (ou prints dele) + colar o roteiro. Depois colar este prompt:

```
Estou anexando um vídeo de referência e meu roteiro. Quero recriar o ESTILO
desse vídeo pro meu próprio roteiro usando Gemini Omni.

Passo 1: Analise o vídeo de referência. Descreva:
- Estilo de animação (2D, 3D, kinetic typography, flat design)
- Como as coisas se movem (velocidade, easing, bounce, seco ou suave)
- Transições (cortes, wipes, morphs, zooms)
- Paleta de cores e fundo
- Estilo de tipografia e onde o texto aparece
- Comportamento de câmera (estática, zoom, pan, shake)
- Clima geral e ritmo
- Sensação sonora (whooshes, batidas, estilo de música)

Passo 2: Divida meu roteiro em cenas de 8-10 segundos cada.

Passo 3: Para CADA cena, escreva um prompt que inclua:
- O que aparece na tela e como anima
- Texto exato na tela (máx 5-6 palavras)
- Cores, fundo e tipografia batendo com a referência
- Movimento de câmera e transição pra próxima cena
- Efeitos sonoros e clima musical

Meu roteiro:
[COLAR ROTEIRO AQUI]
```

**3. Copiar os prompts de cena**
O Claude devolve um prompt por cena (8-10s cada, o máximo que o Gemini Omni gera por clipe). Formato tipo:

```
Cena 1 — Hook (0-8s): Texto bold bate na tela. Batida grave. Fundo escuro.
Cena 2 — Prova (8-17s): Transição glitch. Zoom punch na palavra-chave.
Cena 3 — Detalhamento (17-25s): Ícones pop-in. Som de papel.
Cena 4 — CTA (25-35s): Efeito de giro. Texto com bounce. Som de torcida.
```

**4. Gerar no Gemini Omni**
Abrir Gemini → selecionar o modelo de vídeo **Gemini Omni Flash** (dentro de labs.google). Colar o prompt da Cena 1, anexar o vídeo com sua fala (talking head), gerar. Repetir pra cada cena.

⚠️ **Sempre anexar seu vídeo de talking head em toda geração.**

**5. Ajustar em linguagem simples**
Se uma cena sair errada, é só pedir no chat do Gemini:
- "Deixa o texto maior"
- "Desacelera a animação"
- "Muda o fundo pra vermelho"
- "Aumenta o glitch na transição"
Guardar a melhor versão de cada clipe.

**6. Montar no CapCut**
Jogar todos os clipes no CapCut, ordenar, adicionar música/voiceover, exportar.

📌 Se algum texto sair bagunçado, corrigir direto no CapCut — a IA ainda erra texto às vezes. Sempre conferir antes de postar.

---

## Modelos extraídos dos 3 vídeos de referência baixados

Análise de cada vídeo seguindo exatamente a estrutura do Passo 1 do prompt da Zoë (estilo de animação, movimento, transições, cor, tipografia, câmera, clima/ritmo, som).

### Modelo 1 — "Prova social com screen recording" (2cs9r2.mp4)
Vídeo de alguém mostrando o Claude/IA aplicando pra 500 vagas de emprego por ela.

- **Estilo de animação:** flat design / kinetic typography sobre gravação de tela real (não é 2D/3D ilustrado — é screen recording + texto animado por cima)
- **Movimento:** rápido e seco (snappy) — legendas trocam de palavra a cada ~0,3-0,5s, sem easing suave, entram e somem de forma abrupta pra acompanhar o ritmo da fala
- **Transições:** cortes secos entre telas (LinkedIn → chat de IA → calendário → planilha), sem wipes ou morphs, tudo corte direto tipo jump cut
- **Paleta e fundo:** fundo é a própria interface dos apps (branco/claro do LinkedIn, Google Calendar, Numbers), sem tratamento de cor artificial
- **Tipografia:** caixa branca com texto preto bold no hook de abertura; no corpo, legendas palavra-a-palavra bold preto com contorno branco grosso (estilo "meme caption"), sempre no terço inferior ou centro da tela
- **Câmera:** estática — é gravação de tela, o único "movimento de câmera" é o dedo/cursor navegando; no fechamento (talking head) a câmera é fixa, plano frontal
- **Clima e ritmo:** ritmo acelerado, tom de "prova real" e curiosidade — passa a sensação de estar espiando um processo acontecendo ao vivo
- **Sensação sonora:** confirmado por análise de forma de onda (duração 61s) — volume médio de -19,2dB com picos claros de -11 a -12dB entre 22-31s e um pico isolado em 47,2s. O pico de 47,2s bate exatamente com o frame da planilha de vagas encontradas (o "payoff" do vídeo) — indica um efeito sonoro/ênfase vocal marcando o resultado. O cluster de picos entre 25-31s coincide com a sequência de prompts sendo digitados ("Google", modelo de currículo) — reforça que o áudio é narração com ênfase nas palavras-chave, não música de fundo constante. Ver `2cs9r2_waveform.png`.

### Modelo 2 — "Tutorial comparativo Raw vs AI" (5uaaah.mp4)
Demonstração do próprio processo do Gemini Omni em vídeo (autor: Addie Walker).

- **Estilo de animação:** flat design minimalista — cards/retângulos com sombra flutuando sobre fundo liso, tipografia grande como elemento gráfico central (não é 2D ilustrado nem 3D)
- **Movimento:** misto — comparações "Raw vs AI" aparecem com bounce leve (cards entram com leve overshoot); textos de rótulo (ex: "Transitions", "Generate") têm entrada seca e rápida, sem suavização longa
- **Transições:** zoom/crossfade entre estados (raw pequeno → AI grande), wipe leve quando troca de tópico (Transitions → SFX → Captions → Motion Graphics), sem cortes secos abruptos — mais fluido que o Modelo 1
- **Paleta e fundo:** fundo cinza claro/off-white minimalista constante; os cards de vídeo em si são escuros (preto/vinho); textos de destaque em vermelho vinho ("AI", "Irrelevant") e cinza-escuro bold para labels neutros
- **Tipografia:** títulos grandes centralizados tipo cartaz (ex: "Motion Graphics", "labs.google"), fonte sans-serif bold pesada; badges/pills cinza-escuro com texto branco pra rótulos de processo ("ASPECT RATIO,", "CAPTIONS.")
- **Câmera:** não há câmera real na maior parte — é motion graphics puro sobre fundo estático; o "vídeo raw" mostrado dentro dos cards é plano fixo de talking head (homem falando, fundo de quadro-negro)
- **Clima e ritmo:** didático e ritmo médio — dá tempo de ler cada rótulo antes de trocar, mais “explicação” que “hook rápido”; tom confiante/premium
- **Sensação sonora:** confirmado por análise de forma de onda (duração 31s) — volume médio de -17,1dB, MUITO mais alto que os outros dois vídeos (mais música/efeitos, menos silêncio). Tem um pico isolado e forte entre 4,4-5,4s (o mais alto dos 3 vídeos analisados, chegando a -7,3dB) que bate exatamente com a transição do vórtice "Irrelevant" logo na abertura — confirma um whoosh/impacto de bass forte nessa transição de reveal. Segundo pico em 29,2s, perto do encerramento, coincidindo com o CTA "Comment Automate" — efeito sonoro de fechamento. Ver `5uaaah_waveform.png`.

### Modelo 3 — "Antes/depois lado a lado com motion graphics" (fnjpou.mp4)
Vídeo educacional de nicho (dentista, autor: Beni Media) — mecânica de edição é o que importa aqui.

- **Estilo de animação:** kinetic typography + motion graphics sobre talking head real; ícones/emoji 2D sobrepostos à filmagem, mais um recorte de B-roll estilizado (textura óssea com brilho/partículas, quase 3D)
- **Movimento:** rítmico e sincronizado à fala — cada palavra do texto aparece exatamente no momento em que é dita (efeito "typewriter" com pop), ícones entram com pequeno bounce/scale-up quando a palavra correspondente é falada
- **Transições:** o layout base (NO Edit pequeno + FINAL grande) permanece fixo o vídeo inteiro — a "transição" acontece por corte interno dentro do quadro FINAL, indo de talking head pra B-roll ilustrativo e voltando, sem wipe visível
- **Paleta e fundo:** tom escuro azulado geral (grading frio), com o vídeo cru mantendo cor natural mais clara/neutra pra reforçar o contraste "antes x depois"; B-roll usa tons quentes (dourado/âmbar) pra destacar contra o fundo escuro
- **Tipografia:** legendas brancas bold, palavra a palavra, centralizadas no corpo do quadro FINAL; badges fixos no topo ("BETTER RETENTION", "FINAL", "NO Edit") em caixas com contorno luminoso (glow), sempre no mesmo lugar
- **Câmera:** o vídeo raw é estático (plano fixo, pessoa sentada); no B-roll intercalado há zoom lento dramático sobre a textura/imagem ilustrativa
- **Clima e ritmo:** ritmo moderado, tom educativo/confiável — não é acelerado como o Modelo 1, dá peso e credibilidade ao que está sendo explicado
- **Sensação sonora:** confirmado por análise de forma de onda (duração 41,8s) — volume médio de -19,1dB, parecido com o Vídeo 1 (predominância de voz, pouca música constante). Picos em 27,0s e 40,8s coincidem com frases de fechamento de ideia ("that rebuilds a larger area" e o encerramento em "a way") — ênfase vocal/pop de ícone nesses momentos, não batida musical. Cluster inicial em 4,8-5,6s também é ênfase de fala, não efeito. Ver `fnjpou_waveform.png`.

---
