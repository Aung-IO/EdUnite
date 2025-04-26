import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";


export default function StudentLayout() {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 min-h-screen">
        <Navbar />
        <Outlet />
    </div>
  )
}
