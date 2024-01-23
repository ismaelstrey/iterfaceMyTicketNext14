import React, { useContext } from "react";
import BoardWrap from "./_boardWrap";
import BoardColumn from "./_boardColumn";
import Card from "../card";
import { TicketContext } from "@/app/context/TicketContext";

const Board = () => {
  const { apiTicket, ticketType } = useContext(TicketContext);
  const RenderBoard = () =>
    ticketType.map((l, key) => (
      <BoardColumn title={l} key={key} id={key}>
        {apiTicket
          .filter((filtra) => filtra.type === l)
          .map((lista, index) => (
            <Card
              key={lista.id}
              index={index}
              id={lista.id}
              type={lista.type}
              title={lista.title}
              subTitle={lista.subTitle}
              description={lista.description}
              prioridade={lista.prioridade}
            />
          ))}
      </BoardColumn>
    ));
  return (
    <BoardWrap>
      <RenderBoard />
    </BoardWrap>
  );
};

export default Board;
