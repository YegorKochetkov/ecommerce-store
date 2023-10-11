import React from "react";

import { Billboard as BillboardType } from "@/types";

const Billboard = ({ data }: { data: BillboardType }) => {
  return (
    <article className='p-4 sm:p-6 lg:p-8'>
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className={`
          rounded-xl overflow-hidden aspect-square sm:aspect-[5/2]
          bg-center bg-cover bg-no-repeat
        `}
      >
        <div className='w-full h-full grid place-items-center'>
          <h1
            className={`
            font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs
            p-3 sm:p-4 lg:p-6 rounded-xl bg-white bg-opacity-30
          `}
          >
            {data.label}
          </h1>
        </div>
      </div>
    </article>
  );
};

export default Billboard;
