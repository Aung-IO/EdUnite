import CourseRequestForm from "../components/RequestForm";

const courses = [
  'Web Development',
  'Data Science',
  'Machine Learning',
  'Graphic Design',
  'Business Management',
];
export default function StudentCourseRequestForm() {
  return (
    <CourseRequestForm courses={courses} />
  )
}
