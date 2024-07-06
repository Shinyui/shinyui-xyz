interface CourseTab {
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

export { CourseTab };
