"use client";

import React from "react";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <article
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4
        max-w-xs w-full'
    >
      <div className='rounded-xl aspect-square bg-gray-100 relative'>
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          className='object-cover aspect-square rounded-md'
        />
        <div
          className='opacity-0 group-hover:opacity-100 flex justify-center
            transition absolute px-6 bottom-5 w-full gap-4'
        >
          <IconButton
            onClick={() => {}}
            icon={<Expand size={20} className='text-gray-600' />}
          />
          <IconButton
            onClick={() => {}}
            icon={<ShoppingCart size={20} className='text-gray-600' />}
          />
        </div>
      </div>
      <div>
        <h3 className='font-semibold text-lg'>{data.name}</h3>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      <Currency value={data.price} />
    </article>
  );
};

export default ProductCard;
