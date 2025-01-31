"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="max-w-sm w-[80%] lg:w-auto mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/oyasi kelly.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto mb-4 cursor-pointer object-cover object-[80%_20%] rounded-lg hover:scale-105 transition-transform duration-300"
        data-testid="profilePicture"
        onClick={() => setIsModalOpen(true)}
      />
      <h1 className="text-2xl font-bold" data-testid="fullName">
        Oyasi Kelly
      </h1>
      <p className="text-gray-600" data-testid="jobTitle">
        Frontend Developer
      </p>
      <p className="mt-2 text-gray-500 text-sm" data-testid="shortBio">
        Passionate about creating seamless user experiences and solving
        real-world problems through code.
      </p>
      <p className="mt-2 text-gray-500 text-sm" data-testid="currentLocation">
        Effurun, Nigeria
      </p>
      <p className="mt-2 text-gray-500 text-sm" data-testid="emailAddress">
        oyasikelly28@gmail.com
      </p>
      <div
        className="flex justify-center space-x-4 mt-4"
        data-testid="socialLinks"
      >
        <a
          href="https://github.com/Oyasikelly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-gray-700 text-xl hover:text-black" />
        </a>
        <a
          href="https://linkedin.com/in/oyasikelly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-700 text-xl hover:text-blue-900" />
        </a>
        <a
          href="https://x.com/kelscode101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-blue-500 text-xl hover:text-blue-700" />
        </a>
      </div>
      <p className="mt-4 text-gray-600 text-sm" data-testid="currentTimeUTC">
        {currentTime}
      </p>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="flex flex-col fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-opacity-75 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.img
              src="/oyasi kelly.jpg"
              alt="Full Profile"
              className="w-[80%] lg:w-auto h-auto max-h-[80vh] w-auto max-w-[90vw]  object-cover rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p
              className="text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <em>Oyasi Kelly</em>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProfileCard;
