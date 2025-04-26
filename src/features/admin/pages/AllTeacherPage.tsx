import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import PaginationComponent from "@/components/PaginationComponent"
import TeacherHeader from "../components/users/teachers/TeacherHeader"
import TeacherTable from "../components/users/teachers/TeacherTable"

export default function AllTeacherPage() {



  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Teachers</h1>
      <AdminBreadCrumb currentPageTitle="Teachers"/>
      <TeacherHeader />
      <TeacherTable />
      <PaginationComponent />
    </div>
  )
}
