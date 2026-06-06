# PRD — Hot Site PSVP

> Paróquia São Vicente de Paulo | v1.2 | Hot site simplificado | 2026-06-06

## 1. Objetivo

Entregar um hot site institucional simples, rápido e fácil de manter para a Paróquia São Vicente de Paulo, com conteúdo editável por arquivos JSON e sem CMS visual nesta fase.

> **Nota v1.1:** A autonomia plena via CMS visual (`/admin`) foi **adiada** no pivô de 2026-05-01. Nesta fase, a edição é feita pela equipe **diretamente no GitHub web UI** sobre os JSONs em `site/content/`. Ver §1.5.
>
> **Nota v1.2:** O produto foi simplificado para hot site comum. O único recurso editorial dinâmico priorizado é o carrossel de banners da home, controlado por `site/content/home.json`.

## 1.5 Pivô 2026-05-01 — CMS adiado

**Motivação:** simplificar a entrega. O Decap CMS tinha 3 bloqueadores ativos (config.yml com placeholder `YOUR_CF_SUBDOMAIN`, OAuth App não criado, Cloudflare Worker nunca deployado). Em vez de destravar tudo isso antes da entrega, o CMS foi **adiado** e o código preservado no commit `4396f5c` para retomada futura.

**Decisões deste pivô:**

| Decisão | De | Para |
|---------|----|----|
| Edição de conteúdo | Decap CMS visual (`/admin`) | GitHub web UI (botão lápis nos JSONs) |
| Host | GitHub Pages | Cloudflare Pages |
| Domínio | `carneiromarços.github.io/paróquia-svp-brand/` | Domínio próprio `.org.br` (em escolha) |
| Email institucional | — | Fora de escopo nesta fase |

**Trade-off aceito:** equipe paróquial é pequena — autonomia total via CMS é desejável mas não bloqueante. Edição via GitHub web cobre o caso de uso enquanto o CMS não volta. Quando reativar, restaurar `site/public/admin/` e `oauth-proxy/` do commit `4396f5c` e resolver os 3 bloqueadores.

## 2. Problema Atual

| O que | Impacto |
|-------|---------|
| Todo conteúdo está hardcoded em `data.ts` | Qualquer mudança (horário, evento, aviso) exige dev |
| Imagens são placeholders Unsplash | Sem mecanismo para a equipe trocar fotos/banners |
| Sem CMS | Equipe não tem autonomia nenhuma |
| Design System separado (docs-viewer) | Artefato técnico desnecessário — Brand Book basta |

## 3. Escopo da Entrega

### 3.1 O que ENTRA (nesta fase, pós-pivô)

| Entregável | Descrição |
|------------|-----------|
| Hot site React/Vite | Conteúdo em JSONs em `site/content/`, deploy automático no push |
| Carrossel de banners | Slides da home editáveis em `site/content/home.json`, usando imagens de `site/public/images/` |
| Domínio próprio `.org.br` | A escolher entre `paróquiasvp.org.br`, `saovicentepaulo.org.br`, `psvp.org.br` |
| Manual de edição via GitHub web UI | Passo-a-passo para a equipe editar JSONs sem CLI/dev |
| Design System mínimo | Tokens, componentes visuais e regras de aplicação para site e redes |
| Brand Book | referência de identidade visual e tom de voz |
| Guia de Instagram | Padrões de posts, stories, carrosséis, legendas e fotos |
| Templates Canva | 5-8 templates editáveis (post, story, carrossel, banner) |
| Manual de uso | Guia simples para a equipe paróquial |
| Treinamento | Sessão de handoff (1h) mostrando como operar tudo |

### 3.1.1 O que SAI nesta fase (adiado)

| Item | Status | Onde está |
|------|--------|-----------|
| Decap CMS visual (`/admin`) | Adiado | Código preservado no commit `4396f5c` |
| OAuth proxy (Cloudflare Worker) | Adiado | Idem |
| Email institucional | Fora de escopo | Avaliar em fase futura |

### 3.2 O que SAI

| Removido | Motivo |
|----------|--------|
| `docs-viewer.html` | DS técnico desnecessário — BB cobre tudo |
| `components/components.css` | Só era usado pelo docs-viewer |
| Referências ao DS no deploy | Simplifica o pipeline |

