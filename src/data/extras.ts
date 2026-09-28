import type { Milestone, GalleryItem } from "@/types";

export interface GalleryCategory {
  slug: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { slug: "all", label: "All" },
  { slug: "programs", label: "Programs" },
  { slug: "events", label: "Events" },
  { slug: "team", label: "Team" },
  { slug: "community", label: "Community" },
  { slug: "locations", label: "Locations" },
  { slug: "founder", label: "Founder" },
];

export const milestones: Milestone[] = [
  {
    id: "ms-1",
    label: "Established",
    value: undefined,
    suffix: "",
  },
  {
    id: "ms-2",
    label: "People Supported",
    value: undefined,
    suffix: "+",
  },
  {
    id: "ms-3",
    label: "Programs",
    value: undefined,
    suffix: "+",
  },
  {
    id: "ms-4",
    label: "Locations",
    value: undefined,
    suffix: "+",
  },
];

export const gallery: GalleryItem[] = [
  {
    id: "g-1",
    category: "programs",
    title: "Program Session",
  },
  {
    id: "g-2",
    category: "community",
    title: "Community Gathering",
  },
  {
    id: "g-3",
    category: "founder",
    title: "Founder Session",
  },
  {
    id: "g-4",
    category: "locations",
    title: "BMS Wellnest Space",
  },
  {
    id: "g-5",
    category: "team",
    title: "Our Team",
  },
  {
    id: "g-6",
    category: "events",
    title: "Wellness Event",
  },
  {
    id: "g-7",
    category: "programs",
    title: "Guided Session",
  },
  {
    id: "g-8",
    category: "community",
    title: "Group Activity",
  },
];
