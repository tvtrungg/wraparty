import { logoClientLink } from "@/app/data";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import "./OurClientPage.css";
import { useEffect, useRef } from "react";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function usePageAnimation(isInView: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".wrap-logo",
      isInView
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isInView ? staggerMenuItems : 0,
      }
    );
  }, [isInView]);

  return scope;
}

function OurClientPage() {
  const pageRef = useRef(null);
  const isInView = useInView(pageRef);
  const scope = usePageAnimation(isInView);
  return (
    <div className="w-screen h-screen bg-primary-color flex justify-center items-center flex-col">
      <div ref={pageRef} className="text-neon-red text-5xl mb-5">
        Our Clients
      </div>
      <div
        ref={scope}
        className="w-4/5 h-4/5 flex justify-center items-center flex-wrap"
      >
        {logoClientLink.map((item, index) => {
          return (
            <div
              key={index}
              className="w-1/5 h-1/5 flex justify-center items-center wrap-logo"
            >
              <img src={item} alt="logo" className="w-2/3 h-2/3" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurClientPage;
