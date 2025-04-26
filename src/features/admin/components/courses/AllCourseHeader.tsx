import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AllCourseHeader() {
  return (
    <header className="px-5 mt-5">
      <div className="flex items-center gap-5 ">
        <div className="relative w-1/4 ">
          <LucideSearch className="absolute inset-0 text-gray-500 translate-x-full translate-y-3 size-4 " />

          <Input
            className=" focus-visible:ring-purple-heart-600 focus:outline-none ps-10 focus:ring-0"
            placeholder="Search"
          />
        </div>
        <Select>
          <SelectTrigger className="w-[180px] focus:outline-none focus:ring-1 focus:ring-purple-heart-600">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="creator">Creator</SelectItem>
              <SelectItem value="crypto">Crypto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
