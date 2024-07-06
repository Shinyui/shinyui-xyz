import { Course, CourseShowProps } from "./type";
import { queryCourse } from "@/graphql/course.query";
import CourseTab from "@/components/CourseTab/CourseTab.component";
import CoursePlayer from "@/components/CoursePlayer/CoursePlayer.component";
import "./page.style.css";

const fetchCourse = async (id: string): Promise<Course> => {
  const course = await queryCourse(id);
  return course.course;
};

const Courses = async (props: CourseShowProps) => {
  const course = await fetchCourse(props.params.id);

  return (
    <div>
      <section className="mb-[24px]">
        <CoursePlayer />
        <div className="flex w-full flex-col w-full">
          <CourseTab
            id={course.id}
            courseName={course.courseName}
            courseDescription={course.courseDescription}
            chapters={course.chapters}
          />
        </div>
      </section>
    </div>
  );
};

export default Courses;
export const revalidate = 60;
