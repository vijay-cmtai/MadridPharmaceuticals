import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useScrollAnimation = (
  animationClass = "animate-fade-in-up",
  threshold = 0.2,
  triggerOnce = true
) => {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && entry?.target) {
      entry.target.classList.add(...animationClass.split(" "));
      // Optional: Remove initial opacity class if you set it
      // entry.target.classList.remove('opacity-0');
    }
  }, [inView, entry, animationClass]);

  return ref;
};

export default useScrollAnimation;
