import { queryOptions } from '@tanstack/react-query';
import { getAllCourses, getCourseById } from '@/services/courseServices';


export function getAllCoursesQueryOptions() {
    return queryOptions({
        queryKey: ['courses'],
        queryFn: getAllCourses
    })
}


export function getCourseByIdQueryOptions(courseId: string) {
    return queryOptions({
        queryKey: ['course', courseId],
        queryFn: () => getCourseById(courseId)
    })
}