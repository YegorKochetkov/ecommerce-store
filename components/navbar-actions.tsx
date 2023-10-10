import React from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  return (
    <div className='flex items-center gap-4'>
      <Button>
        <ShoppingBag size={20} color='white' />
        <span className='text-sm font-medium'>0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
