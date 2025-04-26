import LazyLoad from "@/components/LazyLoad";
import {  TeacherCourseDetailPageLazyLoadElement, TeacherDashboardPageLazyLoadElement, TeacherProfilePageLazyLoadElement } from "@/constants/LazyLoadElement";




const teacherListingRoute = [
    { 
        path: "/teacher/profile",
        element: <LazyLoad component={TeacherProfilePageLazyLoadElement} />
    },
   
    {
        path: "/teacher/created-courses/:courseId",
        element: <LazyLoad component={TeacherCourseDetailPageLazyLoadElement} />
    },
    
    {
        index: true,
        element: <LazyLoad component={TeacherDashboardPageLazyLoadElement} />
    },
    // {
    //     path: "/student/enroll-form",
    //     element: <LazyLoad component={StudentEnrollFormLazyLoadElement} />
    // },
    // {
    //     path: "/student/course-request-form",
    //     element: <LazyLoad component={StudentCourseRequestFormLazyLoadElement} />
    // },
]

export default teacherListingRoute;