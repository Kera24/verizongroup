export const siteConfig = {
  name: "Verizon Group",
  tagline: "End-to-end digital solutions for education and enterprises.",
  bookingUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL ||
    "https://calendar.google.com/calendar/u/0?cid=cGxhY2Vob2xkZXJAZ21haWwuY29t",
  contact: {
    email: "hello@verizongroup.com",
    phone: "+61-000-000-000",
    address: "123 Innovation Way, Sydney, Australia"
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/book-meeting", label: "Book Meeting" },
    { href: "/contact", label: "Contact" }
  ]
};

export const serviceOptions = [
  "Complete Moodle Solution",
  "Server Hosting & Maintenance",
  "Cloud Infrastructure & DevOps",
  "Custom Integrations & Automation",
  "Managed Support & Training",
  "Other"
];
