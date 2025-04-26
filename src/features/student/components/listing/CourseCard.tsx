import Image from "@/assets/prof.svg";
import { Link } from "react-router-dom";
import { Tag, User } from "lucide-react"; // Importing Lucide icons

type Course = {
  id: string;
  title: string;
  description: string;
  author: string;
  price: string;
  discountedPrice: string;
  duration: string;
  tags: string[];
  image: string;
};

export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link
      to={`/student/listing/${course.id}`}
      className="block transform transition-transform hover:scale-105"
    >
      <div className="rounded-xl shadow-lg overflow-hidden w-[300px] h-[450px] bg-gradient-to-b from-white to-gray-50 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <img
          src={Image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />

        <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3 mt-2">
              {course.description}
            </p>
          </div>

          <div className="text-sm text-gray-700 flex items-center gap-2">
            <User className="w-4 h-4 text-gray-700" />
            <span className="font-medium">By {course.author}</span>
          </div>

          <div className="flex items-center justify-start text-sm flex-wrap gap-2 pt-2">
            {course.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-gray-800">
              ${course.discountedPrice}
            </span>
            <span className="text-sm line-through text-gray-500">
              ${course.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
