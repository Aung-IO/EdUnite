import AdminBreadCrumb from '@/components/AdminBreadCrumb'
import StartedCourses from '../components/courses/StartedCourses'

export default function StartedCoursesPage() {
  return (
    <div>
        <h1 className="px-5 mb-5 text-xl font-bold">Started Courses</h1>
        <AdminBreadCrumb currentPageTitle="Started Courses"/>
        <StartedCourses/>
    </div>
  )
}
