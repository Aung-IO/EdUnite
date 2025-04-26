import useUserStore from "@/store/userStore";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, role }: { children: React.ReactNode, role: string }) => {

  const {user} = useUserStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role &&  role !== user.role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
