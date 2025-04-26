import LazyLoad from "@/components/LazyLoad";
import { AdminDashboardPageLazyLoadElement, AdminLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import userRoute from "./userRoute";
import requestRoute from "./requestRoute";
import courseRoute from "./courseRoute";
import ProtectedRoute from "@/components/ProtectedRoute";


const adminRoute = [
    {
        path: '/admin',
        element: (
            <ProtectedRoute role="Admin">
                <LazyLoad component={AdminLayoutLazyLoadElement} />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <LazyLoad component={AdminDashboardPageLazyLoadElement} />
            },
            ...userRoute,
            ...courseRoute,
            ...requestRoute
        ]
    }
]

export default adminRoute;