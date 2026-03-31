# PRD — Site Autônomo PSVP

> Paróquia São Vicente de Paulo | v1.0 | 2026-03-31

## 1. Objetivo

Entregar o site da paróquia 100% gerenciável pela equipe paroquial (secretaria, pastoral da comunicação), sem necessidade de desenvolvedor para nenhuma operação do dia a dia.

## 2. Problema Atual

| O que | Impacto |
|-------|---------|
| Todo conteúdo está hardcoded em `data.ts` | Qualquer mudança (horário, evento, aviso) exige dev |
| Imagens são placeholders Unsplash | Sem mecanismo para a equipe trocar fotos/banners |
| Sem CMS | Equipe não tem autonomia nenhuma |
| Design System separado (docs-viewer) | Artefato técnico desnecessário — Brand Book basta |

## 3. Escopo da Entrega

### 3.1 O que ENTRA

| Entregável | Descrição |
|------------|-----------|
| Site com CMS integrado | Admin panel em `/admin` para editar todo conteúdo |
| Brand Book (HTML) | Referência visual para criação de materiais |
| Templates Canva | 5-8 templates editáveis (post, story, carrossel, banner) |
| Manual de uso | Guia simples para a equipe paroquial |
| Treinamento | Sessão de handoff (1h) mostrando como operar tudo |

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

## 4. Solução Técnica — CMS

### 4.1 Opção recomendada: Decap CMS (ex-Netlify CMS)

**Por quê:** Open source, sem custo, admin visual no browser, edita arquivos no repositório, auto-deploy via GitHub Actions já existente.

**Como funciona:**
1. Equipe acessa `site.com/admin`
2. Faz login (GitHub OAuth ou convite)
3. Edita conteúdo em formulários visuais (não precisa saber código)
4. Salva → commit automático no repo → GitHub Actions builda → site atualizado

**Estrutura de conteúdo (migração de `data.ts` para arquivos JSON):**

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

### 4.2 Alternativas avaliadas

| Opção | Prós | Contras | Veredicto |
|-------|------|---------|-----------|
| **Decap CMS** | Grátis, admin visual, Git-based, sem servidor | Auth via GitHub OAuth | **Recomendado** |
| **Google Sheets** | Fácil, todos conhecem | Sem imagens, frágil, dependência Google | Descartado |
| **Notion como CMS** | Marcos já usa | Requer proxy (CORS), complexidade | Descartado |
| **WordPress** | Máxima autonomia | Requer hosting ($), refazer tudo | Descartado |
| **Framer/Webflow** | Visual builder | Custo mensal, refazer tudo | Descartado |

## 5. Conteúdo Editável pelo Admin

A equipe poderá gerenciar **tudo** sem tocar em código:

### 5.1 Dados da Paróquia
- Nome, tagline, endereço, telefone, WhatsApp, e-mail
- Redes sociais (Instagram, YouTube, Facebook)
- Dados bancários (PIX, banco, agência, conta)

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

A equipe da Pastoral da Comunicação poderá criar materiais visuais sem designer:

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
1. Como acessar o admin do site
2. Como editar horários, eventos, avisos
3. Como trocar banners e fotos
4. Como usar os templates Canva
5. Boas práticas de fotos (luz, enquadramento)
6. Guia rápido de tom de voz (do Brand Book)

### 7.2 Credenciais e Acessos
- Conta GitHub (acesso ao admin)
- Canva (workspace com templates)
- Google Analytics (leitura)

### 7.3 Sessão de Treinamento (1h)
- 30min: demonstração do admin do site
- 15min: demonstração dos templates Canva
- 15min: dúvidas e prática

## 8. User Stories

### US-01: Editar horários de missa
**Como** secretária da paróquia
**Quero** alterar os horários de missa pelo admin do site
**Para que** os fiéis vejam os horários corretos sem precisar de um desenvolvedor

**Critérios de aceite:**
- [ ] Acessar `/admin`, fazer login
- [ ] Editar horários existentes (dia e hora)
- [ ] Adicionar novo horário
- [ ] Remover horário
- [ ] Salvar e ver a mudança no site em até 5 minutos

### US-02: Publicar evento
**Como** membro da Pastoral da Comunicação
**Quero** criar um novo evento no site
**Para que** a comunidade fique informada sobre atividades da paróquia

**Critérios de aceite:**
- [ ] Criar evento com título, data, horário, local, descrição
- [ ] Fazer upload de imagem do evento
- [ ] Marcar como "destaque" (aparece na home)
- [ ] Evento aparece automaticamente na página de Eventos

