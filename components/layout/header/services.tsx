import { Service } from "@/types/header";
import { useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

interface IProps {
  services: Service[];
}
export default function Services({ services }: IProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const length = useRef(services.length);
  const textIndex = useRef(0);

  console.log(services);
  useEffect(() => {
    if (services) {
      const intervalId = setInterval(() => {
        const increased = (textIndex.current + 1) % length.current;
        textIndex.current = increased;
        setCurrentTextIndex(increased);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [services]);

  const activeLink = services[currentTextIndex] ?? services[0];
  return (
    <div className="text-gray-50 flex items-center gap-2">
      <FaPlayCircle className="animate animate-pulse delay-[5ms] text-teal-500" />
      <a target="_blank" href={activeLink.link}>
        {activeLink.text}
      </a>
    </div>
  );
}
