import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import svg from "@/assets/prof.svg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useLoginOption } from "@/queries/authQueryOptions";


const loginSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});


export default function LoginForm() {

  const login = useMutation(useLoginOption())
  const navigate = useNavigate()


  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);

    login.mutate({ email: data.email, password: data.password }, {
      onSuccess: (data) => {
        data.user.role === "Stundent" ? navigate("/student") : data.user.role === "Teacher" ? navigate("/teacher") : navigate("/admin")
      }
    });
  }

  return (
    <section className="grid w-lvw h-lvh grid-cols-2 bg-white-lilac-50">
      <div className="flex items-center justify-center ml-10 p-10">
        <img src={svg} alt="" />
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <Form {...form}>
          <form className="w-1/2 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="text-center text-2xl font-bold text-gray-800">Login</h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-purple-heart-600 text-white py-2 px-4 rounded-lg
               hover:bg-purple-heart-400 disabled:bg-gray-300"
              disabled={!form.formState.isValid}
            >
              Login
            </Button>
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </section>
  )
}
