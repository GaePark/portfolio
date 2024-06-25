import React from "react";
import styles from "./Modal.module.css";
import { ImCross } from "react-icons/im";

const Modal = ({ title, text, img, skills, site, nav, setOpenModal }) => {
  const onClickModal = () => {
    setOpenModal(false);
  };
  const onClickPopup = (e) => {
    window.open(e.currentTarget.id, e.currentTarget.id);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})` }}
        >
          <button onClick={onClickModal}>
            <ImCross style={{ color: "black" }} />
          </button>
        </div>

        <h1>{title}</h1>
        <h2>정보</h2>
        <p>{text}</p>
        <h2>SKILL</h2>
        <p>
          {skills.map((el) => (
            <span style={{ marginRight: "20px" }}>- {el.skill}</span>
          ))}
        </p>
        <h2>SITE</h2>
        <p
          id={site}
          style={{ cursor: "pointer", color: "blue" }}
          onClick={onClickPopup}
        >
          {site}
        </p>
        <h2>GIT HUB</h2>
        <p
          id={nav}
          style={{ cursor: "pointer", color: "blue" }}
          onClick={onClickPopup}
        >
          {nav}
        </p>
      </div>
    </div>
  );
};

export default Modal;
