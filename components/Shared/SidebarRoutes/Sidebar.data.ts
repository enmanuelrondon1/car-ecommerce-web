import { Calendar, Car, FolderClosed, Globe, Heart } from "lucide-react";

export const NavLinks = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "ABOUT", link: "/about" },
  { id: 3, name: "SERVICES", link: "/services" },
  { id: 4, name: "CONTACT", link: "/contact" },
];

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Love Cars",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: FolderClosed,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Globe,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];
