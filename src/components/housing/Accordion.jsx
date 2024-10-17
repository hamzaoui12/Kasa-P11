import styles from "@/styles/components/Accordion.module.scss";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.header} onClick={handleOpen}>
        <h1 className={styles.title}>{title}</h1>
        <p className={isOpen ? styles.rotateUp : styles.rotateDown}>&lt;</p>
      </div>
      <div className={isOpen ? styles.content : styles.hidden}>
        {Array.isArray(content) ? (
          <ul className={styles.list}>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
