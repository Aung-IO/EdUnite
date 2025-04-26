import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import CourseRequestLayout from "../components/requests/CourseRequestLayout"

export default function ListingCreateCourseRequestsPage() {
  return (
    <div>
      <AdminBreadCrumb currentPageTitle="Course Requests" />
      <CourseRequestLayout />
    </div>
  )
}
