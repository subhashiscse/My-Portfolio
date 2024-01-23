import {
  icpc,
  departmentcontest,
  seliseproblemsetter,
  microsoftaz900,
  leetcode,
  risingstar,
  codechef,
  codeforces,
  toph
} from '../static/index.js'
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "achievement",
    title: "Achievements",
  },
  {
    id: "programming",
    title: "Programming",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const projects = [
  {
    Serial: 1,
    Title: "Contest Performance Tracking System:",
    ProjectUrl: "https://github.com/subhashiscse/CPU-Information",
    Description: "Analyzes the performance of users participating in contests across various online judges and evaluates the performance metrics, providing valuable insights into their achievements and progress.", 
    Stack: ".Net Web API, Mongodb, HTML,CSS,JavaScript,REST API"
  },
  {
    Serial: 2,
    Title: "Chat Application",
    ProjectUrl: "https://github.com/subhashiscse/chat-application-java-spring-boot",
    Description: "Enabled multiple members to engage in simultaneous conversations, fostering seamless interaction",
    Stack: "HTML, CSS, JavaScript, Java Spring Boot, Web Socket"
  },
  {
    Serial: 3,
    Title: "Department Digitalization System",
    ProjectUrl: "https://github.com/subhashiscse/cse-department-project",
    Description: "Resulted in improved accessibility and efficient maintenance of teacher, student, and staff details, student management, department maintenance, class routine, and student attendance.",
    Stack: "HTML, CSS, Bootstrap, JavaScript, JQuery, PHP with Codeigniter framework, MySQL database"
  }
];
export const experiences = [
  {
    Serial: 1,
    ProjectName: "MoveIt",
    Description: "MoveIt is a Laboratory equipment and Office furniture placement and management system powered by Amberg Loglay. Its primary objective is the simple and effective placement of laboratory equipment in designated rooms. With user-friendly functions, organizations can easily place and manage laboratory devices, making MoveIt an essential tool for streamlined equipment organization and management.",
    
    Responsiblity: "As a Full Stack Developer"
  },
  {
    Serial: 2,
    ProjectName: "Logistics Insights Management",
    Description: "A comprehensive project management tool tailored for construction professionals, this application integrates Gantt charts for streamlined timeline planning, features a dynamic mapping system, and offers advanced cloud-based storage for secure collaboration. It enables effortless generation of detailed project reports, making it an invaluable asset for efficient project management and collaboration in the construction industry.", 
    Responsiblity: "As a Full Stack Developer"
  },
  {
    Serial: 3,
    ProjectName: "Mission Control Dashboard",
    Description: "The logistics project focuses on optimizing supply chain efficiency through a robust dashboard.Offers intuitive visualization and data analytics, the project streamlines logistics processes, empowering decision-makers to optimize workflows and minimize delays.The ultimate goal is improved supply chain efficiency facilitated by a user-friendly and informative dashboard interface.",
    Responsiblity: "As a Full Stack Developer (Frontend Lead)"
  }
];
export const achievements = [
  {
    Serial: 1,
    Title: "Awarded as a Rising Star in my product unit",
    ImageUrl: risingstar,
    Description: "Honored with the Rising Star award for exceptional contributions and outstanding performance within my unit at Selise. Recognized for dedication, innovation, and making a significant impact.",
  },
  {
    Serial: 2,
    Title: "Certified as Microsoft AZ900 Fundamentals",
    ImageUrl: microsoftaz900,
    Description: "Successfully achieved certification as a Microsoft AZ900 professional, demonstrating proficiency in Azure fundamentals and a solid understanding of cloud computing principles.",
  },
  {
    Serial: 3,
    Title: "Problem Setter & Judge of Selise Contest 2020 & 2023",
    ImageUrl: seliseproblemsetter,
    Description: "Contributed as a Judge and Problem Setter for the prestigious Selise Coding Contest in 2020 and 2023, contributing to the event's success and assessing participants' coding abilities.",
  },
  {
    Serial: 4,
    Title: "Top 12 percent in Leetcode",
    ImageUrl: leetcode,
    Description: "Ranked among the top 12% on LeetCode, showcasing adeptness in algorithmic problem-solving and a passion for staying ahead in the field.",
  },
  {
    Serial: 5,
    Title: "ACM ICPC Contestnat",
    ImageUrl: icpc,
    Description: "Qualified the prestigious ACM ICPC Dhaka Regional Contest 2017,2018 & 2019 and NCPC-2020 & 15+ national contests.",
  },
  {
    Serial: 6,
    Title: "Achieved 1st,2nd,3rd position ",
    ImageUrl: departmentcontest,
    Description: "Achieved 1st,2nd,3rd position in Inter and Intra Department Programming Contest of IU.",
  }
];
export const programmingAchievements = [
  {
    Serial: 1,
    JudgeName: "Codeforces",
    ImageUrl: codeforces,
    ProblemSolveCount: "2400+",
    CodingTitle: "Max 1596",
    Description: "1",
    ContestCount: "450+",
    ProfileLink: "https://codeforces.com/profile/Subhashis_CSE"
  },
  {
    Serial: 2,
    JudgeName: "Leetcode",
    ImageUrl: leetcode,
    ProblemSolveCount: "1000+",
    CodingTitle: "Max 1788",
    Description: "2",
    ContestCount: "",
    ProfileLink: "https://leetcode.com/subhashis_cse"
  },
  {
    Serial: 3,
    JudgeName: "Codechef",
    ImageUrl: codechef,
    ProblemSolveCount: "230+",
    CodingTitle: "Max 1707",
    Description: "3",
    ContestCount: "170+",
    ProfileLink: "https://www.codechef.com/users/subhashis_cse"
  },
  {
    Serial: 4,
    JudgeName: "Toph",
    ImageUrl: toph,
    ProblemSolveCount: "470+",
    CodingTitle: "Max 1596",
    Description: "4",
    ContestCount: "",
    ProfileLink: "https://toph.co/u/subhashis_cse"
  }
];
export default {navLinks,projects,experiences,achievements,programmingAchievements};