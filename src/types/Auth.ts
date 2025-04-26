import { Stundent } from "./User";

export type Credential = {
    email: string;
    password: string;
}

export type UserInfo = {
    id: string,
    email: string,
    role: string,
}

export type LoginResponse = {
     accessToken: string,
     user: Stundent
}

export type RegisterTeacherPayload = {
    username: string,
    email: string,
    role: string,
    password: string,
    subjectType: string,
    subject: string,
}

export type RegisterStudentPayload = {
    username: string,
    email: string,
    role: string,
    password: string,
    grade: string,
}

export type RegisterResponse = {
    message: string,
}