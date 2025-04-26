import { CheckCircle, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Certificate({ certificate }: { certificate: {
  courseTitle: string;
  studentName: string;
  instructor: string;
  date: string;

  
}}) {

  useEffect(() => {
      window.scrollTo(0, document.body.scrollHeight);
    },[]);
  return (
    <div >
      <Card className="max-w-2xl my-12 mx-auto w-full shadow-lg border-purple-200 bg-white p-6 rounded-2xl text-center">
        <CardContent className="flex flex-col gap-6">
          <CheckCircle className="mx-auto text-green-500 w-12 h-12" />
          <h1 className="text-3xl font-bold text-purple-800">Certificate of Completion</h1>
          <p className="text-lg text-gray-700">This is to certify that</p>
          <p className="text-2xl font-semibold text-purple-700">{certificate.studentName}</p>
          <p className="text-lg text-gray-700">has successfully completed the course</p>
          <p className="text-xl font-semibold text-purple-800">"{certificate.courseTitle}"</p>
          <div className="text-sm text-gray-500 mt-2">
            <p>Instructor: {certificate.instructor}</p>
            <p>Completed on: {certificate.date}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 flex  gap-2">
              <Download className="w-4 h-4" />
              Download Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
