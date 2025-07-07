import { link } from "fs";

// Basic personal information
export const personalInfo = {
  name: "Tran Bao Phuc",
  title: "Final year student in HCMUT",
  description: "I have a genuine interest in software development and artificial intelligence. I enjoy working on projects that focus on solving real-world problems and delivering practical value to users.",
  email: "tranbaophuc2703@gmail.com",
  phone: "0944926168",
  location: "Ho Chi Minh City, Vietnam",
  socials: {
    github: "https://github.com/phuctran2703",
    linkedin: "https://www.linkedin.com/in/phuc-tran-29b650353/",
  }
};

// Education details
export const education = [
  {
    institution: "Ho Chi Minh City University of Technology",
    logo: "/hcmut.png",
    degree: "Bachelor's Degree",
    major: "Computer Science",
    duration: "2021 - 2025",
    gpa: "3.5/4.0",
  }
];

// Work experience
export const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Graphicsminer",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQGdouW4GuvxBQ/company-logo_200_200/company-logo_200_200/0/1630564009359?e=2147483647&v=beta&t=2ZRFHoplXIyLLdAPBrwPEjJNvBV-9h-fdQX1NyLObPc",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    period: "May 2024 to August 2024",
    description: "GraphicsMiner is a Human-Computer Interaction (HCI) research lab that focuses on developing AI-powered and simulation-based tools to support teaching and learning.",
    responsibilities: [
      "Researched and applied core machine learning and statistical modeling techniques in various AI-related projects.",
      "Participated in developing computer vision solutions, including object detection and image processing.",
      "Deployed and integrated AI models into web applications, focusing on usability, performance, and scalability."
    ]
  }
];

// Skills grouped by category
export const skills = {
  languages: ["Python", "Java", "C++"],
  webDevelopment: ["HTML/CSS", "JavaScript", "React", "NextJs", "NodeJS"],
  database: ["MySQL", "SQL Server", "MongoDB"],
  bigData: ["Apache Hadoop", "Apache Spark"],
  aiml: ["TensorFlow", "PyTorch", "Scikit-learn"],
  devOps: ["Git", "Docker", "CI/CD"]
};

// Projects portfolio
export const projects = [
  {
    title: "Smart Traffic Management System",
    description: "A microservice-based platform for real-time traffic monitoring and management, offering features like camera control, user feedback, news updates, and AI-powered chat support. It helps authorities and citizens make informed decisions to improve traffic flow and urban mobility.",
    technologies: ["Next.js", "FastAPI", "MongoDB", "Redis", "JWT ", "Docker", "Azure"],
    imageUrl: "https://github.com/Mr-Yang03/Smart-Traffic-Management-System/blob/main/user_ui/public/image/giaothonghcm.jpg?raw=true",
    githubUrl: "https://github.com/Mr-Yang03/Smart-Traffic-Management-System",
    liveUrl: ""
  },
  {
    title: "YOLO Farm - Smart Greenhouse System",
    description: "This project develops a mobile application for a smart greenhouse system. The functionalities include monitoring greenhouse conditions, controlling devices, diagnosing plant leaf diseases, and enabling automation through user’s voice. It integrates AI-powered disease detection and real-time IoT-based control for smart farming.",
    technologies: ["React Native", "NodeJS", "MongoDB", "CNN Models"],
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/046/608/477/small_2x/fresh-tomato-in-the-field-and-plantation-under-the-sun-light-morning-photo.jpeg",
    githubUrl: "https://github.com/pnv2003/yolo-farm",
    liveUrl: ""
  },
  {
    title: "Smart printing service for students at HCMUT",
    description: "Developed a smart printing system for students to upload files and print them anytime, anywhere through a web interface. The system also provides printing history management and revenue services for administrators.",
    technologies: ["ReactJS", "NodeJS", "MySQL"],
    imageUrl: "https://i1.adis.ws/i/canon/maxify-gx3050-lifestyle-mobile-printing-get-inspired-16x9_7d0d1f60c1e64378b3732d696aef4c38?$media-collection-full-dt-jpg$",
    githubUrl: "https://github.com/quancao2310/CNPM_HCMUT_SSPS?tab=readme-ov-file",
    liveUrl: ""
  }
];

// Certifications
export const certifications = [
  {
    logo: "https://ntvcdn.b-cdn.net/ntv/wp-content/uploads/2015/07/TOEIC.jpg",
    title: "TOEIC 720",
    validity: "2024 - 2026",
    link: "https://drive.google.com/file/d/1LnawJq2FVD-7g8KGLW9I15u1Qz-JpQ-Z/view?usp=sharing"
  },
  {
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/huggingface-color.png",
    title: "Fundamentals of Agents – Hugging Face",
    validity: "21/02/2025",
    link: "https://cdn-uploads.huggingface.co/production/uploads/noauth/xhzQ_V6_OWuAADjfYD2eF.webp"
  },
  {
    logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/coursera-lo8w5v97xvrfx899hbx8sc.png/coursera-6mz1o14okyb7bhk1kipo.png?_a=DATAdtAAZAA0",
    title: "Convolutional Neural Networks",
    link: "https://www.coursera.org/account/accomplishments/certificate/KD09MJ6QH3PJ"
  }
];