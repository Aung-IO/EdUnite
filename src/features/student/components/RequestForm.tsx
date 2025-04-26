import React, { useState } from 'react';

interface CourseRequestFormProps {
  courses: string[];
}

const CourseRequestForm: React.FC<CourseRequestFormProps> = ({ courses }) => {
  const [studentName, setStudentName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentName || !selectedCourse) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Example of sending a POST request to an API or backend (adjust as needed)
      const response = await fetch('/api/course-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentName, selectedCourse, message }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setMessage('Your request has been submitted successfully!');
    } catch (error) {
      setError('Failed to submit your request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-purple-700 text-center mb-6">Course Request Form</h2>

      <div className="mb-4">
        <label htmlFor="studentName" className="block text-sm font-medium text-purple-600 mb-2">Student Name:</label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="course" className="block text-sm font-medium text-purple-600 mb-2">Preferred Course:</label>
        <select
          id="course"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select a course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-purple-600 mb-2">Message (Optional):</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {message && <p className="text-green-500 text-sm text-center">{message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 mt-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-300"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
};

export default CourseRequestForm;
