import AdminBreadCrumb from "@/components/AdminBreadCrumb"
import PaginationComponent from "@/components/PaginationComponent"
import UserTable from "../components/users/allUsers/UserTable"
import UserHeader from "../components/users/allUsers/UserHeader"

export default function AllUserPage() {



  return (
    <div>
      <h1 className="px-5 mb-5 text-xl font-bold">Users</h1>
      <AdminBreadCrumb currentPageTitle="Users"/>
      <UserHeader />
      <UserTable />
      <PaginationComponent />
    </div>
  )
}
