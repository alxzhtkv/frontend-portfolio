import { useRef } from "react";
import "./Slider.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { Preview } from "@widgets/preview/ui/Preview";

export function Slider() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section className="section" ref={targetRef}>
      <div className="section-item ">
        <motion.div style={{ x }} className="items">
          <div className="item first-slide">
            <Preview />
          </div>
          <div className="item second-slide"></div>
          <div className="item third-slide"></div>
        </motion.div>
      </div>
    </section>
  );
}
