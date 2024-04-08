"use client";

import { ClockIcon, HomeIcon, PencilIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/admin/home", icon: HomeIcon },
  { name: "Projects", href: "/admin/projects", icon: PencilIcon },
  { name: "Timeline", href: "/admin/timeline", icon: ClockIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md interactive-bg-surface-variant p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3", {
              "bg-tertiary-container text-on-tertiary-container": pathname === link.href,
            })}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
