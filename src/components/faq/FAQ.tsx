import React, { useState } from "react";
import UpArrow from "@/images/up-arrow.svg";
import DownArrow from "@/images/down-arrow.svg";
import styles from "./faq.module.scss";

export interface FAQ {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ(props: FAQ) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.faq}>
      <div onClick={() => setShow(!show)} className={styles.faqQuestion}>
        <h4>{props.question}</h4>
        {show ? <UpArrow className={styles.faqSvg} /> : <DownArrow className={styles.faqSvg} />}
      </div>
      {show ? (
        <div className={styles.faqAnswer}>
          <h4>{props.answer}</h4>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
