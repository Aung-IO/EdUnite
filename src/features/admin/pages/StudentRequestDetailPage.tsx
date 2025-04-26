import AdminBreadCrumb from "@/components/AdminBreadCrumb";
import StudentRequestDetail from "../components/requests/StudentRequestDetail";
import { useParams } from "react-router-dom";


export default function StudentRequestDetailPage() {
  const {title} = useParams<string>();
  return (
    <div>
        <AdminBreadCrumb currentPageTitle={title} links={[{name: "Student Requests", path: "/admin/request/student-requests"}]} />
        <StudentRequestDetail />
    </div>
  )
}
