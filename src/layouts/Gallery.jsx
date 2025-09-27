import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import styles from './Gallery.module.css';

function Gallery({ images = [], speedPxPerSec = 120, slowMultiplier = 0.35 }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const widthRef = useRef(0);
  const multiplierRef = useRef(1);
  const x = useMotionValue(-0.1);
  const [allLoaded, setAllLoaded] = useState(false);

  useLayoutEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      widthRef.current = trackRef.current.scrollWidth / 2;
    }
    if (allLoaded) measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [allLoaded, images]);

  useEffect(() => {
    if (!allLoaded) return;

    lastTimeRef.current = performance.now();

    function step(now) {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const w = widthRef.current;
      if (!w) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      let current = x.get();
      const delta = -speedPxPerSec * multiplierRef.current * dt;
      current += delta;

      while (current <= -w) current += w;

      x.set(current);
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speedPxPerSec, x, images, allLoaded]);

  const onEnter = () => (multiplierRef.current = slowMultiplier);
  const onLeave = () => (multiplierRef.current = 1);

  useEffect(() => {
    let loaded = 0;
    images.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      image.onload = () => {
        loaded += 1;
        if (loaded === images.length) setAllLoaded(true);
      };
    });
  }, [images]);

  return (
    <div
      className={styles.slider}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      <motion.div className={styles.track} ref={trackRef} style={{ x }}>
        {[...images, ...images].map((image, i) => (
          <div className={styles.item} key={i}>
            <img src={image.url} alt={`gallery-${i}`} draggable={false} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Gallery;
