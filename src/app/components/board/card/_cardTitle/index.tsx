import { TiketTypes } from "@/app/@types/tiketTypes";
import { colorPrioridade, colorType } from "@/app/helper/helper";
import React from "react";

const CardTitle = ({ id, title, subTitle, status, prioridade }: TiketTypes) => {
  return (
    <div
      className="flex flex-col hover:cursor-pointer bg-slate-900/80 "
      aria-description={status}
    >
      <div className="flex ml-3 mt-2 justify-between">
        <div className="flex flex-col">
          <span className="font-extrabold md:text-2xl">{title}</span>
          <span className="italic text-slate-400">{subTitle}</span>
        </div>
        <div
          className={`flex h-10 w-10 justify-center content-center items-center rounded-full m-2 border-2 border-dotted font-extrabold ${colorType(
            status
          )}`}
        >
          {id}
        </div>
      </div>
      <span
        className={`flex mt-2 h-1 w-full rounded-r-lg ${
          prioridade && colorPrioridade(prioridade)
        }`}
      ></span>
    </div>
  );
};

export default CardTitle;
