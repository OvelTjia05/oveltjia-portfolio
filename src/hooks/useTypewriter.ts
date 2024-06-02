import { useState, useEffect } from "react";

const useTypewriter = (texts: string[], speed: number = 200): string => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTypewriter = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        if (index > 0) {
          setDisplayedText(currentText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        if (index < currentText.length) {
          setDisplayedText(currentText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const timeoutId = setTimeout(handleTypewriter, speed);
    return () => clearTimeout(timeoutId);
  }, [index, texts, displayedText, currentTextIndex, speed, isDeleting]);

  return displayedText;
};

export default useTypewriter;
