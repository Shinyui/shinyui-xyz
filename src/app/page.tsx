import Link from "next/link";
import { Card } from "@nextui-org/react";
import CourseCard from "@/components/CourseCard/CourseCard.component";
import OrangeLavaCard from "@/components/Svg/ToolCard/OrangeLavaCard.component";
import VioletCard from "@/components/Svg/ToolCard/VioletCard.component";
import BlueCard from "@/components/Svg/ToolCard/BlueCard.component";
import { queryCourses } from "@/graphql/course.query";

type Course = {
  id: string;
  courseName: string;
  courseDescription: string;
  isHidden: boolean;
};

const fetchCourses = async () => {
  const courses = await queryCourses();
  return courses.courses;
};

const Home = async () => {
  const courses = await fetchCourses();

  const getLocalDateString = () => {
    const dataArray = new Date()
      .toLocaleDateString("zh-TW", { timeZone: "Asia/Taipei" })
      .split("/");
    return `${dataArray[0]} 年 ${dataArray[1]} 月 ${dataArray[2]} 日`;
  };

  return (
    <div>
      <div className="mb-[24px]">
        <h2 className="text-2xl">今天</h2>
        <p className="text-md text-[#A1A1A1]">{getLocalDateString()}</p>
      </div>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">交易必備工具</h2>
        <div className="flex overflow-scroll gap-[16px]">
          <Link href={"/calculator/future-size"}>
            <div className="aspect-[2/1] h-[100px]">
              <Card
                className="bg-transparent border-0"
                isBlurred={false}
                isPressable={true}
                shadow="none"
              >
                <OrangeLavaCard title="倉位計算機" subTitle="永續合約必備" />
              </Card>
            </div>
          </Link>

          <Link href={"/calculator/propfirm-size"}>
            <div className="aspect-[2/1] h-[100px]">
              <Card
                className="bg-transparent border-0"
                isBlurred={false}
                isPressable={true}
                shadow="none"
              >
                <OrangeLavaCard title="手數計算機" subTitle="機構倉必備" />
              </Card>
            </div>
          </Link>

          <Link href={"https://www.aicoin.com/en"}>
            <div className="aspect-[2/1] h-[100px]">
              <Card
                className="bg-transparent border-0"
                isBlurred={false}
                isPressable={true}
                shadow="none"
              >
                <VioletCard title="AiCoin" subTitle="必備看盤軟體" />
              </Card>
            </div>
          </Link>

          <Link href={"https://www.jin10.com"}>
            <div className="aspect-[2/1] h-[100px]">
              <Card
                className="bg-transparent border-0"
                isBlurred={false}
                isPressable={true}
                shadow="none"
              >
                <BlueCard title="金十數據" subTitle="財經資訊必讀" />
              </Card>
            </div>
          </Link>
        </div>
      </section>

      <section className="mb-[24px]">
        <h2 className="text-3xl mb-[12px]">精選交易課程</h2>
        <div className="flex overflow-scroll gap-[10px]">
          {courses.map((course: Course) => {
            if (course.isHidden === false) {
              return (
                <div key={course.id}>
                  <Link href={`/courses/${course.id}`}>
                    <CourseCard
                      title={course.courseName}
                      description={course.courseDescription}
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
