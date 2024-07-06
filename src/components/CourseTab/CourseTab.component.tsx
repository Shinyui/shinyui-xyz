"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tabs, Tab, Accordion, AccordionItem } from "@nextui-org/react";
import LessonCard from "@/components/LessonCard/LessonCard.component";
import { CourseTab as CourseTabInterface } from "./type";

const CourseTab = (course: CourseTabInterface) => {
  const searchParams = useSearchParams();
  const item = searchParams.get("item");

  return (
    <Tabs aria-label="Options" color="default" variant="underlined">
      <Tab key="unit" title="課程單元">
        <div>
          <Accordion variant="splitted" className="p-0">
            {course.chapters.map((chapter, idx) => {
              return (
                <AccordionItem
                  key={idx}
                  aria-label="Accordion"
                  title={chapter.chapterName}
                >
                  <div className="flex flex-col gap-[6px] mb-[12px]">
                    {chapter.lessons.map((lesson) => {
                      return (
                        <Link
                          key={lesson.id}
                          href={`/courses/${course.id}?item=${lesson.id}`}
                        >
                          <LessonCard
                            lessonName={lesson.lessonName}
                            isSelected={lesson.id === item ? true : false}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Tab>
      <Tab key="info" title="課程介紹">
        <div>
          <p className="text-md">{course.courseDescription}</p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default CourseTab;
