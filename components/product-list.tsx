import React from "react";

import NoResults from "@/components/ui/no-results";
import { Product } from "@/types";

const ProductList = ({ title, items }: { title: string; items: Product[] }) => {
  return (
    <section className='space-y-4'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductList;
