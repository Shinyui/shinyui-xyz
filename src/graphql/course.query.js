import { gql, request } from "graphql-request";

const queryCourses = async () => {
  const query = gql`
    {
      courses {
        id
        courseName
        courseDescription
        isHidden
      }
    }
  `;

  return await request(process.env.hygraphEndpoint, query);
};

const queryCourse = async (id) => {
  const query = gql`
    {
      course(where: { id: ${JSON.stringify(id)} }) {
        id
        courseName
        courseDescription
        chapters {
          ... on Chapter {
            id
            chapterName
            lessons {
              id
              lessonName
            }
          }
        }
      }
    }
  `;

  return await request(process.env.hygraphEndpoint, query);
};
const queryLesson = async (id) => {
  const query = gql`
    {
      lesson(where: { id: ${JSON.stringify(id)}}) {
        id
        lessonName
        videoSource
        youtubeVideoId
        bunnyVideoId
        bunnyVideoLibraryId
      }
    }
  `;

  return await request(process.env.hygraphEndpoint, query);
};

export { queryCourses, queryCourse, queryLesson };
