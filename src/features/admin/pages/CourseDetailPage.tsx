import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import { useParams } from "react-router-dom"
import CourseDetail from "../components/courses/CourseDetail";

export default function CourseDetailPage() {

  const {title} = useParams<string>();

  return (
    <div>
      <AdminBreadCrumb currentPageTitle={title} links={[{name: "All Courses", path: "/admin/courses"}]} />
      <CourseDetail />
    </div>
  )
}
