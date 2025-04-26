import API from "@/api/apiConfig";
import { fetchDummyCourses, getDummyCourseById } from "@/services/fetchDummy/fetchCourses";

export const getAllCourses = async () => {
    try {
        const response = await API.get("/courses");
        return response.data;
    } catch (error) {
        // Fallback to local data if API call fails
        const data = fetchDummyCourses();
        return data;
        // throw new Error(`Error fetching all courses: ${error}`);
    }
};

export const getCourseById = async (courseId: string) => {
    try {
        const response = await API.get(`/courses/${courseId}`);
        return response.data;
        
    } catch (error) {
       
        const data = getDummyCourseById(courseId);
        return data;
    }
};

