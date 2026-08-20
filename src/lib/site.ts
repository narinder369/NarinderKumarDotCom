export const site = {
  name: "Narinder Kumar",
  role: "Software Developer & Digital Solutions Specialist",
  tagline: "Websites • Digital Presence • Custom Web Solutions",
  url: "https://narinderkumar.com",
  email: "hello@narinderkumar.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "/contact",
  location: "India",
  title: "Narinder Kumar | Software Developer & Digital Solutions Specialist",
  description:
    "Narinder Kumar builds modern websites, web applications and digital solutions that help businesses build trust, attract customers and grow online.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    href: "/#solutions",
    label: "Solutions",
    children: [
      { href: "/clinics", label: "Clinics" },
      { href: "/solutions/local-businesses", label: "Local Businesses" },
      { href: "/solutions/startups", label: "Startups" },
      { href: "/solutions/custom", label: "Custom Solutions" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const projects = [
  {
    slug: "careplus-clinic",
    title: "CarePlus Clinic",
    category: "Website Design & Development",
    description:
      "A calm, professional clinic website designed to help patients understand services, meet the doctor, and make an enquiry with confidence.",
    image: "/images/careplus-clinic.svg",
  },
  {
    slug: "smile-dental-care",
    title: "Smile Dental Care",
    category: "Website Design & Development",
    description:
      "A clean dental practice website focused on treatments, trust, and making it easy for new patients to get in touch.",
    image: "/images/smile-dental-care.svg",
  },
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    category: "Custom Web Application",
    description:
      "A custom web application for organising appointments, patient records, and day-to-day clinic operations in one place.",
    image: "/images/clinic-management-system.svg",
  },
] as const;
