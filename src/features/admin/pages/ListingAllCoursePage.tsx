import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import AllCourseLayout from "../components/courses/AllCourseLayout"

export default function ListingAllCoursePage() {
  return (
    <div>
        <AdminBreadCrumb currentPageTitle="All Courses" />
        <AllCourseLayout />
    </div>
  )
}
