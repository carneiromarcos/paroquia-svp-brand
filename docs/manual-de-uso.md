# Manual de Uso — Site PSVP

> Guia prático para a equipe da Paróquia São Vicente de Paulo.

## 1. Visão Geral

O site funciona como um hot site estático. Não existe CMS visual nesta fase. A edição de conteúdo é feita pelo GitHub, alterando arquivos JSON simples em `site/content/`.

| Ferramenta | Para que serve | Onde fica |
|---|---|---|
| GitHub | Editar textos, horários, eventos e banners | `site/content/*.json` |
| Imagens do site | Guardar banners e fotos públicas | `site/public/images/` |
| Canva | Criar posts, stories e banners | Pasta `PSVP — Templates` |
| Brand Book | Consultar identidade visual | `brand/BRAND-BOOK.md` |

## 2. Como Editar Conteúdo Pelo GitHub

1. Acesse o repositório `carneiromarços/paróquia-svp-brand`.
2. Entre com a conta autorizada.
3. Abra o arquivo desejado em `site/content/`.
4. Clique no ícone de lápis.
5. Edite apenas o texto necessário, mantendo vírgulas, aspas e chaves.
6. No fim da página, escreva uma mensagem curta de commit.
7. Clique em **Commit changes**.
8. Aguarde alguns minutos até o deploy atualizar o site.

Mensagem de commit recomendada:

```text
Atualiza horários de missa
Atualiza banner da home
Adiciona evento de formação
```

## 3. Trocar Banners Do Carrossel

Os banners da home ficam em:

```text
site/content/home.json
```

As imagens usadas pelos banners ficam em:

```text
site/public/images/
```

### Passo a passo

1. Prepare uma imagem horizontal, de preferência `1920x800` ou proporção parecida.
2. No GitHub, entre em `site/public/images/`.
3. Clique em **Add file → Upload files**.
4. Envie a imagem.
5. Faça commit com a mensagem `Adiciona banner [nome]`.
6. Abra `site/content/home.json`.
7. Altere ou adicione um item em `heroSlides`.
8. Faça commit com a mensagem `Atualiza carrossel da home`.

Modelo de slide:

```json
{
  "image": "/images/hero-church.jpg",
  "eyebrow": "Paróquia",
  "title": "São Vicente de Paulo",
  "highlight": "de Paulo",
  "subtitle": "A caridade é o amor posto em ação.",
  "primaryLabel": "Ver Horários",
  "primaryHref": "/horários",
  "secondaryLabel": "Fale Conosco",
  "secondaryHref": "/contato"
}
```

Campos:
- `image`: caminho da imagem.
- `eyebrow`: texto pequeno acima do título.
- `title`: título principal.
- `highlight`: parte do título que aparece em dourado.
- `subtitle`: frase de apoio.
- `primaryLabel` e `primaryHref`: botão principal.
- `secondaryLabel` e `secondaryHref`: botão secundário.

## 4. Editar Horários

Arquivo:

```text
site/content/schedule.json
```

Exemplo:

```json
{
  "day": "Domingo",
  "time": "6h30, 9h, 11h30, 17h e 19h"
}
```

Mantenha o formato `6h30`, `17h`, `19h`.

## 5. Publicar Evento

Arquivo:

```text
site/content/events.json
```

Para destacar um evento na home, use:

```json
"featured": true
```

Evite deixar mais de um evento com `featured: true`.

## 6. Publicar Aviso

Arquivo:

```text
site/content/announcements.json
```

Use avisos curtos. Se o texto for grande, deixe o resumo no site e explique melhor na legenda do Instagram.

## 7. Atualizar Pastorais

Arquivo:

```text
site/content/pastorals.json
```

Cada pastoral, movimento ou serviço deve ter:
- `name`
- `desc`
- `icon`
- `contact`

## 8. Usar Canva E Instagram

Consulte:

- `brand/BRAND-BOOK.md`
- `brand/SOCIAL-MEDIA-GUIDE.md`
- `brand/CANVA-TEMPLATES.md`

Fluxo sugerido:
1. Criar ou atualizar o conteúdo no site.
2. Abrir o template Canva correspondente.
3. Inserir título, data, horário e foto.
4. Baixar em PNG/JPG.
5. Publicar no Instagram com legenda clara.

## 9. Boas Práticas De Imagem

- Banner do site: imagem horizontal, clara, com área livre para texto.
- Post Instagram: imagem quadrada ou vertical, sem excesso de detalhes.
- Story: imagem vertical, texto grande e direto.
- Evite arquivos muito pesados. Use JPG para fotos e PNG para artes.
- Não publique rostos de crianças em destaque sem autorização.

## 10. Solução De Problemas

| Problema | O que fazer |
|---|---|
| Site não atualizou | Aguarde 3-5 minutos e confira se o commit foi feito na branch `main` |
| Build falhou | Verifique se o JSON tem vírgulas e aspas corretas |
| Imagem não aparece | Confirme se o caminho começa com `/images/` e se o nome do arquivo está igual |
| Texto quebrou no banner | Reduza o título ou a frase de apoio |
| Precisa de CMS visual | Registrar demanda para fase futura; Decap CMS está adiado |

## 11. Contatos De Suporte

| Quem | Quando acionar |
|---|---|
| Marços / ResultX | Problemas técnicos, domínio, deploy, alterações estruturais |
| Pastoral da Comúnicação | Posts, banners, calendário e fotos |
