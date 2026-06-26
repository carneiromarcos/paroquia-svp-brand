# Runbook — Migração GitHub Pages → Cloudflare Pages

**Domínio:** `paroquiasaovicentedepaulo.org` (já na conta Cloudflare `95562ec5…`)
**Repo:** `carneiromarcos/paroquia-svp-brand`
**Estratégia:** zero downtime — o site antigo (GitHub Pages, subpath) continua no ar até o domínio próprio validar no Cloudflare.

---

## O que já está pronto no código (em `main`)

| Mudança | Arquivo | Efeito |
|---|---|---|
| `base` paramétrico | `site/vite.config.ts` | Default `/` (Cloudflare). GH Pages usa `VITE_BASE=/paroquia-svp-brand/` |
| SPA fallback | `site/public/_redirects` | `/* /index.html 200` — roteamento Wouter no Cloudflare |
| Build completo | `site/package.json` | `npm run build` copia `brand-book.html` + `tokens/` + `components/` pro `dist/` |
| GH Pages mantido | `.github/workflows/pages.yml` | Passa `VITE_BASE`, removeu cópia duplicada |

Validado: build Cloudflare gera `src="/assets/…"`; build GH Pages gera `src="/paroquia-svp-brand/assets/…"`.

---

## Passos no painel (Marcos executa)

### 1. Criar o projeto no Cloudflare Pages
1. Cloudflare Dashboard → **Workers & Pages** → **Create** → aba **Pages** → **Connect to Git**.
2. Autorizar GitHub, selecionar `carneiromarcos/paroquia-svp-brand`, branch de produção **`main`**.
3. **Build settings:**
   - Framework preset: **Vite** (ou None)
   - **Root directory:** `site`  ← (Advanced / "Set root directory")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Environment variables:**
   - `NODE_VERSION` = `20`
   - *(NÃO definir `VITE_BASE` — ausente = `/`, correto pro domínio próprio)*
5. **Save and Deploy.** Primeiro build sai em `https://<projeto>.pages.dev`. Conferir: abre, navega (Sobre, Horários, Pastorais, Eventos, Dízimo, Contato), `/brand-book.html` carrega com estilo, e um deep-link recarregado (ex. `/horarios`) funciona (prova do `_redirects`).

### 2. Apontar o domínio próprio
1. No projeto Pages → aba **Custom domains** → **Set up a domain**.
2. Adicionar `paroquiasaovicentedepaulo.org` **e** `www.paroquiasaovicentedepaulo.org`.
3. Domínio já está na mesma conta Cloudflare → os registros (CNAME / flattening do apex) são criados automaticamente. HTTPS provisiona sozinho (~minutos).
4. Canônico: redirecionar `www` → apex via **Redirect Rules** (sugestão: apex como canônico).

### 3. Cutover e desligamento do GitHub Pages
1. Validar o site no domínio próprio (HTTPS verde, todas as rotas, brand-book, deep-link recarregando).
2. GitHub → repo → **Settings → Pages → Source: None** (desliga o GitHub Pages).
3. *(Opcional)* remover o workflow `.github/workflows/pages.yml`. Enquanto existir, só republica o subpath antigo — inofensivo.

---

## Edição de conteúdo (pós-migração)
Equipe edita os JSONs em `site/content/*.json` pelo GitHub web (lápis → commit em `main`) → Cloudflare Pages rebuilda automático (~1–2 min). Ver `docs/manual-de-uso.md`.

## Rollback
Se algo der errado no Cloudflare, o GitHub Pages segue servindo a última build no subpath antigo enquanto o Source não for desligado. Reverter = não desligar o GH Pages até o Cloudflare estar 100%.
