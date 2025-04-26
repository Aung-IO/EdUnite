import LazyLoad from "@/components/LazyLoad";
import { CourseRequestDetailPageLazyLoadElement, ListingCreateCourseRequestsPageLazyLoadElement, ListingStudentRequestPageLazyLoadElement, ListingTeacherRequestsPageLazyLoadElement, StudentRequestDetailPageLazyLoadElement } from "@/constants/LazyLoadElement";

const requestRoute = [
    {
        path: "/admin/request/student-requests",
        element: <LazyLoad component={ListingStudentRequestPageLazyLoadElement} />
    },
    {
        path: "/admin/request/student-requests/:id/:title",
        element: <LazyLoad component={StudentRequestDetailPageLazyLoadElement} />
    },
    {
        path: "/admin/request/create-course-requests",
        element: <LazyLoad component={ListingCreateCourseRequestsPageLazyLoadElement} />
    },
    {
        path: "/admin/request/create-course-requests/:id/:title",
        element: <LazyLoad component={CourseRequestDetailPageLazyLoadElement} />
    },
    {
        path: "/admin/request/teacher-requests",
        element: <LazyLoad component={ListingTeacherRequestsPageLazyLoadElement} />
    }
]

export default requestRoute;