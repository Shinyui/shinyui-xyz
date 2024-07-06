"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { queryLesson } from "@/graphql/course.query";
import Lesson from "./type";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const CoursePlayer = () => {
  const [lesson, setLesson] = useState<Lesson>();
  const searchParams = useSearchParams();
  const item = searchParams.get("item");

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await queryLesson(item);
      setLesson(lesson.lesson);
    };

    fetchLesson();
  }, [item]);

  return (
    <div>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        style={{ aspectRatio: "16/9", marginBottom: "16px" }}
        url={`https://www.youtube.com/watch?v=${lesson?.youtubeVideoId}`}
        controls={true}
      />
      <div>
        <p className="text-[16px] text-[#A1A1A1]">正在播放</p>
        <h2 className="text-[24px]">
          {lesson?.lessonName ? lesson.lessonName : ""}
        </h2>
      </div>
    </div>
  );
};

export default CoursePlayer;
