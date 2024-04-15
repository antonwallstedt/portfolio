"use client";

import { ClockIcon, HomeIcon, PencilIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/admin/dashboard/home", icon: HomeIcon },
  { name: "Projects", href: "/admin/dashboard/projects", icon: PencilIcon },
  { name: "Timeline", href: "/admin/dashboard/timeline", icon: ClockIcon },
  { name: "Experience", href: "/admin/dashboard/experience", icon: ClockIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex space-x-36 drop-shadow-sm">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex space-x-2", {
              "text-blue-900": pathname === link.href,
            })}
          >
            <h1 className="text-xl font-semibold">{link.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}
