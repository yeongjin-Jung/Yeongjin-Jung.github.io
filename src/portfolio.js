import emoji from "react-easy-emoji";

// 메인 홈
const greeting = {
  username: "yeongjin",
  title: "안녕하세요, 프론트 괴물을 꿈꾸는 정영진입니다",
  subTitle: emoji(
    "프론트 개발자를 꿈꾸며 Java, JavaScript, React, vue , OpenCV, Git 등의 기술을 사용하여 프로젝트에 참여한 경험이 있습니다. 이 경험을 바탕으로 기존에 작성 되어있던 코드를 이해하고 팀원들 간의 체계를 신속 정확하게 배울 수 있는 역량을 성장시켜 왔습니다. 이 역량을 발전시킬 수 있도록 처음 마주하는 일이라도 두려워하지 않고 도전하겠습니다."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

// 기술 역량
const skills = {
  title: "Skills",
  subTitle: "프로젝트 진행하면서 사용한 기술들은 다음과 같습니다.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
  ],
  display: true,
};

const skillsProgress = {
  title: "Proficiency",

  skills: [
    {
      skillName: "Html",
      percentage: "80%",
    },
    {
      skillName: "CSS",
      percentage: "80%",
    },
    {
      skillName: "JavaScript",
      percentage: "70%",
    },
    {
      skillName: "Vue",
      percentage: "60%",
    },
    {
      skillName: "React",
      percentage: "80%",
    },
  ],
};

// 아카데미
const academy = {
  title: "Education",
  academys: [
    {
      academyName: "삼성청년 소프트웨어 아카데미",
      logo: require("./assets/ssafy_logo.png").default,
      duration: "2020.01 - 2020.12",
      desc: "웹개발 과정",
    },
    {
      academyName: "비트교육센터",
      logo: require("./assets/bit_logo.jpg").default,
      duration: "2019.04 - 2019.12",
      desc: "딥러닝 기반 영상 인식 과정",
    },
  ],
};

// 프로젝트

const myProject = {
  title: "Projects",
  category: ["All", "Vue", "React"],
  projects: [
    {
      projectName: "JMT(Join Meeting & Tying)",
      logo: require("./assets/images/project/JMT.jpg").default,
      git: "https://github.com/yeongjin-Jung/JoinMeeting-Typing-SSAFY-",
      desc:
        "Video conferencing service that records meetings based on markdown",
      tag: "Vue",
    },
    {
      projectName: "AIGARET(AI Game Rehabilitation Trainer)",
      logo: require("./assets/images/project/Aigaret.png").default,
      git: "https://github.com/yeongjin-Jung/AIGARET-SSAFY",
      desc:
        "신체 움직임을 통해 조작할 수 있는 게임으로 집에서 가볍게 즐길 수 있는 재활 트레이닝 서비스",
      tag: "Vue",
    },
    {
      projectName: "암기의 정석",
      logo: require("./assets/images/project/암기의정석.png").default,
      git: "https://github.com/yeongjin-Jung/MemoryTraining-SSAFY-",
      desc:
        "자신만의 암기 카드를 만들고 공유할 수 있는 종합 압기 플랫폼 서비스",
      tag: "React",
    },
    {
      projectName: "포트폴리오 클론 코딩",
      logo: require("./assets/images/project/Portfolio.png").default,
      git: "https://github.com/yeongjin-Jung/portfolio",
      desc:
        "HTML, CSS, JavaScript를 공부하기 위해 클론 코딩으로 만든 포트폴리오 사이트",
      tag: "JavaScript",
    },
  ],
};

// 상장 및 이수증
const achievements = {
  title: "Achievements",
  subtitle: "현재까지 받은 수상 내역입니다.",
  achievementList: [
    {
      title: "삼성청년소프트웨어 아카데미 - 이수증",
      image: require("./assets/images/achievements/싸피__교육이수증.jpg")
        .default,
    },
    {
      title: "삼성청년소프트웨어 아카데미 - 1학기프로젝트 우수상",
      image: require("./assets/images/achievements/1학기프로젝트__우수상.jpg")
        .default,
    },
    {
      title: "삼성청년소프트웨어 아카데미 - 공통프로젝트 우수상",
      image: require("./assets/images/achievements/공통프로젝트__우수상.jpg")
        .default,
    },
    {
      title: "삼성청년소프트웨어 아카데미 - 특화프로젝트 우수상",
      image: require("./assets/images/achievements/특화프로젝트__우수상.jpg")
        .default,
    },
    {
      title: "삼성청년소프트웨어 아카데미 - UCC우수상",
      image: require("./assets/images/achievements/UCC우수상.jpg").default,
    },
    {
      title: "비트교육 수료증",
      image: require("./assets/images/achievements/비트교육__수료증.jpg")
        .default,
    },
    {
      title: "학술제 금상",
      image: require("./assets/images/achievements/학술제__금상.jpg").default,
    },
  ],
};

// 블로그
const blogs = {
  title: "Blogs",
  subtitle: "현재 운영중인 블로그입니다.",
  blog: [
    {
      url: "https://yeongjin13.tistory.com/",
      title: "기록하는 개발자 영진's Blog",
      desc: "공부한 내용을 기록한 공부 블로그 입니다.",
    },
  ],
  image: require("./assets/images/blogging.gif").default,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "010-9461-3084",
  emailAddress: "yeongjin13@gmail.com",
};

const illustration = {
  animated: true, // set to false to use static SVG
};
export {
  greeting,
  skills,
  skillsProgress,
  academy,
  myProject,
  achievements,
  blogs,
  contactInfo,
  illustration,
};