### 3.3 O que NÃO entra

- Sistemas (cadastro, login, CRM)
- App mobile
- Integrações com APIs externas
- E-commerce / loja virtual

## 4. Solução Técnica

### 4.1 Solução atual (pós-pivô 2026-05-01): edição via GitHub web UI

**Por quê:** os JSONs em `site/content/` já estão migrados (saíram de `data.ts` hardcoded). O GitHub web UI permite editar qualquer arquivo direto no browser com botão de lápis, validação básica e commit em 1 clique. Cloudflare Pages rebuilda automaticamente no push.

**Como funciona:**
1. Equipe abre `github.com/carneiromarços/paróquia-svp-brand`
2. Navega até o JSON desejado em `site/content/`
3. Clica no ícone de lápis (✏️) — editor com syntax highlight
4. Edita o conteúdo
5. Escreve mensagem de commit (ex.: "Atualiza horário da missa de domingo")
6. Clica em **Commit changes** → push direto na `main`
7. Cloudflare Pages detecta o push e faz rebuild (~1-2 min)
8. Site atualizado

**Risco de JSON mal formatado:** mitigado por (a) manual de edição com exemplos; (b) preview no GitHub antes de commitar; (c) build do Cloudflare falha visível no painel se o JSON estiver inválido.

### 4.2 Carrossel de banners

O banner principal da home é um carrossel comum. Não depende de CMS.

Conteúdo:

```text
site/content/home.json
```

Imagens:

```text
site/public/images/
```

Cada slide define imagem, título, destaque, subtítulo e botões. A equipe pode trocar fotos e textos editando o JSON no GitHub.

### 4.3 Design System e Brand Book

O design system deve ser mínimo e prático:

```text
brand/
  BRAND-BOOK.md
  SOCIAL-MEDIA-GUIDE.md
  CANVA-TEMPLATES.md
tokens/
  tokens.css
brand-book.html
```

O objetivo não é criar uma biblioteca complexa. O design system existe para garantir consistência entre site, banners e Instagram.

### 4.4 Solução futura (planejada): Decap CMS

Quando a equipe demandar admin visual completo, retomar Decap CMS:
- Restaurar `site/public/admin/` e `oauth-proxy/` do commit `4396f5c`
- Resolver os 3 bloqueadores: preencher `YOUR_CF_SUBDOMAIN` no config.yml, criar o GitHub OAuth App, deployar o Worker do OAuth proxy
- Apontar o admin para o Cloudflare Pages do novo domínio

**Estrutura de conteúdo (migração de `data.ts` para arquivos JSON, já feita):**

```
site/
├── content/
│   ├── parish.json          ← Nome, endereço, contatos, redes, PIX
│   ├── schedule.json        ← Horários de missas, confissões, secretaria
│   ├── pastorals.json       ← Pastorais, movimentos, serviços
│   ├── events.json          ← Eventos (CRUD completo)
│   ├── announcements.json   ← Avisos (CRUD completo)
│   └── transparency.json    ← Categorias de uso do dízimo
├── public/
│   └── images/
│       ├── hero/            ← Banners (upload via admin)
│       ├── gallery/         ← Fotos da paróquia
│       └── events/          ← Fotos de eventos
└── admin/
    └── config.yml           ← Configuração do Decap CMS
```

### 4.5 Alternativas avaliadas

| Opção | Prós | Contras | Veredicto |
|-------|------|---------|-----------|
| **GitHub web UI direto** | Zero infra extra, JSONs já existem, commit em 1 clique | Equipe precisa ver o arquivo JSON cru | **Solução atual (v1.1)** |
| **Decap CMS** | Admin visual, Git-based, sem servidor | OAuth + Worker + config complexa | **Adiada — retomar em fase futura** |
| **Google Sheets** | Fácil, todos conhecem | Sem imagens, frágil, dependência Google | Descartado |
| **Notion como CMS** | Marços já usa | Requer proxy (CORS), complexidade | Descartado |
| **WordPress** | Máxima autonomia | Requer hosting ($), refazer tudo | Descartado |
| **Framer/Webflow** | Visual builder | Custo mensal, refazer tudo | Descartado |

## 5. Conteúdo Editável pela Equipe

