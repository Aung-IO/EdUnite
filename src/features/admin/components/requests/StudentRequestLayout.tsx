import StudentRequestList from "./StudentRequestList";
import { dummyStudentRequests } from "../../data/studentRequestData";
import { ScrollArea } from "@/components/ui/scroll-area";
import StudentRequestHeader from "./StudentRequestHeader";

export default function StudentRequestLayout() {
  
  return (
    <section>
      <StudentRequestHeader />
      <ScrollArea className="h-[37rem] my-2 py-4">
        <div className="px-5 mt-2 grid grid-cols-3 gap-4">
          {dummyStudentRequests.map((request) => {
            return <StudentRequestList request={request} />;
          })}
        </div>
      </ScrollArea>
    </section>
  );
}
