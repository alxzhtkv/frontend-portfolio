import { motion } from "framer-motion";
import { useState } from "react";
import "./Preview.scss";

export function Preview() {
  const [transformValue, setTransformValue] = useState<number>(-100);

  const handleHoverStart = () => {
    setTransformValue(0);
  };

  const handleHoverEnd = () => {
    setTransformValue(100);
    setTimeout(() => {
      setTransformValue(-100);
    }, 900);
  };

  return (
    <div className="preview_container">
      <div className="preview_text-container" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
        <motion.span
          initial={{ x: `-100%` }}
          animate={{ x: `${transformValue}%` }}
          transition={{ duration: transformValue === -100 ? 0 : 0.5 }}
          className="preview_text"
        >
          <div>
            <div className="preview_text-phrase">
              <h1>alxzhtkv@gmail.com</h1>
              <SmallPrint />
            </div>
          </div>
          <div className="preview_text-item">
            <div className="preview_text-phrase">
              <h1>Alexadra Zhitkova</h1>
              <SmallPrint />
            </div>
          </div>
          <div className="preview_text-item">
            <div className="preview_text-phrase">
              <h1>Alexadra Zhitkova</h1>
              <SmallPrint />
            </div>
          </div>
        </motion.span>
      </div>
    </div>
  );
}

function SmallPrint() {
  return (
    <>
      <div className="preview_text_smallprint">
        <p>Hurricane gameplay</p>
        <p>Disrupt narratives</p>
      </div>
      <div className="preview_text_smallprint">
        <p>Open economy</p>
        <p>Adoption</p>
        <p>VCS</p>
      </div>
      <div className="preview_text_smallprint">
        <p>Web3 believers</p>
        <p>Web2 veterans</p>
      </div>
    </>
  );
}
