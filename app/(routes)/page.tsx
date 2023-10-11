import React from "react";

import Billboard from "@/components/billboard";
import { getBillboard } from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("b0f7404a-cbcb-4d22-8dc5-84a0dc0517aa");

  return (
    <main className='px-4 sm:px-6 lg:px-8'>
      <div className='container m-auto'>
        <Billboard data={billboard} />
      </div>
    </main>
  );
};

export default HomePage;
