import { colorType } from "@/app/helper/helper";
import React from "react";
interface CardTitleProps {
  id: number;
  title: string;
  subTitle: string;
  type: string;
}

const CardTitle = ({ id, title, subTitle, type }: CardTitleProps) => {

  return (
    <div className="flex flex-col hover:cursor-pointer bg-slate-900/80 " aria-description={type}>
      <div className="flex ml-3 mt-2 justify-between">
        <div className="flex flex-col">
          <span className="font-extrabold text-2xl">{title}</span>
          <span className="italic text-slate-400">{subTitle}</span>
        </div>
        <div className={`flex h-10 w-10 justify-center content-center items-center rounded-full m-2 border-2 border-dotted font-extrabold ${colorType(type)}`}>
          {id}
        </div>
      </div>
      <span className="flex mt-2 bg-red-400 h-1 w-full rounded-r-lg"></span>
    </div>
  );
};

export default CardTitle;
