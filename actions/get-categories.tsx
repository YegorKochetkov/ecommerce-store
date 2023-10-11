import { Category } from "@/types";

const storeUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(storeUrl);

  return res.json();
};
