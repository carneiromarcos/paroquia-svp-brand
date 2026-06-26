import parishRaw from "@content/parish.json";
import homeRaw from "@content/home.json";
import scheduleRaw from "@content/schedule.json";
import pastoralsData from "@content/pastorals.json";
import eventsRaw from "@content/events.json";
import announcementsRaw from "@content/announcements.json";
import transparencyRaw from "@content/transparency.json";

export const parish = { ...parishRaw };

export const heroSlides = homeRaw.heroSlides;

export const schedule = {
  masses: scheduleRaw.masses,
  confessions: scheduleRaw.confessions,
  adoration: scheduleRaw.adoration,
  office: {
    weekdays: scheduleRaw.officeWeekdays,
    saturday: scheduleRaw.officeSaturday,
    sunday: scheduleRaw.officeSunday,
  },
};

export const pastorals = pastoralsData.pastorals;
export const movements = pastoralsData.movements;
export const services = pastoralsData.services;
export const communities = pastoralsData.communities;
export const events = eventsRaw.items;
export const announcements = announcementsRaw.items;
export const transparency = transparencyRaw.items;

export type LiturgicalSeason = "ordinary" | "advent" | "christmas" | "lent" | "easter" | "pentecost";

export function getCurrentSeason(): { season: LiturgicalSeason; label: string; color: string } {
  const month = new Date().getMonth() + 1;
  if (month === 12 || (month >= 11 && new Date().getDate() >= 28)) return { season: "advent", label: "Tempo do Advento", color: "var(--color-lit-purple)" };
  if (month === 1 || (month === 2 && new Date().getDate() <= 2)) return { season: "christmas", label: "Tempo do Natal", color: "var(--color-gold)" };
  if (month >= 2 && month <= 3) return { season: "lent", label: "Tempo da Quaresma", color: "var(--color-lit-purple)" };
  if (month >= 4 && month <= 5) return { season: "easter", label: "Tempo Pascal", color: "var(--color-surface)" };
  return { season: "ordinary", label: "Tempo Comum", color: "var(--color-green)" };
}
