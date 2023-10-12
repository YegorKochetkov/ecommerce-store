import React from "react";

import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";

const ProductList = ({ title, items }: { title: string; items: Product[] }) => {
  return (
    <section className='space-y-4'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <ul className='flex flex-wrap gap-4'>
          {items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductList;
