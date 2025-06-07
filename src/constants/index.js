import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m a budding full-stack developer and UX/UI designer with a passion for building user-friendly, scalable web applications. Skilled in React, Next.js, Node.js, and MongoDB, I also explore machine learning to create smart solutions. I aim to craft digital experiences that are both functional and intuitive.`;

export const ABOUT_TEXT = `I'm a passionate full-stack developer and UX design enthusiast with hands-on experience in building responsive and user-focused web applications. Skilled in technologies like React, Node.js, MongoDB, and Tailwind CSS, I love blending functionality with great design. I’m currently diving deeper into Java, DSA, and UX principles to strengthen my core. I believe in continuous learning and enjoy contributing to creative, impactful digital experiences.`;

export const EDUCATION = [
  {
    year: "2022 - 2026",
    degree: "B.Tech - Electronics Engineering",
    institution: "MIT Academy of Engineering, Pune",
    performance: "CGPA: 7.31 / 10",
  },
  {
    year: "2021",
    degree: "12th - MSBSHSE",
    institution: "Govt. Technical High School Cum School, Akola",
    performance: "Percentage: 86.50%",
  },
  {
    year: "2019",
    degree: "10th - MSBSHSE",
    institution: "Shri M. B. Burungale Vidhyalaya, Shegaon",
    performance: "Percentage: 71.20%",
  },
];

export const PROJECTS = [
  {
    title: "College Community Website (UniVibe)",
    image: project1,
    description:
      "A full-stack MERN web app enabling student collaboration with features like resource sharing, social interaction, and responsive design.",
    technologies: ["Figma", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    github: "https://github.com/MankarGopal",
  },
  {
    title: "Authentication & Authorization Microservice",
    image: project2,
    description:
      "Secure microservice with OTP verification, JWT authorization, Google OAuth login, CI/CD via Jenkins, and Dockerized AWS deployment.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OAuth",
      "Docker",
      "AWS",
    ],
    github: "https://github.com/MankarGopal",
  },
  {
    title: "Machine Learning for Self-Driving Cars",
    image: project3,
    description:
      "Implemented object detection, lane tracking, and sensor fusion using CARLA simulation, YOLO, and custom CNN models.",
    technologies: ["Python", "TensorFlow", "CARLA", "Computer Vision", "YOLO"],
    github: "https://github.com/MankarGopal",
  },
  {
    title: "Ensemble Learning for Diabetes Prediction",
    image: project4,
    description:
      "Combined multiple ML models using soft voting to enhance accuracy; deployed on Render with Docker.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Docker"],
    github: "https://github.com/MankarGopal",
  },
];

export const CONTACT = {
  address: "G1407, Splendid Park, Dudulgaon, Pune, Maharashtra, India - 412105",
  phoneNo: "+91-8766481387",
  email: "gopal.mankar@mitaoe.ac.in",
};
