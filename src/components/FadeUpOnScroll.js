import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const FadeUpOnScroll = ({ children, delay = 0, duration = 1500 }) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      {children}
    </div>
  );
};

FadeUpOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default FadeUpOnScroll;
