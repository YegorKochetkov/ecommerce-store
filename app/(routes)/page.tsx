import React from "react";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("b0f7404a-cbcb-4d22-8dc5-84a0dc0517aa");

  return (
    <main className='py-4 px-4 sm:px-6 lg:px-8'>
      <div className='container m-auto grid gap-y-10'>
        <Billboard data={billboard} />
        <ProductList title='Featured Products' items={products} />
      </div>
    </main>
  );
};

export default HomePage;
