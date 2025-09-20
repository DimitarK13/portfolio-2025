import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

import TimelineCard from '../components/TimelineCard';

import styles from './Timeline.module.css';

const TIMELINE = [
  {
    year: 2020,
    content:
      'Began my journey in web development, starting with HTML and CSS. Focused on mastering the fundamentals of coding. Built Neotek Systems, which I rebuilt a few years later.',
  },
  {
    year: 2021,
    content:
      'Focused on JavaScript and UX/UI design, and started experimenting with React. Opened a creative agency for Web Development and Graphic Design - Strax Designs. It closed a couple years later due to unsuccessful management and organization.',
  },
  {
    year: 2022,
    content:
      'Explored backend development using Node.js and PHP but reverted back to frontend. Focused deeply on JavaScript and React as my main programming languages.',
  },
  {
    year: 2023,
    content:
      'After avoiding WordPress for years, got my first full time job as a full stack WordPress developer. Tutored groups of people in a local academy on web development - mostly JavaScript, but also HTML and CSS.',
  },
  {
    year: 2024,
    content:
      'Built YouthCall - a platform to help youngsters find projects and events in Macedonia. Worked on various freelance projects, widening my experience in both frontend and backend.',
  },
  {
    year: 2025,
    content:
      'Wanted to try something new with Data Science, but didn’t attract me as much as Web Development. Learned useful languages like Python and SQL, and rediscovered my love for the Web.',
  },
];

function Timeline() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0d8c61,
          backgroundColor: 0x0a0a0a,
          points: 12.0,
          maxDistance: 15.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className={styles.timeline} ref={vantaRef}>
      <div className="container">
        <div className={styles.container}>
          {TIMELINE.map((year) => (
            <TimelineCard year={year.year} key={year.year}>
              {year.content}
            </TimelineCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