A equipe pode gerenciar **todo o conteúdo** editando JSONs em `site/content/` via GitHub web UI (mapa abaixo). Quando o Decap CMS voltar, esses mesmos campos passam a ser editáveis por formulários visuais — a estrutura dos JSONs é o contrato.

### 5.1 Dados da Paróquia
- Nome, tagline, endereço, telefone, WhatsApp, e-mail
- Redes sociais (Instagram, YouTube, Facebook)
- Dados bancários (PIX, banco, agência, conta)

### 5.1.1 Banners da Home
- Imagem do slide
- Eyebrow
- Título
- Destaque em dourado
- Frase de apoio
- Botões e links

### 5.2 Horários
- Missas (dia/horário) — adicionar, editar, remover
- Confissões, adoração, secretaria

### 5.3 Pastorais, Movimentos e Serviços
- Nome, descrição, ícone, contato do responsável
- Adicionar/remover pastorais conforme necessidade

### 5.4 Eventos
- Título, data, horário, local, tag, descrição
- Marcar evento como destaque
- Upload de imagem do evento

### 5.5 Avisos
- Título, data, tag, texto
- Avisos antigos podem ser removidos

### 5.6 Banners e Imagens
- Upload de fotos para hero/banners
- Galeria de fotos da paróquia
- Foto do pároco

### 5.7 Transparência do Dízimo
- Categorias e percentuais de uso

## 6. Templates Canva (Publicações Autônomas)

A equipe da Pastoral da Comúnicação poderá criar materiais visuais sem designer:

| Template | Formato | Uso |
|----------|---------|-----|
| Post Instagram (quadrado) | 1080x1080 | Avisos, missas, eventos |
| Story Instagram | 1080x1920 | Avisos rápidos, contagem regressiva |
| Carrossel Instagram | 1080x1080 (multi) | Catequese, reflexões, séries |
| Capa YouTube | 2560x1440 | Canal da paróquia |
| Banner site (hero) | 1920x800 | Hero do site |
| Convite evento | 1080x1080 | Retiros, festas, encontros |
| Informativo semanal | 1080x1920 | Programação da semana |
| Miniatura YouTube | 1280x720 | Thumbnails de vídeos |

**Regras dos templates:**
- Paleta do Brand Book (burgundy, gold, cream, green)
- Tipografia: Cormorant Garamond (títulos) + Inter (corpo)
- Elementos editáveis: texto, fotos, datas
- Elementos fixos: logomarca, cores, layout base

## 7. Entregáveis de Handoff

### 7.1 Manual de Uso (PDF/Notion)
1. Como acessar o repositório no GitHub e fazer login
2. Como editar JSONs (`site/content/*.json`) via GitHub web UI — botão de lápis + commit
3. Como editar horários, eventos, avisos passo-a-passo (com prints)
4. Como trocar banners e fotos (upload via GitHub web no `site/public/images/`)
5. Como usar os templates Canva
6. Boas práticas de fotos (luz, enquadramento)
7. Guia rápido de tom de voz (do Brand Book)
8. **Troubleshooting:** se o site não atualizar em 5 min, verificar painel do Cloudflare Pages

### 7.2 Credenciais e Acessos
- Conta GitHub da paróquia (acesso ao repo)
- Cloudflare (leitura do painel de Pages, opcional)
- Canva (workspace com templates)
- Google Analytics (leitura, opcional)

### 7.3 Sessão de Treinamento (1h)
- 30min: edição de conteúdo via GitHub web UI
- 15min: demonstração dos templates Canva
- 15min: dúvidas e prática

## 8. User Stories

### US-01: Editar horários de missa
**Como** secretária da paróquia
**Quero** alterar os horários de missa
**Para que** os fiéis vejam os horários corretos sem precisar de um desenvolvedor

**Critérios de aceite (v1.1 — GitHub web UI):**
- [ ] Acessar `github.com/carneiromarços/paróquia-svp-brand`, fazer login
- [ ] Abrir `site/content/schedule.json`
- [ ] Editar horários existentes (dia e hora), adicionar ou remover
- [ ] Commitar a mudança
- [ ] Ver a mudança no site em até 5 minutos (rebuild Cloudflare)

### US-02: Publicar evento
**Como** membro da Pastoral da Comúnicação
**Quero** criar um novo evento no site
**Para que** a comunidade fique informada sobre atividades da paróquia

