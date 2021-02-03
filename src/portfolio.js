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

export { greeting, skills };
