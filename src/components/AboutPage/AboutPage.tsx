import { aboutUs } from "@/app/data";
import { motion } from "framer-motion";

const AboutPage = function AboutPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/6">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neon-red text-5xl text-center mb-8 "
        >
          ABOUT US
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-neon-blue text-xl mb-6 text-center"
        >
          {aboutUs.slogan}
        </motion.div>
        {aboutUs.info.map((info, index) => {
          return (
            <motion.div
              key={info}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="w-full text-center text-white text-lg mb-2"
            >
              {info}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