**Critérios de aceite (v1.1 — GitHub web UI):**
- [ ] Editar `site/content/events.json` adicionando objeto com título, data, horário, local, descrição
- [ ] Upload de imagem do evento em `site/public/images/events/` (botão **Add file → Upload**)
- [ ] Setar `featured: true` para destacar na home
- [ ] Commit → evento aparece em Eventos após rebuild

### US-03: Trocar banner da home
**Como** membro da Pastoral da Comúnicação
**Quero** trocar a foto principal (hero) do site
**Para que** o site reflita o momento litúrgico ou evento atual

**Critérios de aceite (v1.1 — GitHub web UI):**
- [ ] Upload de nova imagem em `site/public/images/`
- [ ] Atualizar slide em `site/content/home.json`
- [ ] Commit → imagem aparece no hero da home após rebuild

### US-04: Criar post para Instagram
**Como** membro da Pastoral da Comúnicação
**Quero** usar um template Canva para criar um post de evento
**Para que** a publicação siga a identidade visual da paróquia sem precisar de designer

**Critérios de aceite:**
- [ ] Abrir template no Canva
- [ ] Editar texto (título, data, horário)
- [ ] Trocar foto se necessário
- [ ] Exportar como PNG/JPG
- [ ] Resultado segue Brand Book (cores, fontes, layout)

### US-05: Atualizar lista de pastorais
**Como** secretária da paróquia
**Quero** adicionar uma nova pastoral ou atualizar o contato de uma existente
**Para que** a página de Pastorais esteja sempre atualizada

**Critérios de aceite (v1.1 — GitHub web UI):**
- [ ] Editar `site/content/pastorals.json`
- [ ] Adicionar, editar ou remover pastoral (nome, descrição, contato)
- [ ] Commit → mudança aparece no site após rebuild

### US-06: Publicar aviso urgente
**Como** secretária da paróquia
**Quero** criar um aviso que aparece na home
**Para que** a comunidade seja informada rapidamente sobre mudanças ou cancelamentos

**Critérios de aceite (v1.1 — GitHub web UI):**
- [ ] Editar `site/content/announcements.json` adicionando aviso (título, tag, texto, data)
- [ ] Commit → aviso aparece na seção de avisos da home após rebuild
- [ ] Remover do JSON quando não for mais relevante

## 9. Requisitos Não-Funcionais

| Req | Descrição |
|-----|-----------|
| **Custo** | Zero recorrente. Cloudflare Pages (grátis) + GitHub (grátis) + Canva (free tier). Custo único: registro do domínio `.org.br` (~R$40/ano) |
| **Performance** | Site carrega < 3s em 3G. Imagens otimizadas no build |
| **SEO** | Meta tags dinâmicas por página. Sitemap gerado no build |
| **Mobile** | 100% responsivo |
| **Segurança** | Acesso à edição via conta GitHub da paróquia (2FA recomendado). Sem dados sensíveis no client |
| **Disponibilidade** | Cloudflare Pages (99.99% uptime, CDN global) |
| **Manutenção** | Zero dev para edição de conteúdo. Equipe paróquial gerencia tudo via GitHub web UI |

## 10. Tasks de Implementação

### Fase 1 — Cleanup & Conteúdo (concluída)
- [x] Remover `docs-viewer.html` e referências
- [x] Remover `components/components.css` (manter só o que o BB usa)
- [x] Migrar dados de `data.ts` para arquivos JSON em `site/content/`
- [x] Atualizar componentes para consumir dados dos JSONs

### Fase 2 — Pivô 2026-05-01: Cloudflare Pages + GitHub web edit
- [x] Remover `site/public/admin/` e `oauth-proxy/` da `main` (código preservado no commit `4396f5c`)
- [x] Atualizar `docs/prd.md` marcando CMS como adiado (v1.1, este doc)
- [x] Atualizar `docs/manual-de-uso.md` com passo-a-passo equipe paróquial editando JSONs via GitHub web UI
- [ ] Conectar repo no Cloudflare Pages — build: `cd site && npm ci && npm run build`, output: `site/dist`
- [ ] Confirmar domínio próprio escolhido (`paróquiasvp.org.br` / `saovicentepaulo.org.br` / `psvp.org.br`)
- [ ] Registrar domínio `.org.br`
- [ ] Apontar custom domain no Cloudflare Pages + validar HTTPS
- [ ] Desligar workflow GitHub Pages (`.github/workflows/pages.yml`)
- [ ] Ajustar `vite.config.ts` base path (de `/paróquia-svp-brand/` para `/`)

