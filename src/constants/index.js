import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a web developer, an enthusiast for data science, and an open source contributor presently enrolled in the Bachelor of Science in Data Science and Programming program at IIT Madras. I have successfully finished Harvard University's CS50x and CS50 AI course and proved my ML and DS expertise in the Smart India Hackathon in 2023 & 2024 and the Karnataka Police Hackathon in 2024.`;

export const ABOUT_TEXT = `I have a passion to build effective and user-friendly online apps and am a committed and versatile software engineer.I have experience working with many different technologies, such as MySQL, PostgreSQL, MongoDB, Next.js, and React. My passion for learning how things operate led me to pursue a career in web development, which has allowed me to constantly learn new skills and adjust to new difficulties. I work best in groups and take pleasure in finding creative solutions to challenging issues. I like to remain busy, experiment with new technologies, and contribute to open-source projects when I'm not coding.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Sep 2024",
    role: "Open Source Developer",
    company: "Social Summer of Code",
    description: `Used Jupyter Notebook, Python packages like Pandas,Matplotlib and other ML technologies to analyse datasets to create visualizations to understand the data Developed multiple machine learning models that predict, with accuracies as high as 90%`,
    technologies: ["Python", "Git"],
  },
  {
    year: "Jun 2024 - Jul 2024",
    role: "Software Engineer",
    company: "Plant Green Intern",
    description: `Led and developed a app for the company - the app introduces new employees to the workflow and task tabe Full-stack developer - Wrote and reviewed code for webiste to app conversion using WebView component in Android Studio`,
    technologies: ["Android", "WebView", "Dart", "React"],
  },
];

export const PROJECTS = [
  {
    title: "pixel.com",
    image: project1,
    description:
      "The project, which was a component of Harvard's CS50 course, was a worthwhile educational experience that improved my knowledge of web development tools and demonstrated my aptitude for database administration and front-end design.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Git"],
  },
  {
    title: "traffic.py",
    image: project2,
    description:
      "Computer vision is a barrier to the development of self-driving automobiles, especially when it comes to road sign recognition. A TensorFlow project used the German Traffic Sign Recognition Benchmark dataset, which includes thousands of photos of 43 different categories, to train a neural network for the purpose of classifying traffic signs based on images.",
    technologies: ["OpenCV", "Python", "Tensorflow"],
  },
  {
    title: "Gold Price Analysis",
    image: project3,
    description:
      "The Sentiment Analysis model accurately predicts gold price movements across four countries, enhancing trading strategies and investment decisions by predicting 20% trade volume increases during economic announcements.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  address: "Slaterpuram, Mylapore, Chennai, TamilNadu ",
  phoneNo: "+91 90433 52840 ",
  email: "fspzar123@gmail.com",
};
