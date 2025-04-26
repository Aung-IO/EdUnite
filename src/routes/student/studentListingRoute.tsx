import LazyLoad from "@/components/LazyLoad";
import {
  LandingPageLazyLoadElement,
  StudentCourseRequestFormLazyLoadElement,
  StudentDashboardPageLazyLoadElement,
  StudentEnrolledCoursesDetailsPageLazyLoadElement,
  StudentEnrollFormLazyLoadElement,
  StudentListingDetailsPageLazyLoadElement,
  StudentListingPageLazyLoadElement,
  StudentProfilePageLazyLoadElement,
  OurCoursesPageLazyLoadElement,
  OurCoursesDetailPageLazyLoadElement,
} from "@/constants/LazyLoadElement";

const studentListingRoute = [
  {
    index: true,
    element: <LazyLoad component={StudentDashboardPageLazyLoadElement} />,
  },

  {
    path: "/student/profile",
    element: <LazyLoad component={StudentProfilePageLazyLoadElement} />,
  },

  {
    path: `/student/our-courses/:id`,
    element: <LazyLoad component={OurCoursesDetailPageLazyLoadElement} />,
  },

  {
    path: "/student/our-courses",
    element: <LazyLoad component={OurCoursesPageLazyLoadElement} />,
  },

  {
    path: `/student/enrolled-courses/:id`,
    element: (
      <LazyLoad component={StudentEnrolledCoursesDetailsPageLazyLoadElement} />
    ),
  },
  {
    path: "/student/listing",
    element: <LazyLoad component={StudentListingPageLazyLoadElement} />,
  },
  {
    path: "/student/listing/:id",
    element: <LazyLoad component={StudentListingDetailsPageLazyLoadElement} />,
  },
  {
    path: "/student/enroll-form",
    element: <LazyLoad component={StudentEnrollFormLazyLoadElement} />,
  },
  {
    path: "/student/course-request-form",
    element: <LazyLoad component={StudentCourseRequestFormLazyLoadElement} />,
  },

  {
    path: "/student/learning-path",
    element: <LazyLoad component={LandingPageLazyLoadElement} />,
  },
];

export default studentListingRoute;
