import { useQueryClient, MutationOptions } from "@tanstack/react-query";
import { LoginResponse, Credential, RegisterStudentPayload, RegisterTeacherPayload, RegisterResponse } from "@/types/Auth";
import { login, register } from "../services/authServices";
import useAuthStore from "@/store/authStore";
import useUserStore from "@/store/userStore";

export const useLoginOption = (): MutationOptions<
  LoginResponse,
  Error,
  Credential
> => {

    const queryClient = useQueryClient();
    const {setAccessToken} = useAuthStore();
    const {setUser} = useUserStore();

  return {
    mutationFn: login,
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["auth"] });
        setAccessToken(data.accessToken);
        setUser(data.user);
        localStorage.removeItem('User');
        localStorage.setItem('User', JSON.stringify(data.user));
      },
  };
};


export const useRegisterOption = (): MutationOptions<
    RegisterResponse,
    Error,
    RegisterStudentPayload | RegisterTeacherPayload
> => {

    const queryClient = useQueryClient();

    return {
        mutationFn: register,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
          },
    }
}
