"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Location",
      path: "/location",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },

    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "category",
      path: "/category",
    },
  ];

  const handleLogin = () => {
    router.push("/about");
  };

  if (pathName.includes("dashboard"))
    return (
      <div className="bg-green-500 p-6">
        <h1>Dashboard</h1>
      </div>
    );

  return (
    <nav className="bg-slate-600 p-6 flex justify-between items-center">
      <h6>Portfolio</h6>
      <ul className="flex justify-end items-center space-x-4">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-red-300"}`}
            key={link.path}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
        <button onClick={handleLogin} className="bg-red-300 p-2">
          Log in
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
