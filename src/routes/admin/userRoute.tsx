import LazyLoad from "@/components/LazyLoad";
import { AddNewTeacherPageLazyLoadElement, AllStudentPageLazyLoadElement, AllTeacherPageLazyLoadElement, AllUserPageLazyLoadElement } from "@/constants/LazyLoadElement";


const userRoute = [
    {
        path: '/admin/users',
        element: <LazyLoad component={AllUserPageLazyLoadElement} />
    },
    {
        path : "/admin/teachers",
        element: <LazyLoad component={AllTeacherPageLazyLoadElement} />
    },
    {
        path : "/admin/teachers/add",
        element: <LazyLoad component={AddNewTeacherPageLazyLoadElement} />
    },
    {
        path : "/admin/students",
        element: <LazyLoad component={AllStudentPageLazyLoadElement} />
    }
]

export default userRoute;