### Fase 2.1 — Hot site + carrossel + marca
- [x] Criar `site/content/home.json` para slides da home
- [x] Implementar carrossel de banners na home
- [x] Criar `brand/BRAND-BOOK.md`
- [x] Criar `brand/SOCIAL-MEDIA-GUIDE.md`
- [x] Criar `brand/CANVA-TEMPLATES.md`
- [x] Atualizar manual para fluxo sem CMS

### Fase 3 — Polish & Handoff
- [ ] Substituir fotos Unsplash por fotos reais
- [ ] Confirmar dados reais com a paróquia (endereço, contatos, horários, pastorais, dízimo)
- [ ] Criar templates Canva (5-8 templates)
- [ ] Escrever manual de uso (consolidado: edição GitHub + Canva + boas práticas)
- [ ] Sessão de treinamento (1h)
- [ ] GA4 analytics (opcional)

### Fase 4 — Futuro (CMS visual, após autonomia básica consolidada)
- [ ] Restaurar `site/public/admin/` e `oauth-proxy/` do commit `4396f5c`
- [ ] Preencher `YOUR_CF_SUBDOMAIN` no `admin/config.yml`
- [ ] Criar GitHub OAuth App da paróquia
- [ ] Deployar Cloudflare Worker do OAuth proxy
- [ ] Validar fluxo de login da equipe e CRUD completo via admin

## 11. Definição de Pronto (v1.1)

O projeto está **concluído** quando:
1. Site no ar em domínio próprio `.org.br` via Cloudflare Pages
2. A equipe da paróquia consegue editar **qualquer conteúdo** do site via GitHub web UI sem ajuda técnica
3. Manual de edição via GitHub entregue (`docs/manual-edição-github.md`)
4. Templates Canva criados, compartilhados e a equipe sabe usar
5. Manual de uso consolidado entregue
6. Treinamento realizado
7. Workflow GitHub Pages desligado, Cloudflare Pages como deploy oficial
8. Zero dependência de desenvolvedor para operação diária de conteúdo

## 12. Notas Pendentes

| Item | Status | Detalhes |
|------|--------|----------|
| **Domínio próprio** | ⏳ Escolha pendente | Marços avaliando entre `paróquiasvp.org.br`, `saovicentepaulo.org.br`, `psvp.org.br`. `.org.br` é a TLD recomendada para instituição religiosa |
| **Página de Transparência** | Aguardando aprovação do pároco | Percentuais e categorias de uso do dízimo precisam de validação antes de publicar |
| **Decap CMS** | 🟡 Adiado | Código preservado no commit `4396f5c`. Retomada planejada após autonomia básica via GitHub web estar consolidada (ver Fase 4) |
| **Email institucional** | Fora de escopo | Avaliar em fase futura |
| **Migração de host** | ⏳ Pendente | GitHub Pages → Cloudflare Pages. Inclui ajuste do `vite.config.ts` (base path) e DNS |

## 13. Riscos

| Risco | Mitigação |
|-------|-----------|
| Equipe se intimida editando JSON cru no GitHub web | Manual com prints passo-a-passo + sessão de treinamento + suporte inicial (30 dias) |
| Equipe não se adapta ao fluxo de edição | Templates de commits prontos + suporte do Marços no primeiro mês |
| Deploy quebra por JSON mal formatado | (a) Manual com exemplos válidos; (b) preview no GitHub antes do commit; (c) build do Cloudflare falha visível no painel |
| Esquecer de 2FA na conta GitHub da paróquia | Ativar 2FA no setup inicial, salvar códigos de recuperação no cofre da secretaria |
| Fotos pesadas derrubam performance | Otimização automática de imagem no build (sharp/vite-plugin) + orientação no manual sobre tamanho máximo |
| Domínio `.org.br` desejado já registrado por terceiro | Marços avalia 3 opções em paralelo antes do registro |
