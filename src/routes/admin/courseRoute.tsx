import LazyLoad from "@/components/LazyLoad";
import { CourseDatailPageLazyLoadElement, ListingAllCoursePageLazyLoadElement, StartedCoursesPageLazyLoadElement } from "@/constants/LazyLoadElement";


const courseRoute = [
    {
        path: '/admin/courses',
        element: <LazyLoad component={ListingAllCoursePageLazyLoadElement} />
    },
    {
        path: '/admin/courses/:id/:title',
        element: <LazyLoad component={CourseDatailPageLazyLoadElement} />
    },
    {
        path: '/admin/started-courses',
        element: <LazyLoad component={StartedCoursesPageLazyLoadElement} />
    }
]


export default courseRoute;