import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive = pathName === link.url;
  return (
    <Link
      href={link.url}
      className={`rounded-lg p-2 ${
        isActive ? "bg-white text-black font-semibold" : "text-white"
      }`}>
      {link.title}
    </Link>
  );
};

export default NavLink;
