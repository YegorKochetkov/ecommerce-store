import { Billboard } from "@/types";

const billboardsUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${billboardsUrl}/${id}`);

  return res.json();
};
