import React from "react";
import { FaPlay } from "react-icons/fa";

type Props = {
  lessonName: string;
  isSelected: boolean;
};

const LessonCard = ({ lessonName, isSelected }: Props) => {
  return (
    <div className={`flex justify-between items-center p-[12px] gap-[12px]`}>
      <div className="text-nowrap truncate text-[16px]">{lessonName}</div>
      {isSelected ? (
        <div>
          <FaPlay className="text-[12px]" />
        </div>
      ) : null}
    </div>
  );
};

export default LessonCard;
