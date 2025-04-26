
export type BaseCourse = {
    title: string;
    description: string;
    course_category: string;
    start_date: string;
    end_date: string;
    schedule: string;
}

export type CreateCourse = {
    user_id: string;
    course: BaseCourse;
}

export type Course = {
    id: string;
    username: string;
    user_id: string;
    created_at: string;
    student_quantity: string[];
    title: string;
    description: string;
    course_category: string;
    start_date: string;
    status: string;
    end_date: string;
    schedule: string;
}