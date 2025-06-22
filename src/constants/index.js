import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a web developer, AI enthusiast, and open-source contributor currently pursuing a B.Tech in Artificial Intelligence and Data Science at St. Joseph’s College of Engineering and a B.Sc. in Data Science and Applications at IIT Madras. I have completed Harvard University's CS50x and CS50 AI courses and participated in national hackathons like the Smart India Hackathon and Karnataka Police Hackathon. My passion lies in building intelligent, scalable solutions across web, data, and cloud ecosystems.`;

export const ABOUT_TEXT = `As a committed and versatile software engineer, I specialize in building scalable web applications and AI-powered tools. My technical expertise spans React, Next.js, MySQL, PostgreSQL, MongoDB, and cloud platforms like Azure and GCP. I enjoy working in teams, solving complex problems, and contributing to open-source. I’ve developed projects integrating GitHub APIs, LangChain, and Streamlit. Outside of coding, I participate in research symposia, write papers, and design with Figma.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Software Intern",
    company: "Temenos",
    description: `Developing AI-driven solutions to enhance productivity for banking employees by automating query resolution using LLMs.`,
    technologies: ["AI", "Python", "Git"],
  },
  {
    year: "Jun 2024 - Sep 2024",
    role: "Open Source Developer",
    company: "Social Summer of Code",
    description: `Worked on open-source ML projects. Created data visualizations using Pandas and Matplotlib and developed ML models with 90%+ accuracy.`,
    technologies: ["Python", "Jupyter", "Git"],
  },
  {
    year: "Jun 2024 - Jul 2024",
    role: "Software Intern",
    company: "Plant Green Inerita",
    description: `Led the conversion of a website to a mobile app using WebView, increasing user engagement by 25%.`,
    technologies: ["Android Studio", "React", "WebView"],
  },
];


export const PROJECTS = [
  {
    title: "Dionysus",
    image: project1,
    description:
      "An AI-powered developer assistant built using React, LangChain, and LLMs. Integrated GitHub APIs for semantic code search and commit analysis. Managed data with PostgreSQL and Prisma.",
    technologies: ["React", "LangChain", "PostgreSQL", "LLMs", "Typescript"],
  },
  {
    title: "Cancer Predictor",
    image: project2,
    description:
      "A Streamlit-based app using ML to diagnose breast cancer with 90%+ accuracy using the Breast Cancer Wisconsin dataset.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
  },
  {
    title: "Gold Price Analysis",
    image: project3,
    description:
      "Used sentiment analysis across 4 countries to predict gold price movement during economic events. Achieved 100% accuracy using Gradient Boosting.",
    technologies: ["Python", "ML", "NLP", "Scikit-learn"],
  },
  {
    title: "traffic.py",
    image: project2,
    description:
      "Built a deep learning model using TensorFlow to classify 43 different traffic signs using the GTSRB dataset with 96% accuracy.",
    technologies: ["TensorFlow", "OpenCV", "Python"],
  },
  {
    title: "pixel.com",
    image: project1,
    description:
      "Full-stack project for CS50. Implemented MySQL for data storage and used HTML, CSS, and JavaScript for front-end design.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];


export const CONTACT = {
  address: "Slaterpuram, Mylapore, Chennai, Tamil Nadu - 600004",
  phoneNo: "+91 90433 52840",
  email: "fspzar123@gmail.com",
};
