

import { ScrollArea } from "@/components/ui/scroll-area";
import CourseRequestList from "./CourseRequestList";
import CourseRequestHeader from "./CourseRequestHeader";
import { dummyCourses } from "@/assets/dummy-datas/course";

export default function CourseRequestLayout() {
  return (
    <section>
      <CourseRequestHeader />
      <ScrollArea className="h-[40rem] my-2 py-4">
        <div className="px-5 mt-2 grid grid-cols-3 gap-4">
          {dummyCourses.map((request) => {
            return <CourseRequestList request={request} />;
          })}
        </div>
      </ScrollArea>
    </section>
  );
}
