import {
  Users,
  BookOpen,
  Briefcase,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

export interface Program {
  title: string;
  description: string;
  icon: any; // Using any for Lucide icon components
  link: string;
}

export const programs: Program[] = [
  {
    title: "Women Forum",
    description:
      "A platform for women entrepreneurs and professionals to connect and grow.",
    icon: Users,
    link: "https://opensvforums.org",
  },
  {
    title: "Workshops",
    description:
      "Regular events where people with particular interests gather to learn from others via meetups, talks and hands-on sessions.",
    icon: BookOpen,
    link: "/programs/workshops",
  },
  {
    title: "Mentorship",
    description:
      "Guidance for business leaders seeking expertise and direction to take their established businesses to the next level.",
    icon: Lightbulb,
    link: "/programs/mentorship",
  },
  {
    title: "Launchpad",
    description:
      "Legal and business advice from experts on company structure, partnerships, taxation, employee contracts, and more.",
    icon: Briefcase,
    link: "/programs/launchpad",
  },
  {
    title: "Career Dev",
    description:
      "Promoting lifelong learning and skill development to help professionals adapt to evolving job markets and opportunities.",
    icon: GraduationCap,
    link: "/programs/career-development",
  },
];
