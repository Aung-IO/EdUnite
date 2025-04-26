import LazyLoad from "@/components/LazyLoad";
import { TeacherLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import teacherListingRoute from "./teacherListingRoute";
import ProtectedRoute from "@/components/ProtectedRoute";


const teacherRoute = [
    {
        path: '/teacher',
        element: <ProtectedRoute role="Teacher">
            <LazyLoad component={TeacherLayoutLazyLoadElement} />
        </ProtectedRoute>,
        children: [
            ...teacherListingRoute,
        ]
    }
]


export default teacherRoute;