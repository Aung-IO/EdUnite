import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import PaginationComponent from "@/components/PaginationComponent"
import StudentHeader from "../components/users/students/StudentHeader"
import StudentTable from "../components/users/students/StudentTable"

export default function AllStudentPage() {



  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Students</h1>
      <AdminBreadCrumb currentPageTitle="All Students"/>
      <StudentHeader />
      <StudentTable />
      <PaginationComponent />
    </div>
  )
}
