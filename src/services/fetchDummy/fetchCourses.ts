// src/services/fetchDummy/fetchCourses.ts
import { dummyCourses } from "@/assets/dummy-datas/course"; // still using dummy for now

export const fetchDummyCourses = async () => {
  await new Promise((res) => setTimeout(res, 300));

  return dummyCourses;
};

export const getDummyCourseById = async (id: string) => {
  await new Promise((res) => setTimeout(res, 300));
  const course = dummyCourses.find((course) => course.id === id);
  if (!course) {
    throw new Error("Course not found");
  }

  return course;
};
