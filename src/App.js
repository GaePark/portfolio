import { useRef, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

export default function App() {
  const portfolioData = [
    {
      title: "무신사",
      nav: "https://github.com/GaePark/musinsa.git",
      img: "/images/musinsa.png",
      site: "https://gaepark.github.io/musinsa",
      skills: [
        { skill: "javaScript" },
        { skill: "css" },
        { skill: "html" },
        { skill: "Swiper" },
      ],
      text: "html,css,javascript,figma를 활용하여 무신사 웹페이지를 리디자인하였습니다.",
    },
    {
      title: "디자인 삼성",
      nav: "https://github.com/GaePark/samsung.git",
      img: "/images/samsung.png",
      site: "https://gaepark.github.io/samsung",
      skills: [{ skill: "javaScript" }, { skill: "css" }, { skill: "html" }],
      text: "디자인 삼성페이지를 따라 만들었습니다.",
    },
    {
      title: "포켓몬 도감",
      nav: "https://github.com/GaePark/react-redux-pokemon.git",
      img: "/images/pokemon.png",
      site: "https://gaepark.github.io/react-redux-pokemon/",
      skills: [
        { skill: "React" },
        { skill: "Axios" },
        { skill: "react-router" },
        { skill: "TypeScript" },
        { skill: "antd" },
        { skill: "redux" },
      ],
      text: " axios, 타입스크립트, 리덕스를 활용하여 포켓몬 도감페이지를 제작하였습니다.",
    },
    {
      title: "Todo App",
      nav: "https://github.com/GaePark/JavaScript-Todo-app.git",
      img: "/images/todo.png",
      site: "https://gaepark.github.io/JavaScript-Todo-app",
      skills: [{ skill: "javaScript" }, { skill: "css" }, { skill: "html" }],
      text: "자바스크립트 안에 JSON 객체 문법을 활용하여 localstorage에 데이터를 저장할 수 있는 todo-app을 만들었습니다. ",
    },
    {
      title: "next.js 퀴즈앱",
      nav: "https://github.com/GaePark/nextjs-quiz.git",
      img: "/images/quiz.gif",
      site: "",
      skills: [
        { skill: "Next.js" },
        { skill: "TypeScript" },
        { skill: "Pocketbase" },
      ],
      text: "pocketbase를 활용하여 DB를 구축하였고 nextjs,TypeScript로 퀴즈앱을 제작하였습니다.",
    },
    {
      title: "예산 계산기",
      nav: "https://github.com/GaePark/react-budget.git",
      img: "/images/budget.png",
      site: "https://gaepark.github.io/react-budget",
      skills: [{ skill: "React" }, { skill: "css" }, { skill: "emotion" }],
      text: "React를 활용하여 예산 계산기를 제작하였고 emotion을 통해 css 작업을 하였습니다.",
    },
    {
      title: "달력",
      nav: "https://github.com/GaePark/JavaScript-Calendar.git",
      img: "/images/calendar.png",
      site: "https://gaepark.github.io/JavaScript-Calendar",
      skills: [{ skill: "javaScript" }, { skill: "css" }, { skill: "html" }],
      text: "자바스크립트를 활용하여 달력을 제작하였습니다.",
    },

    {
      title: "계산기",
      nav: "https://github.com/GaePark/JavaScript-Adder.git",
      img: "/images/adder.png",
      site: "https://gaepark.github.io/JavaScript-Adder",
      skills: [{ skill: "javaScript" }, { skill: "css" }, { skill: "html" }],
      text: "계산기앱을 제작하였습니다.",
    },
    {
      title: "비밀번호 생성기",
      nav: "https://github.com/GaePark/JavaScript-password.git",
      img: "/images/password.png",
      site: "https://gaepark.github.io/JavaScript-password",
      skills: [{ skill: "javaScript" }, { skill: "css" }, { skill: "html" }],
      text: "비밀번호 생성기앱을 제작하였습니다.",
    },
  ];

  const nav = [{ title: "About" }, { title: "skill" }, { title: "Portfolio" }];

  const mySkill = [
    { img: "HTML5.png" },
    { img: "CSS3.png" },
    { img: "javascript.png" },
    { img: "react.png" },
    { img: "nextjs.svg" },
    { img: "typescript.png" },
    { img: "redux.png" },
    { img: "firebase.png" },
    { img: "Illustrator.png" },
    { img: "Photoshop.png" },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [modaldb, setModaldb] = useState({});
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillRef = useRef(null);
  const ref = [aboutRef, skillRef, portfolioRef];

  const date = new Date();
  const year = date.getFullYear();

  window.onscroll = function () {
    scrollFunction();
  };

  let scrollFunction = () => {
    if (window.scrollY > 60) {
      document.getElementById("navbar").style = "background: #000;";
    } else {
      document.getElementById("navbar").style = "";
    }
  };

  const onClickMove = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const onClickModal = (el) => {
    setModaldb(el);
    setOpenModal(true);
  };

  return (
    <div className="wrapper">
      <header id="navbar">
        <nav>
          <ul>
            {nav.map((el, i) => (
              <li key={el.title} onClick={() => onClickMove(ref[i])}>
                {el.title}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="hello">
        <p>안녕하세요!</p>
        <p>성장하는 프론트엔드 개발자 박준현 입니다!</p>
      </section>

      <section ref={aboutRef} className="aboutMe">
        <div>
          <h1>About Me</h1>
        </div>
        <div>
          <p>
            프론트엔드 개발자를 희망하는 박준현입니다. 군인으로 근무하며
            근면성실하고 책임감 있는 성격을 길러왔습니다. 그리고 아르바이트를
            하면서도 협업과 커뮤니케이션 능력을 향상시켰습니다. 경험과 이력을
            바탕으로 프론트엔드 개발 분야에서 성장하고 싶습니다. 제가 가진
            기술과 열정을 통해 혁신적이고 사용자 친화적인 웹을 만들어보고
            싶습니다. 프론트엔드 개발자로서의 역량을 향상시키기 위해 지속적인
            학습과 연구에 힘쓸 것입니다. 함께 일하고 성장할 기회를 주신다면
            최선을 다해 결과를 만들어내겠습니다.
          </p>
        </div>
      </section>

      <section ref={skillRef} className="skills">
        <h1>My Skill</h1>
        <div>
          {mySkill.map((skill) => (
            <div
              key={skill.img}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${skill.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </section>

      <section ref={portfolioRef} className="portfolio">
        <h1>Portfolio</h1>
        <div>
          {portfolioData.map((port) => (
            <div key={port.title} onClick={() => onClickModal(port)}>
              <img
                src={`${process.env.PUBLIC_URL}${port.img}`}
                alt={port.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <footer>{year}. Park Jun Hyeon</footer>

      {openModal && <Modal {...modaldb} setOpenModal={setOpenModal} />}
    </div>
  );
}
