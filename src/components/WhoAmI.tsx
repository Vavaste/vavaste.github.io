"use client";

import { useEffect, useState } from "react";
import styles from "./WhoAmI.module.css";

const roles = ["Java Developer", "Bug Developer", "Software Engineer"];

export default function WhoAmI() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (deleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 100);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 150);
      } else {
        setTimeout(() => setDeleting(true), 1000);
      }
    }

    setText(currentRole.substring(0, charIndex));
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="flex flex-col items-center justify-center text-green-400 font-mono">
      <h1 className="text-4xl font-bold">$~: whoami</h1>
      <p className="text-xl mt-4">
        {text}
        <span className={styles.blink}>_</span>
      </p>
    </section>
  );
}
