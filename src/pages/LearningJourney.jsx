import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

import ecellImg from "../assets/journey/ecell.JPEG";
import magazineImg from "../assets/journey/ajaanvriksha(1).JPG";
import festImg from "../assets/journey/nakshatra.JPG";

/* ---------------- COLLEGE LIFE DATA ---------------- */

const collegeLifeData = [
  {
    role: "Overall Coordinator & Design Lead",
    org: "E-Cell MITAOE (Entrepreneurship Development Cell)",
    period: "2024 – 2025",
    image: ecellImg,
    description:
      "Led a cross-functional student team to promote entrepreneurship on campus. Planned and executed flagship initiatives including E-Summit 2025. Drove the complete creative direction—branding, visual identity, and digital presence—across websites, social media, and promotional campaigns.",
  },
  {
    role: "Chief Design Editor",
    org: "AjaanVriksha Magazine, MITAOE",
    period: "2024 – 2025",
    image: magazineImg,
    description:
      "Headed the end-to-end design and layout of the institute’s flagship magazine. Collaborated with writers and editors to maintain thematic consistency and strong visual storytelling.",
  },
  {
    role: "Social Media Secretary",
    org: "Nakshatra – Annual Cultural Fest, MITAOE",
    period: "2023 – 2024",
    image: festImg,
    description:
      "Managed a team of 10–12 members to execute social media strategy and high-impact campaigns, significantly increasing reach and engagement.",
  },
];

/* ---------------- LEARNING STATUS DATA ---------------- */

const learningStatusData = [
  {
    skill: "Full Stack Development (React + Backend)",
    status: "In Progress",
    icon: <FaHourglassHalf className="text-yellow-400" />,
    description:
      "Building scalable web applications with React, REST APIs, authentication, and deployment workflows.",
  },
  {
    skill: "Machine Learning for Autonomous Systems",
    status: "In Progress",
    icon: <FaHourglassHalf className="text-yellow-400" />,
    description:
      "Working on object detection, perception models, and simulation-based testing using CARLA.",
  },
  {
    skill: "UX/UI Design Fundamentals",
    status: "Completed",
    icon: <FaCheckCircle className="text-green-400" />,
    description:
      "Completed UX research, wireframing, heuristic evaluation, and design systems through practical case studies.",
  },
  {
    skill: "Social Media Strategy & Branding",
    status: "Ongoing Practice",
    icon: <FaCheckCircle className="text-green-400" />,
    description:
      "Applying branding, content strategy, and analytics to real-world events and organizations.",
  },
];

const LearningJourney = () => {
  const [activeTab, setActiveTab] = useState("college");

  return (
    <section className="min-h-screen px-6 pt-32 pb-24">
      {/* Title */}
      <h1 className="mb-10 text-center text-4xl font-light tracking-tight">
        Learning Journey
      </h1>

      {/* Tabs */}
      <div className="mb-16 flex justify-center gap-10 border-b border-neutral-800">
        <button
          onClick={() => setActiveTab("college")}
          className={`relative pb-4 text-lg transition ${
            activeTab === "college"
              ? "text-purple-400"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          College Life
          {activeTab === "college" && (
            <motion.span
              layoutId="journeyTab"
              className="absolute bottom-0 left-0 h-[2px] w-full bg-purple-500"
            />
          )}
        </button>

        <button
          onClick={() => setActiveTab("learning")}
          className={`relative pb-4 text-lg transition ${
            activeTab === "learning"
              ? "text-purple-400"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          Learning Status
          {activeTab === "learning" && (
            <motion.span
              layoutId="journeyTab"
              className="absolute bottom-0 left-0 h-[2px] w-full bg-purple-500"
            />
          )}
        </button>
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        {/* ---------------- COLLEGE LIFE TIMELINE ---------------- */}
        {activeTab === "college" && (
          <motion.div
            key="college"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />

            {collegeLifeData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative mb-16 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-purple-500 bg-neutral-900 md:left-1/2">
                  <FaStar className="text-purple-400 text-sm" />
                </div>
                <div
                  className={`absolute top-6 hidden md:block ${
                    index % 2 === 0 ? "left-[52%]" : "right-[52%]"
                  }`}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-30"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500"></span>
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`relative ml-12 w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 
                  md:ml-0 md:w-[48%] ${
                    index % 2 === 0 ? "md:pr-6" : "md:pl-6"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.role}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-6">
                    <p className="mb-2 text-sm text-purple-400">
                      {item.period}
                    </p>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{item.org}</p>
                    <p className="mt-4 text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ---------------- LEARNING STATUS (TIMELINE STYLE) ---------------- */}
        {activeTab === "learning" && (
          <motion.div
            key="learning"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative mx-auto max-w-3xl"
          >
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 h-full w-[2px] bg-neutral-800" />

            {learningStatusData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative mb-14 pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-purple-500 bg-neutral-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-400"></span>
                </div>

                {/* Meta */}
                <p className="mb-1 text-sm text-purple-400">{item.status}</p>

                {/* Title */}
                <h3 className="text-lg font-medium text-white">{item.skill}</h3>

                {/* Description */}
                <p className="mt-2 max-w-xl text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LearningJourney;
