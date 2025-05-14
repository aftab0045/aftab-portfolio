
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CursorType = {
  x: number;
  y: number;
};

const CursorEffect = () => {
  const [position, setPosition] = useState<CursorType>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, button, .hover-effect").forEach(el => {
      el.addEventListener("mouseenter", () => setLinkHovered(true));
      el.addEventListener("mouseleave", () => setLinkHovered(false));
    });
  };

  // Cursor variants
  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid white",
      x: position.x - 16,
      y: position.y - 16,
      transition: {
        type: "spring",
        mass: 0.3
      }
    },
    clicked: {
      height: 36,
      width: 36,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      x: position.x - 18,
      y: position.y - 18,
    },
    hovered: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      x: position.x - 32,
      y: position.y - 32,
    },
    hidden: {
      opacity: 0
    }
  };

  // Trail dots
  const dots = Array.from({ length: 8 });

  return (
    <div className="cursor-effect-container">
      {/* Main cursor */}
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-50 rounded-full pointer-events-none"
        variants={cursorVariants}
        animate={
          hidden ? "hidden" : clicked ? "clicked" : linkHovered ? "hovered" : "default"
        }
      />
      
      {/* Trail effect */}
      {dots.map((_, index) => (
        <motion.div
          key={index}
          className="cursor-trail fixed top-0 left-0 z-40 rounded-full bg-white pointer-events-none"
          style={{
            opacity: 0.2 - index * 0.02,
            scale: 1 - index * 0.05,
          }}
          animate={{
            x: position.x - 5,
            y: position.y - 5,
            transition: {
              type: "spring",
              mass: 0.3,
              delay: 0.03 * index
            }
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffect;
