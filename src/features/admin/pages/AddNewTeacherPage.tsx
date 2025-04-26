import AdminBreadCrumb from "@/components/AdminBreadCrumb";
import AddNewTeacher from "../components/users/teachers/AddNewTeacher";


export default function AddNewTeacherPage() {
  return (
    <div>
    <h1 className="px-5 mb-5 text-xl font-bold">New Teacher</h1>
    <AdminBreadCrumb currentPageTitle="Add New Teacher" links={[{name: "Teachers", path: "/admin/teachers"}]}/>
    <AddNewTeacher/>
  </div>
  
  )
}
