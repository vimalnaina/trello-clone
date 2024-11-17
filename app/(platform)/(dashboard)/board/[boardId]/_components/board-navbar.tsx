import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";
import { BoardOptions } from "./board-options";

interface BoardNavProps {
  data: Board;
}

export const BoardNavBar = async ({ data }: BoardNavProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 text-white gap-x-4">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id}/>
      </div>
    </div>
  );
};
