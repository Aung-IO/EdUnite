type BaseCourseRequest = {
    title: string;
    description: string;
    course_category: string;
    start_date: string;
    end_date: string;
    schedule: string;
    status: "pending" | "approved" | "rejected";
    created_at: string;
  };

export type Student = {
    id: string;
    name: string;
    avatar: string;
  };
  
 export type StudentRequest = BaseCourseRequest & {
    id: string;
    user_id: string;
    username: string;
    student_quantity: Student[];
  };
  
 export type CourseCreateRequest = BaseCourseRequest & {
    id: string;
    teacher_id: string;
    teacher_name: string;
    target_students: string[];
  };