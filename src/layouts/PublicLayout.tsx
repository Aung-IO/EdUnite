import Navbar from "@/components/Navbar"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import useUserStore from "@/store/userStore";

export default function PublicLayout() {
  const {user} = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
      if(!user) {
        return;
      }

      switch(user.role) {
        case "Stundent":
          navigate("/student");
          break;
        case "Teacher":
          navigate("/teacher");
          break;
        case "Admin":
          navigate("/admin");
          break;
        default:
          navigate("/");
      }

  },[])

  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}
