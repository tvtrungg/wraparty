import { aboutUs } from "@/app/data";
import { motion } from "framer-motion";

const AboutPage = function AboutPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/6 rounded-2xl p-7 pt-12 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-neon-red text-4xl primary-color-bg text-center border-neon-red rounded-full px-5 py-2"
          >
            ABOUT US
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
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
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              className="w-full text-justify text-white text-lg mb-2"
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
