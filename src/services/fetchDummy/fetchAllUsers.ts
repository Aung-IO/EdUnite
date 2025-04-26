import { dummyAllUser } from "@/assets/dummy-datas/allUser";
import { dummyStudents, dummyTeachers } from "@/assets/dummy-datas/user";

export const fetchAllDummyUsers = async () => {
  await new Promise((res) => setTimeout(res, 300));
  return dummyAllUser;
};


export const fetchAllDummyTeacher = async() => {
  await new Promise((res) => setTimeout(res, 300));
  return dummyTeachers;
}

export const fetchAllDummyStudents = async() => {
  await new Promise((res) => setTimeout(res, 300));
  return dummyStudents;
}