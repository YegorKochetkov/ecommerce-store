import React from "react";
import Link from "next/link";

import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import { getCategories } from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className='border-b py-4 px-4 sm:px-6 lg:px-8'>
      <div className='container flex items-center flex-wrap gap-4'>
        <Link href='/'>
          <span className='font-bold text-xl'>STORE</span>
        </Link>
        <span className='mr-auto'>
          <MainNav data={categories} />
        </span>
        <NavbarActions />
      </div>
    </header>
  );
};

export default Navbar;
