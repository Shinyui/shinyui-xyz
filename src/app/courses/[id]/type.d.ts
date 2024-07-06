interface Course {
  id: string;
  courseName: string;
  courseDescription: string;
  chapters: {
    id: string;
    chapterName: string;
    lessons: {
      id: string;
      lessonName: string;
      bunnyVideoId: string | null;
      bunnyVideoLibraryId: string | null;
      videoSource: string;
      youtubeVideoId: string;
    }[];
  }[];
}

interface CourseShowProps {
  params: {
    id: string;
  };
}

export { Course, CourseShowProps };
