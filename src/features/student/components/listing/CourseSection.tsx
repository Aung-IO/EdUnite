import { CourseCard } from "./CourseCard";

export const CourseSection = ({ title, courses }: { title: string; courses: any[] }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <button className="text-purple-600 hover:underline text-sm">Show All →</button>
      </div>
      <div className="flex gap-6 flex-wrap">
        {courses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </section>
  );
};
