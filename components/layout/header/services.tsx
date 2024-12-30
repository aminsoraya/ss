import { Service } from "@/types/header";
import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Services(props: Service[]) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % props?.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const activeLink = props[currentTextIndex] || [];
  return (
    <div className="text-gray-50 flex items-center gap-2">
      <FaPlayCircle className="animate animate-pulse delay-[5ms] text-teal-500" />
      <a target="_blank" href={activeLink.link}>
        {activeLink.text}
      </a>
    </div>
  );
}
