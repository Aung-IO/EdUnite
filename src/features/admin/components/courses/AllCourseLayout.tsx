import AllCourseList from "./AllCourseList"
import { dummyStudentRequests } from "../../data/studentRequestData"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import AllCourseHeader from "./AllCourseHeader"

export default function AllCourseLayout() {

    const approvedCourses = [...dummyStudentRequests.filter((req) => req.status === "approved")]



  return (
    <section>
        <AllCourseHeader />
      <ScrollArea className="h-[37rem] my-2 py-4">
        <div className="px-5 mt-2 grid grid-cols-3 gap-4">
          {approvedCourses.map((request) => {
            return <AllCourseList request={request} />;
          })}
        </div>
        
      </ScrollArea>
    </section>
  )
}
