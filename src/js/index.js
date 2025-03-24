const recentWorkContainer = document.querySelector(".recent_work_container");

const projectObjTemp = {
  project_name: "GapPay",
  project_description:
    "Fintech landing page streamlining transactions with user-friendly interface.",
  tech_tools: [
    "NextJs",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Node Mailer ",
  ],
  project_url: "#",
  github_url: "#",
};
const recentWork = [
  {
  project_name: 'Gideon AI',
  project_description: 'A Friendly AI Chatbot assistant for helping/solving users problem with a single line of prompt.',
  tech_tools: [
    'HTML', 
    'CSS', 
    'JavaScript', 
    'API'
  ],
  project_url: 'https://gideon-phi.vercel.app/',
  github_url: 'https://github.com/GTech23/gideon'
},

{
  project_name: 'NetFlix Login Clone',
  project_description: 'A practice based project to replicate / clone NetFlix Login page',
  tech_tools: [
    'HTML', 
    'CSS', 
  ],
  project_url: 'https://net-flix-login.vercel.app/',
  github_url: 'https://github.com/GTech23/NetFlix-Login'
},

{
  project_name: 'Moeny',
  project_description: 'Landing Page for a  Simple Budgeting Web app to  Manage your expenses, create a budget, and achieve financial freedom with our simple and intuitive budgeting tools',
  tech_tools: [
    'HTML', 
    'CSS', 
  ],
  project_url: 'https://moeny.vercel.app/',
  github_url: 'https://github.com/GTech23/Moeny'
},


];

let recentWorkHTML = "";
if (recentWork.length > 0) {
  recentWork.forEach((work) => {
    recentWorkHTML += `
    <div class="recent_work_item">
        <div class="work_header">
          <h2 class="work_tagName">${work.project_name}</h2>
          <p class="subtitle">
            ${work.project_description}
          </p>
        </div>
        <div class="work_skill_set">
          ${work.tech_tools.map((value) => {
            return `<span class='subtitle'>${value}</span>`;
          })}
          
        </div>
        <div class="work_action_btn">
          <a href="${work.project_url}" class="work_preview_link">
            <span>Preview</span>
            <i class="fa fa-eye"></i>
          </a>
  
          <a href="${work.github_url}" class="work_github_link">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
  
  `;
  });
  recentWorkContainer.innerHTML = recentWorkHTML;
} else {
  recentWorkContainer.classList.remove("recent_work_container");
  recentWorkContainer.innerHTML =
    "<p style='margin-top: 2rem' class='subtitle'> Currently i have no open source project to show, do well to check back later 😉 </p>";
}

// dynamically updating site footer
const footerText = document.querySelector(".centurium-year");
const now = new Date();
footerText.innerHTML = `&copy; twentytwentyfive (${now.getFullYear()})`;

// dynamically generating skill html;
const skillsArray = [
  {
    skill_name: "HTML",
    skill_title: "Markup Language",
    skill_image: "./src/images/skill-1.webp",
    image_alt: "HTML logo",
  },
  {
    skill_name: "CSS",
    skill_title: "Styling",
    skill_image: "./src/images/skill-2.webp",
    image_alt: "CSS logo",
  },
  {
    skill_name: "JavaScript",
    skill_title: "Programming Language",
    skill_image: "./src/images/skill-3.webp",
    image_alt: "JavaScript logo",
  },
  {
    skill_name: "FireBase",
    skill_title: "Database/Auth",
    skill_image: "./src/images/skill-4.webp",
    image_alt: "FireBase logo",
  },
  {
    skill_name: "ReactJS",
    skill_title: "Frontend Framework",
    skill_image: "./src/images/skill-5.webp",
    image_alt: "React logo",
  },
  {
    skill_name: "TailwindCSS",
    skill_title: "Utility-First Styling",
    skill_image: "./src/images/skill-6.webp",
    image_alt: "Tailwind logo",
  },
  {
    skill_name: "SEO",
    skill_title: "Search Engine Optimization",
    skill_image: "./src/images/skill-7.webp",
    image_alt: "SEO logo",
  },
  {
    skill_name: "Git/GitHub",
    skill_title: "Version Control",
    skill_image: "./src/images/skill-9.webp",
    image_alt: "Github logo",
  },
];

let skillHTML = "";
skillsArray.forEach((skill) => {
  skillHTML += `
    <div class="skill-item">
      <div
        class="skill-logo"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <img src="${skill.skill_image}" alt="${skill.image_alt}" />
      </div>
      <div class="skill-text">
        <h3>${skill.skill_name}</h3>
        <p class="subtitle">${skill.skill_title}</p>
      </div>
    </div>
  `;
});

document.getElementById("js-skills-container").innerHTML = skillHTML;
