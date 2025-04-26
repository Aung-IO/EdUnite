import LazyLoad from "@/components/LazyLoad";
import {
  LandingPageLazyLoadElement,
  PublicLayoutLazyLoadElement,
} from "@/constants/LazyLoadElement";

const publicRoute = [
  {
    path: "/",
    element: <LazyLoad component={PublicLayoutLazyLoadElement} />,
    children: [
      {
        index: true,
        element: <LazyLoad component={LandingPageLazyLoadElement} />,
      },
    ],
  },
];

export default publicRoute;
