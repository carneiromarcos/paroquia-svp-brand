export const parish = {
  name: "Paroquia Sao Vicente de Paulo",
  shortName: "PSVP",
  tagline: "A caridade e o amor posto em acao.",
  address: "Rua Visconde de Maua, 2000",
  neighborhood: "Aldeota",
  city: "Fortaleza/CE",
  cep: "60125-160",
  phone: "(85) 3261-1234",
  whatsapp: "5585991234567",
  whatsappDisplay: "(85) 99123-4567",
  email: "contato@psvp.org.br",
  instagram: "https://instagram.com/saovicentealdeota",
  instagramHandle: "@saovicentealdeota",
  youtube: "https://youtube.com/@saovicentealdeota",
  facebook: "https://facebook.com/saovicentealdeota",
  pix: "12.345.678/0001-90",
  bank: { name: "Banco do Brasil", agency: "1234-5", account: "12345-6" },
};

export const schedule = {
  masses: [
    { day: "Segunda a Sexta", time: "7h e 18h" },
    { day: "Sabado", time: "7h e 17h" },
    { day: "Domingo", time: "7h, 9h, 11h e 18h" },
  ],
  confessions: "Terca a Sabado: 15h as 17h",
  adoration: "Quintas-feiras: 18h30 as 20h",
  office: {
    weekdays: "Segunda a Sexta: 8h - 12h / 14h - 17h",
    saturday: "Sabado: 8h - 12h",
    sunday: "Domingo: Fechada",
  },
};

export const pastorals = [
  { name: "Pastoral da Acolhida", desc: "Recebe e orienta os fieis que chegam a paroquia.", icon: "heart" as const, contact: "Maria - (85) 99111-1111" },
  { name: "Pastoral do Batismo", desc: "Prepara familias para o sacramento do Batismo.", icon: "droplets" as const, contact: "Joao - (85) 99222-2222" },
  { name: "Pastoral da Crianca", desc: "Acompanha gestantes e criancas ate 6 anos.", icon: "baby" as const, contact: "Ana - (85) 99333-3333" },
  { name: "Pastoral Familiar", desc: "Fortalece os lacos familiares e a vida conjugal.", icon: "home" as const, contact: "Pe. Carlos - (85) 99444-4444" },
  { name: "Pastoral da Comunicacao", desc: "Produz conteudo e gerencia redes sociais.", icon: "megaphone" as const, contact: "Lucas - (85) 99555-5555" },
  { name: "Pastoral do Dizimo", desc: "Conscientiza sobre a importancia do dizimo.", icon: "hand-heart" as const, contact: "Rosa - (85) 99666-6666" },
];

export const movements = [
  { name: "RCC", desc: "Renovacao Carismatica Catolica — oracao, louvor e dons.", icon: "flame" as const, contact: "Pedro - (85) 99777-7777" },
  { name: "Terco dos Homens", desc: "Encontro semanal de oracao masculina.", icon: "users" as const, contact: "Francisco - (85) 99888-8888" },
  { name: "Legiao de Maria", desc: "Devocao mariana e apostolado comunitario.", icon: "star" as const, contact: "Lucia - (85) 99999-9999" },
  { name: "Apostolado da Oracao", desc: "Rede mundial de oracao pelo Papa.", icon: "globe" as const, contact: "Teresa - (85) 99000-0000" },
];

export const services = [
  { name: "Coro e Musica", desc: "Animacao liturgica com cantos e instrumentos.", icon: "music" as const, contact: "Rafael - (85) 98111-1111" },
  { name: "Ministros da Eucaristia", desc: "Distribuicao da comunhao nas celebracoes.", icon: "wheat" as const, contact: "Jose - (85) 98222-2222" },
  { name: "Catequese", desc: "Formacao para Primeira Eucaristia e Crisma.", icon: "book-open" as const, contact: "Marta - (85) 98333-3333" },
];

export const events = [
  { title: "Missa Solene do Padroeiro", date: "27 Set", fullDate: "27 de Setembro, Domingo", time: "10h", location: "Igreja Matriz", tag: "Celebracao", featured: true, desc: "Missa solene em honra a Sao Vicente de Paulo, padroeiro da paroquia." },
  { title: "Retiro de Quaresma", date: "15 Abr", fullDate: "15 de Abril, Sabado", time: "8h as 17h", location: "Salao Paroquial", tag: "Retiro", desc: "Dia de reflexao e oracao para renovar a caminhada de fe." },
  { title: "Via Sacra Meditada", date: "22 Abr", fullDate: "22 de Abril, Sexta", time: "19h", location: "Igreja Matriz", tag: "Quaresma", desc: "Meditacao sobre os passos de Cristo ate o Calvario." },
  { title: "Encontro de Casais", date: "03 Mai", fullDate: "3 de Maio, Sabado", time: "15h", location: "Salao Paroquial", tag: "Formacao", desc: "Momento de partilha e fortalecimento da vida conjugal." },
];

export const announcements = [
  { title: "Novo horario da Missa vespertina", date: "25 Mar 2026", tag: "Aviso", excerpt: "A partir de abril, a Missa das 18h passa para 18h30 de segunda a sexta." },
  { title: "Inscricoes para Catequese 2026", date: "22 Mar 2026", tag: "Inscricoes", excerpt: "Abertas as inscricoes para Primeira Eucaristia e Crisma. Procure a secretaria." },
];

export type LiturgicalSeason = "ordinary" | "advent" | "christmas" | "lent" | "easter" | "pentecost";

export function getCurrentSeason(): { season: LiturgicalSeason; label: string; color: string } {
  const month = new Date().getMonth() + 1;
  if (month === 12 || (month >= 11 && new Date().getDate() >= 28)) return { season: "advent", label: "Tempo do Advento", color: "var(--color-lit-purple)" };
  if (month === 1 || (month === 2 && new Date().getDate() <= 2)) return { season: "christmas", label: "Tempo do Natal", color: "var(--color-gold)" };
  if (month >= 2 && month <= 3) return { season: "lent", label: "Tempo da Quaresma", color: "var(--color-lit-purple)" };
  if (month >= 4 && month <= 5) return { season: "easter", label: "Tempo Pascal", color: "var(--color-surface)" };
  return { season: "ordinary", label: "Tempo Comum", color: "var(--color-green)" };
}

export const transparency = [
  { label: "Manutencao da Igreja", pct: 35, icon: "building" as const },
  { label: "Acao Social", pct: 25, icon: "heart" as const },
  { label: "Funcionarios", pct: 20, icon: "users" as const },
  { label: "Pastoral", pct: 20, icon: "book-open" as const },
];
