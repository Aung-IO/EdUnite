import AdminBreadCrumb from '@/components/AdminBreadCrumb'
import CourseRequestDetail from '../components/requests/CourseRequestDetail'
import { useParams } from 'react-router-dom'

export default function CourseRequestDetailPage() {
  const {title} = useParams<string>();
  return (
    <div>
        <AdminBreadCrumb currentPageTitle={title} links={[{name: "Course Requests", path: "/admin/request/create-course-requests"}]} />
        <CourseRequestDetail />
    </div>
  )
}
