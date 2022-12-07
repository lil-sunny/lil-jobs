const jobs = [
  {
    category: "BUISNES ANALYSIS",
    title: "Business Analyst (Low-Code Platforms)",
    typeOfEmployment: ["REMOTE"],
    location: ["Poland", "Ukraine"],
  },
  {
    category: "DEVELOPER",
    title: "Senior C++ Developer",
    typeOfEmployment: ["REMOTE"],
    location: ["Poland", "Ukraine"],
  },
  {
    category: "DATA SCIENCE",
    title: "Senior MySQL Developer",
    typeOfEmployment: ["REMOTE"],
    location: ["Ukraine"],
  },
  {
    category: "BUISNES ANALYSIS",
    title: "BUISNES ANALYSIS",
    typeOfEmployment: ["REMOTE"],
    location: ["USA", "Ukraine"],
  },
];

const workArea = document.getElementsByClassName('workarea-wrapper');
const header = document.getElementById('header');

workArea[0].style.height = `calc(${workArea[0].scrollHeight}px - 10vh)`;

