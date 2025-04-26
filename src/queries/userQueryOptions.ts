import { getUserById, getAllUsers, getAllTeachers, getAllStudents, getCoursesByUserId, createCourseByUserId } from "@/services/userServices";
import { Course, CreateCourse } from "@/types/Course";
import { queryOptions, MutationOptions, useQueryClient } from "@tanstack/react-query";


export function getAllUsersOptions() {
    return queryOptions({
        queryKey: ["users"],
        queryFn: getAllUsers,  
    })
}

export function getAllTeachersOptions() {
    return queryOptions({
        queryKey: ["teachers"],
        queryFn: getAllTeachers,
    })
}

export function getAllStudentsOptions() {
    return queryOptions({
        queryKey: ["students"],
        queryFn: getAllStudents,
    })
}

export function getUserByIdOptions(id: string) {
    return queryOptions({
        queryKey: ["users", id],
        queryFn: () => getUserById(id),
    })
}

export function getCoursesByUserIdOptions(userId: string) {
    return queryOptions({
        queryKey: ["users", userId, "courses"],
        queryFn: () => getCoursesByUserId(userId),
    })
}

export const createCourseByUserIdOptions = (): MutationOptions<
    Course,
    Error,
    CreateCourse,
    { previousData?: Course[] }
> => {
    const queryClient = useQueryClient();
    return {
        mutationFn: ({ user_id, course }: CreateCourse) =>
            createCourseByUserId(user_id, course),
        onSuccess: ({ user_id }) => {
            queryClient.invalidateQueries({ queryKey: ["users", user_id, "courses"] });
            window.location.reload();
        },
        onError: (error, { user_id }, context) => {
            console.error("Error creating course:", error);
            if (context?.previousData) {
                queryClient.setQueryData(["users", user_id, "courses"], context.previousData);
            }
        },
    };
};




