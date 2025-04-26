import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BaseCourse } from "@/types/Course";
import { useMutation } from "@tanstack/react-query";
import { createCourseByUserIdOptions } from "@/queries/userQueryOptions";
import useUserStore from "@/store/userStore";

const CreateCourseForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset } = useForm<BaseCourse>();
    const createCoureseById = useMutation(createCourseByUserIdOptions());
    const {user} = useUserStore();

    const onSubmit: SubmitHandler<BaseCourse> = (data: BaseCourse) => {

        createCoureseById.mutate({user_id: user.id, course: data});
        reset();


    };

    return (
        <>
            <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-6 py-3 rounded-lg shadow-lg flex gap-2 transform transition-transform hover:scale-105"
            >
                <span><Plus /></span>
            <span>Create Course</span>
            </Button>

            {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-4">
                <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-6 relative"
                >
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-purple-800  hover:text-gray-700"
                >
                    <X />
                </button>
                <h2 className="text-2xl font-extrabold text-purple-800 mb-4 text-center">
                    Create New Course
                </h2>

                <input
                    {...register("title")}
                    placeholder="Course Title"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    required
                />
                <textarea
                    {...register("description")}
                    placeholder="Description"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    rows={4}
                    required
                />
                <input
                    {...register("course_category")}
                    placeholder="Category"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    required
                />
                <label className="block text-sm font-medium text-gray-700">
                    Start Date
                    <input
                    type="date"
                    {...register("start_date")}
                    className="border border-gray-300 rounded-lg p-3 w-full mt-1 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    required
                    />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                    End Date
                    <input
                    type="date"
                    {...register("end_date")}
                    className="border border-gray-300 rounded-lg p-3 w-full mt-1 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    required
                    />
                </label>
                <input
                    {...register("schedule")}
                    placeholder="Schedule"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    required
                />

                <div className="flex justify-end gap-4">
                    <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            )}
        </>
    );
};

export default CreateCourseForm;
