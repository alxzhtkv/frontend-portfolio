import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="main-wrapper">
      <section className="section" ref={targetRef}>
        <div className="section-item ">
          <motion.div style={{ x }} className="items">
            <div className="item first-slide"></div>
            <div className="item second-slide"></div>
            <div className="item third-slide"></div>
          </motion.div>
        </div>
      </section>
    </div>

    // <div className="main-wrapper">
    //   <header className="header">
    //     <div className="progress-bar">
    //       <div className="progress-bar_inner" style={{height: `${scrollPercentage}%`}}></div>
    //     </div>
    //   </header>

    //   <div className="horizontal-scroll-wrapper" ref={mainRef}>
    //     <section>
    //       <div className="first-slide">item 1</div>
    //     </section>
    //     <section>
    //       <div className="second-slide">item 2</div>
    //     </section>
    //     <section>
    //       {" "}
    //       <div className="third-slide">item 3</div>
    //     </section>
    //   </div>
    // </div>
  );
}

export default App;

// const mainRef = useRef<HTMLDivElement>(null);
// const [scrollPercentage, setScrollPercentage] = useState<number>(0);

// useEffect(() => {
//   function handleScroll() {
//     if (mainRef.current) {
//       const scrollPosition = mainRef.current.scrollTop;
//       const height = mainRef.current.scrollHeight;
//       const clientHeight = mainRef.current.clientHeight;

//       if (height - clientHeight > 0) {
//         const scrollPercentage = (scrollPosition / (height - clientHeight)) * 100;
//         setScrollPercentage(scrollPercentage);
//       }
//     }
//   }

//   if (mainRef.current) {
//     mainRef.current.addEventListener("scroll", handleScroll);
//   }

//   if (mainRef.current) {
//     const currentRef = mainRef.current;
//     currentRef.addEventListener("scroll", handleScroll);

//     return () => {
//       currentRef.removeEventListener("scroll", handleScroll);
//     };
//   }
// }, []);
