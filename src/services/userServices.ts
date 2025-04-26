import API from "@/api/apiConfig";
import {
  fetchAllDummyStudents,
  fetchAllDummyTeacher,
  fetchAllDummyUsers,
} from "./fetchDummy/fetchAllUsers";
import { dummyCourses } from "@/assets/dummy-datas/course";
import { BaseCourse } from "@/types/Course";

export const getUserById = async (id: string) => {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    const data = fetchAllDummyUsers();
    return data;
  }
};

export const getAllTeachers = async () => {
  try {
    const response = await API.get("/users/teachers");
    return response.data;
  } catch (error) {
    const data = fetchAllDummyTeacher();
    return data;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await API.get("/users/students");
    return response.data;
  } catch (error) {
    const data = fetchAllDummyStudents();
    return data;
  }
};

export const getCoursesByUserId = async (userId: string) => {

  try {
    const response = await API.get(`/users/${userId}/courses`);
    return response.data;
  } catch (error) {
    const data = dummyCourses.filter((course) => course.user_id === userId);
    return data;
  }
};

export const createCourseByUserId = async (userId: string, courseData: BaseCourse) => {
  try {
    const response = await API.post(`/users/${userId}/courses`, courseData);
    return response.data;
  } catch (error) {
    localStorage.setItem("createdCourse", JSON.stringify(courseData));
    return {message: "Course created successfully"};
  }
};