### US-03: Trocar banner da home
**Como** membro da Pastoral da Comunicação
**Quero** trocar a foto principal (hero) do site
**Para que** o site reflita o momento litúrgico ou evento atual

**Critérios de aceite:**
- [ ] Upload de nova imagem via admin
- [ ] Preview antes de publicar
- [ ] Imagem aparece no hero da home após salvar

### US-04: Criar post para Instagram
**Como** membro da Pastoral da Comunicação
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

**Critérios de aceite:**
- [ ] Adicionar pastoral com nome, descrição, contato
- [ ] Editar pastoral existente
- [ ] Remover pastoral inativa
- [ ] Mudanças refletem no site automaticamente

### US-06: Publicar aviso urgente
**Como** secretária da paróquia
**Quero** criar um aviso que aparece na home
**Para que** a comunidade seja informada rapidamente sobre mudanças ou cancelamentos

**Critérios de aceite:**
- [ ] Criar aviso com título, tag e texto
- [ ] Aviso aparece na seção de avisos da home
- [ ] Poder remover aviso quando não for mais relevante

## 9. Requisitos Não-Funcionais

| Req | Descrição |
|-----|-----------|
| **Custo** | Zero. GitHub Pages (grátis) + Decap CMS (open source) + Canva (free tier) |
| **Performance** | Site carrega < 3s em 3G. Imagens otimizadas no upload |
| **SEO** | Meta tags dinâmicas por página. Sitemap gerado no build |
| **Mobile** | 100% responsivo. Admin funciona em tablet/celular |
| **Segurança** | Auth via GitHub OAuth. Sem dados sensíveis no client |
| **Disponibilidade** | GitHub Pages (99.9% uptime) |
| **Manutenção** | Zero dev. Equipe paroquial gerencia tudo |

## 10. Tasks de Implementação

### Fase 1 — Cleanup & CMS Setup
- [ ] Remover `docs-viewer.html` e referências
- [ ] Remover `components/components.css` (manter só o que o BB usa)
- [ ] Migrar dados de `data.ts` para arquivos JSON em `content/`
- [ ] Configurar Decap CMS (`admin/config.yml`)
- [ ] Setup GitHub OAuth para autenticação do admin
- [ ] Atualizar GitHub Actions (remover cópia do DS, adicionar content)

### Fase 2 — Content Integration
- [ ] Criar loader que lê JSONs do `content/` no build
- [ ] Atualizar todos os componentes para consumir dados do loader
- [ ] Implementar upload de imagens via admin (media folder)
- [ ] Testar CRUD completo: horários, eventos, avisos, pastorais
- [ ] Adicionar campos de banner/hero editáveis

### Fase 3 — Polish & Handoff
- [ ] Substituir fotos Unsplash por fotos reais (ou deixar mecanismo de upload pronto)
- [ ] Confirmar dados reais com a paróquia
- [ ] Criar templates Canva (5-8 templates)
- [ ] Escrever manual de uso
- [ ] Sessão de treinamento
- [ ] GA4 analytics (opcional, se a paróquia quiser)

## 11. Definição de Pronto

O projeto está **concluído** quando:
1. A equipe da paróquia consegue editar **qualquer conteúdo** do site sem ajuda técnica
2. Templates Canva estão compartilhados e a equipe sabe usar
3. Manual de uso entregue
4. Treinamento realizado
5. `docs-viewer.html` removido
6. Zero dependência de desenvolvedor para operação diária

## 12. Notas Pendentes

| Item | Status | Detalhes |
|------|--------|----------|
| **Página de Transparência** | Aguardando aprovação do pároco | Percentuais e categorias de uso do dízimo precisam de validação antes de publicar |
| **Domínio próprio** | A ser adquirido | Substituirá `carneiromarcos.github.io/paroquia-svp-brand/`. Requer atualizar `vite.config.ts` (base path) e DNS |

## 13. Riscos

| Risco | Mitigação |
|-------|-----------|
| GitHub OAuth complexo para equipe | Criar conta GitHub dedicada da paróquia, salvar credenciais |
| Equipe não se adapta ao admin | Manual detalhado + sessão de treinamento + suporte inicial (30 dias) |
| Deploy quebra por JSON mal formatado | Validação no Decap CMS (schema) + preview antes de publicar |
| Fotos pesadas derrubam performance | Otimização automática de imagem no build (sharp/vite-plugin) |
