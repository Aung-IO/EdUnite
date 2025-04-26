import { useParams } from "react-router-dom";
import React, { useState } from "react";

const dummyCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your own websites.",
    author: "John Doe",
    duration: "6 weeks",
    level: "Beginner",
    price: 0,
    image: "https://source.unsplash.com/800x400/?coding,technology",
    tags: ["web", "html", "css", "js"],
  },
  {
    id: "2",
    title: "React for Beginners",
    description: "Start building dynamic web applications with React.",
    author: "Jane Smith",
    duration: "4 weeks",
    level: "Intermediate",
    price: 49,
    image: "https://source.unsplash.com/800x400/?react,javascript",
    tags: ["react", "frontend", "hooks"],
  },
];

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = dummyCourses.find((c) => c.id === id);
  const [showForm, setShowForm] = useState(false);

  if (!course) return <div className="text-center py-10 text-gray-500">Course not found.</div>;

  const handleEnrollClick = () => {
    setShowForm(true);
  }
  const closeModal = () => {
    setShowForm(false);
   };
   const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    window.alert("Enrollment successful!");
   }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-4">
      {/* Banner */}
      <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Description */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-purple-700">{course.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{course.description}</p>
      </div>

      {/* Tags and Info */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <div>
          <span className="font-semibold">Instructor:</span> {course.author}
        </div>
        <div>
          <span className="font-semibold">Duration:</span> {course.duration}
        </div>
        <div>
          <span className="font-semibold">Level:</span> {course.level}
        </div>
        <div>
          <span className="font-semibold">Price:</span> {course.price === 0 ? "Free" : `$${course.price}`}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {course.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Action */}
      <div className="pt-6">
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg transition"
          onClick={handleEnrollClick}>
          Start Learning
        </button>


        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Enroll in Course</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-xl">
                  ×
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg"
                  onClick={handleFormSubmit}
                >
                  Enroll Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
