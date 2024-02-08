import React from "react";
import CardWrap from "./_cardWrap";
import CardTitle from "./_cardTitle";
import CardMain from "./_cardMain";
import CardFooter from "./_cardFooter";
import { limitarTexto } from "@/helper/helper";
import { Draggable } from "@hello-pangea/dnd";
import { TiketTypes } from "@/@types/tiketTypes";

interface CardPorps extends TiketTypes {
  index: number;
}

const Card = ({
  id,
  title,
  subTitle,
  description,
  status,
  prioridade,
  index,
}: CardPorps) => {
  return (
    <Draggable
      key={id}
      draggableId={id.toString()}
      index={index}
      shouldRespectForcePress
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${snapshot.isDragging ? "opacity-50 bg-black" : ""}`}
        >
          <CardWrap prioridade={prioridade}>
            <CardTitle
              id={id}
              title={title}
              subTitle={subTitle}
              prioridade={prioridade}
              status={status}
              description={description}
            />
            <CardMain
              description={limitarTexto(description)}
              className="hidden"
            />
            <CardFooter />
          </CardWrap>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
