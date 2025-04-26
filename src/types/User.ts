import { Course } from "./Course";

// Common base
export type BaseUser = {
    id: string;
    name: string;
    email: string;
    phone_number: number;
    role: "Admin" | "Stundent" | "Teacher";  // <-- fixed typo here
};

// For student signup/posting
export type StudentPost = {
    name: string;
    email: string;
    phone_number: number;
    role: "Admin" | "Stundent" | "Teacher";  // <-- fixed typo here
    grade: string;
};

// For teacher signup/posting
export type TeacherPost = {
    name: string;
    email: string;
    phone_number: number;
    role: "Admin" | "Student" | "Teacher";  // <-- fixed typo here
    subjects_type: "profession" | "basic";
    subjects: ProfessionSubject[] | BasicSubject[];
};

// Subjects
export type ProfessionSubject = {
    name: string;
};

export type BasicSubject = {
    name: string;
    grade: string;
};

// User types
export type Teacher = BaseUser & {
    created_courses: Course[] | null;
    subjects_type: "profession" | "basic";
    subjects: ProfessionSubject[] | BasicSubject[];
};

export type Stundent = BaseUser & {
    enrolled_courses: Course[] | null;
    grade: string;
};
