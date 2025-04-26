import LazyLoad from "@/components/LazyLoad";
import { StudentLayoutLazyLoadElement } from "@/constants/LazyLoadElement";
import studentListingRoute from "./studentListingRoute";
import ProtectedRoute from "@/components/ProtectedRoute";

const studentRoute = [
    {
        path: "/student",
        element: <ProtectedRoute role="Stundent"><LazyLoad component={StudentLayoutLazyLoadElement} /></ProtectedRoute>,
        children: [
            ...studentListingRoute,
        ]
    }
]

export default studentRoute;