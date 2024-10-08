import React, { useEffect, useRef, useState } from 'react';
import bg1 from '../../assets/bg1.jpg';
import './Bar.css';

const Bar = ({ prog, skillName, strImage }) => {
  const [progress, setProgress] = useState(0);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgress(prog); 
        } else {
          setProgress(0); 
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect(); 
  }, [prog]);

  const size = 100; 
  const strokeWidth = 15; 
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (progress * circumference) / 100;

  return (
    <div ref={skillsRef} className="light-skill">
      <div className="light-skill-name">
        <p>{skillName}</p>
      </div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`} 
        className="light-circular-progress"
        style={{ '--dash': dash, '--circumference': circumference }}
        preserveAspectRatio="none"
        fill="transparent"
      >
        <defs>
          <pattern
            id="imgpattern"
            patternUnits="userSpaceOnUse"
            width={110}
            height={110}
          >
            <image
              href={bg1}
              x="0"
              y="0"
              width={110}
              height={110}
              preserveAspectRatio="none"
            />
          </pattern>
        </defs>
        <circle
          className="light-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <image x="-25" y="30" width="150" height="40" href={strImage} />

        <circle
          className="light-progress-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="url(#imgpattern)"
          fill="none"
          strokeDasharray={`${dash} ${circumference - dash}`}
        />
      </svg>
    </div>
  );
};

export default Bar;
