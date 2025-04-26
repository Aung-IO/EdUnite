import LazyLoad from "@/components/LazyLoad";
import { LoginPageLazyLoadElement, SignUpPageLazyLoadElement } from "@/constants/LazyLoadElement";


const authRoute = [
    {
        path: "login",
        element: <LazyLoad component={LoginPageLazyLoadElement} />

    },
    {
        path: "sign-up",
        element: <LazyLoad component={SignUpPageLazyLoadElement} />
    }
];


export default authRoute;