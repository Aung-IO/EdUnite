import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddTeacherPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subjects_type: "",
    subjects: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subjects_type: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      subjects: formData.subjects.split(",").map((s) => s.trim()),
    };
    console.log("Submitted Teacher:", payload);
    // API call goes here
  };

  return (
    <main className="flex items-center justify-center mt-10">
      <Card className="w-full max-w-2xl p-8 shadow-xl rounded-3xl border border-purple-100 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-700">
            Add New Teacher
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <Label>Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <Label>Phone Number</Label>
              <Input
                name="phone_number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="09xxxxxxxxx"
                required
              />
            </div>

            {/* Subject Type */}
            <div className="flex flex-col gap-1">
              <Label>Subjects Type</Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profession">Profession</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Subjects */}
            <div className="flex flex-col gap-1">
              <Label>Subjects (comma-separated)</Label>
              <Input
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="Math, Physics, Programming"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-heart-500 hover:from-purple-700 hover:to-purple-heart-600 text-white font-semibold text-lg py-3 rounded-xl"
            >
              Add Teacher
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
