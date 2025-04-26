import AdminSidebar from "@/components/AdminSidebar";
import Logout from "@/components/Logout";


export default function AdminLayout() {
  return (
    <div>
      <div className="absolute top-0 right-0 z-10 m-6">
        <Logout />
        </div>
        <AdminSidebar />
        
    </div>
  )
}
