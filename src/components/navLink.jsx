import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.url}
      className={`rounded-lg p-2 ${
        pathName === link.url && "bg-black text-white"
      }`}>
      {link.title}
    </Link>
  );
};

export default NavLink;
