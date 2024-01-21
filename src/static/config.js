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
    Description: "Analyzes the performance of users participating in contests across various online judges and evaluates the performance metrics, providing valuable insights into their achievements and progress.", 
    Responsiblity: "As a Full Stack Developer"
  },
  {
    Serial: 2,
    ProjectName: "Logistics Insights Management (LIM)",
    Description: "Enabled multiple members to engage in simultaneous conversations, fostering seamless interaction",
    Responsiblity: "As a Full Stack Developer"
  },
  {
    Serial: 3,
    ProjectName: "Mission Control Dashboard",
    Description: "Resulted in improved accessibility and efficient maintenance of teacher, student, and staff details, student management, department maintenance, class routine, and student attendance.",
    Responsiblity: "As a Full Stack Developer (Frontend Lead)"
  }
];
export const achievements = [
  {
    Serial: 1,
    Title: "Awarded as a Rising Star",
    ImageUrl: risingstar,
    Description: "Analyzes the performance of users participating in contests across various online judges and evaluates the performance metrics, providing valuable insights into their achievements and progress.",
  },
  {
    Serial: 2,
    Title: "Certified as Microsoft AZ900",
    ImageUrl: microsoftaz900,
    Description: "Enabled multiple members to engage in simultaneous conversations, fostering seamless interaction",
  },
  {
    Serial: 3,
    Title: "Problem Setter & Judge of Selise Contest",
    ImageUrl: seliseproblemsetter,
    Description: "Resulted in improved accessibility and efficient maintenance of teacher, student, and staff details, student management, department maintenance, class routine, and student attendance.",
  },
  {
    Serial: 4,
    Title: "Top 12 percent in Leetcode",
    ImageUrl: leetcode,
    Description: "Resulted in improved accessibility and efficient maintenance of teacher, student, and staff details, student management, department maintenance, class routine, and student attendance.",
  },
  {
    Serial: 5,
    Title: "ACM ICPC Contestnat",
    ImageUrl: icpc,
    Description: "Qualified the prestigious ACM ICPC Dhaka Regional Contest 2017,2018 & 2019 and NCPC-2020 & 15+ national contests.Resulted in improved accessibility and efficient maintenance of teacher, student, and staff details, student management, department maintenance, class routine, and student attendance.",
  },
  {
    Serial: 6,
    Title: "Achieved 1st,2nd,3rd position ",
    ImageUrl: departmentcontest,
    Description: "Achieved 1st,2nd,3rd position in Inter and Intra Department Programming Contest of IU",
  }
];
export const programmingAchievements = [
  {
    Serial: 1,
    JudgeName: "Codeforces",
    ImageUrl: codeforces,
    ProblemSolveCount: "2300+",
    CodingTitle: "Max 1596",
    Description: "1",
    ContestCount: "450+"
  },
  {
    Serial: 2,
    JudgeName: "Leetcode",
    ImageUrl: leetcode,
    ProblemSolveCount: "1000+",
    CodingTitle: "Max 1788",
    Description: "2",
    ContestCount: ""
  },
  {
    Serial: 3,
    JudgeName: "Codechef",
    ImageUrl: codechef,
    ProblemSolveCount: 0,
    CodingTitle: "Max 1707",
    Description: "3",
    ContestCount: "170+"
  },
  {
    Serial: 4,
    JudgeName: "Toph",
    ImageUrl: toph,
    ProblemSolveCount: 474,
    CodingTitle: "Max 1596",
    Description: "4",
    ContestCount: ""
  }
];
export default {navLinks,projects,experiences,achievements,programmingAchievements};