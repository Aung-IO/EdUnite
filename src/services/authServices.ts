import API from "@/api/apiConfig";
import { dummyAllUser } from "@/assets/dummy-datas/allUser";
import { dummyStudents, dummyTeachers } from "@/assets/dummy-datas/user";

export const register = async (data: {
  username: string;
  password: string;
  role: string;
}) => {
  try {
    const response = await API.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = async (credential: { email: string; password: string }) => {
    try {
        const response = await API.post("/auth/login", credential);
        return response.data;
    } catch (error) {
        // console.error("Error during login:", error);
        // throw error;

        let data;
        switch (credential.email) {
          case "alice@school.com":
            data = dummyTeachers[0];
            break;
          case "frank@student.com":
            data = dummyStudents[0];
            break;
          case "admin@gmail.com":
            data = dummyAllUser[0];
          break;
          default: 
            throw new Error("Invalid email or password");
        }


        return {accessToken: "dummyAccess", user: data};
    }
};
