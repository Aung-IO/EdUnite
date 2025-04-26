import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import TeacherRequest from "../components/users/teachers/TeacherRequest"

export default function ListingTeacherRequestsPage() {
  return (
    <div>
        <AdminBreadCrumb currentPageTitle="Teacher Requests" />
        <TeacherRequest/>
    </div>
  )
}
