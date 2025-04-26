import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import StudentRequestLayout from "../components/requests/StudentRequestLayout"

export default function ListingStudentRequestsPage() {
  return (
    <div>
      <AdminBreadCrumb currentPageTitle="Student Requests" />
      <StudentRequestLayout />
    </div>
  )
}
