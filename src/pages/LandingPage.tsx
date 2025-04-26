import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "../assets/prof.svg"; // Replace with your actual image

export default function LandingPage() {
  return (
    <main className="flex items-center justify-center my-12 ">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-purple-800 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300">
              Discover Your Potential
            </span>
          </h1>
          <p className="text-purple-700 text-xl max-w-xl">
            Join a vibrant learning community and unlock powerful tools that boost your success in every step.
          </p>

          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" mt-3 px-8 py-3 bg-gradient-to-r from-purple-700 to-purple-400 text-white rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition"
            >
              Get Started
            </motion.button>
          </Link>

        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Image}
            alt="Landing Illustration"
            className="w-full max-w-md drop-shadow-xl"
          />
        </motion.div>
      </div>
    </main>
  );
}
