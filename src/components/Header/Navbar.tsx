import { Fragment, useState } from "react";
import { dataNavbar } from "../../data/dummyData";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const containerNavbar = {
    hidden: { opacity: 1, top: -500 },
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.8,
        type: 'spring'
      },
    },
  };

  return (
    <Fragment>
      <motion.nav
        className="flex justify-center absolute left-1/2 z-50 -translate-x-1/2 my-5"
        variants={containerNavbar}
        initial="hidden"
        animate="visible"
      >
        <motion.ul className="xl:flex hidden items-center gap-24 px-20 py-5 bg-white/30 border backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg transition-all duration-200 rounded-full">
          {dataNavbar.map(({ id, navigate, navigate_url }) => (
            <a
              key={id}
              href={navigate_url}
              className="text-primary opacity-30 hover:opacity-80 font-semibold cursor-pointer"
            >
              {navigate}
            </a>
          ))}
        </motion.ul>
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
