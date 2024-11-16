import { DeleteBoard } from "@/app/actions/delete-board";
import { Button } from "@/components/ui/button";
import React from "react";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = DeleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <Button type="submit" variant={"destructive"} size={"sm"}>
        Delete
      </Button>
    </form>
  );
};

export default Board;
