import queryString from "query-string";

import { Product } from "@/types";

const productsUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: productsUrl,
    query,
  });

  const res = await fetch(productsUrl);

  return res.json();
};
