import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
  IconFileCv
} from "@tabler/icons-react";
import { FloatingDock } from "./FloatingButtonsSection";

export function FloatingButtons() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/muhammad-osama-noor-uddin-1908741b4/",
      target: "_blank",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contactEmail",
    },
    {
      title: "CV",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/MuhammadOsamaNooruddin",
    },
    {
      title: "CV",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/assets/Osama_CV.pdf",
    },
  ];
  return (
  <>
    <FloatingDock items={links} />
  </>
  );
}
