import { dummyCourses } from '@/assets/dummy-datas/course';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye } from 'lucide-react';
import { dummyStudentRequests } from '../data/studentRequestData';
import { ScrollArea } from '@/components/ui/scroll-area';

const AdminDashboard = () => {
  const courses = dummyCourses;

  return (
    <div className="bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-purple-heart-700 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-gradient-to-r from-purple-heart-600 to-purple-heart-400 text-white rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-2">Total Students</h3>
          <p className="text-4xl font-bold">{courses.reduce((total, request) => total + request.student_quantity.length, 0)}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-purple-heart-600 to-purple-heart-400 text-white rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-2">Total Courses</h3>
          <p className="text-4xl font-bold">{courses.length}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-purple-heart-600 to-purple-heart-400 text-white rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-2">Pending Requests</h3>
          <p className="text-4xl font-bold">
            {courses.filter((cor) => cor.status === "pending").length + dummyStudentRequests.filter((cor) => cor.status === "pending").length}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Requests</h3>
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.filter((cor) => cor.status === "pending").map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.title}</TableCell>
                  <TableCell>{request.username}</TableCell>
                  <TableCell>{request.course_category}</TableCell>
                  <TableCell>
                    <Link
                      to={`/admin/request/create-course-requests/${request.id}/${request.title}`}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student Requests</h3>
        <div className="overflow-x-auto">
          <ScrollArea className="h-40">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Requested By</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyStudentRequests.filter((cor) => cor.status === "pending").map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.title}</TableCell>
                    <TableCell>{request.username}</TableCell>
                    <TableCell>{request.course_category}</TableCell>
                    <TableCell>
                      <Link
                        to={`/admin/request/student-requests/${request.id}/${request.title}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
