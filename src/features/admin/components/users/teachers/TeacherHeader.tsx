import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import { Link } from "react-router-dom";


export default function TeacherHeader() {
  return (
    <header className="px-5 mt-5">
      <div className="flex items-center gap-5 justify-between">
        <div className="relative w-1/4 ">
          <LucideSearch className="absolute inset-0 text-gray-500 translate-x-full translate-y-3 size-4 " />

          <Input
            className=" focus-visible:ring-purple-600 focus:outline-none ps-10 focus:ring-0"
            placeholder="Search"
          />
        
        </div>

        <div className="flex items-center gap-2">
          <Link to="/admin/teachers/add">
          <button className="bg-purple-heart-600 text-white px-4 py-2 rounded-md">
            Add Teacher
          </button>
          </Link>
          <button className="bg-purple-heart-600 text-white px-4 py-2 rounded-md">
            Export
          </button>
       </div>
      </div>
    </header>
  );
}
