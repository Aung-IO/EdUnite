import { Teacher } from "@/types/User";
import { Stundent } from "@/types/User";
import { dummyCourses } from "./course";

export const dummyTeachers: Teacher[] = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@school.com",
      phone_number: 1234567890,
      role: "Teacher",
      created_courses: dummyCourses.filter((course) => course.user_id === "1"),
      subjects_type: "profession",
      subjects: [{ name: "Software Engineering" }]
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@school.com",
      phone_number: 1234567891,
      role: "Teacher",
      created_courses: dummyCourses.filter((course) => course.user_id === "2"),
      subjects_type: "basic",
      subjects: [{ name: "Mathematics", grade: "10" }]
    },
    {
      id: "3",
      name: "Clara King",
      email: "clara@school.com",
      phone_number: 1234567892,
      role: "Teacher",
      created_courses: dummyCourses.filter((course) => course.user_id === "3"),
      subjects_type: "profession",
      subjects: [{ name: "Graphic Design" }]
    },
    {
      id: "4",
      name: "David Green",
      email: "david@school.com",
      phone_number: 1234567893,
      role: "Teacher",
      created_courses: dummyCourses.filter((course) => course.user_id === "4"),
      subjects_type: "basic",
      subjects: [{ name: "English", grade: "9" }]
    },
    {
      id: "5",
      name: "Eva Lee",
      email: "eva@school.com",
      phone_number: 1234567894,
      role: "Teacher",
      created_courses: dummyCourses.filter((course) => course.user_id === "5"),
      subjects_type: "profession",
      subjects: [{ name: "AI & ML" }]
    }
  ];
  
export const dummyStudents: Stundent[] = [
    {
      id: "6",
      name: "Frank Miles",
      email: "frank@student.com",
      phone_number: 9876543210,
      role: "Stundent",
      enrolled_courses: dummyCourses.filter((course) => course.student_quantity.includes("6")),
      grade: "10"
    },
    {
      id: "7",
      name: "Grace Kim",
      email: "grace@student.com",
      phone_number: 9876543211,
      role: "Stundent",
      enrolled_courses: dummyCourses.filter((course) => course.student_quantity.includes("7")),
      grade: "11"
    },
    {
      id: "8",
      name: "Henry Liu",
      email: "henry@student.com",
      phone_number: 9876543212,
      role: "Stundent",
      enrolled_courses: dummyCourses.filter((course) => course.student_quantity.includes("8")),
      grade: "12"
    },
    {
      id: "9",
      name: "Ivy Chan",
      email: "ivy@student.com",
      phone_number: 9876543213,
      role: "Stundent",
      enrolled_courses: dummyCourses.filter((course) => course.student_quantity.includes("9")),
      grade: "9"
    },
    {
      id: "10",
      name: "Jake Perez",
      email: "jake@student.com",
      phone_number: 9876543214,
      role: "Stundent",
      enrolled_courses: dummyCourses.filter((course) => course.student_quantity.includes("10")),
      grade: "8"
    }
  ];
  