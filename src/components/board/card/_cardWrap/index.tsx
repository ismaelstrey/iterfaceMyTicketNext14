import { colorPrioridade } from "@/helper/helper";
import React, { ReactNode } from "react";
interface CardWrapProps {
  children: ReactNode;
  prioridade?: string;
}
// bg-green-500
const CardWrap = ({ children, prioridade }: CardWrapProps) => {
  console.log(prioridade && colorPrioridade(prioridade))
  return (
    <div className="flex m-2 w-80 h-max-[15rem] bg-sub-menu rounded-md md:w-80">
      <div
        className={`flex h-min-30 w-3 rounded-l-md ${prioridade ? colorPrioridade(prioridade) : "bg-green-500"
          }`}
        title={`Prioridade ${prioridade}`}
      ></div>
      <div className="flex w-full flex-col justify-between text-white">
        {children}
      </div>
    </div>
  );
};

export default CardWrap;
