import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 8px rgb(255, 255, 255)",
            boxShadow: "0 0 20px rgb(255, 255, 255)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
// scale : 1.2, x : left or right value, y : up or down value
// animate={{ rotateZ: 0 }} any css property
// initial={{ rotateZ : 180}}
// duration={{delay : 1.5, duration : 1.5, type : "spring or tween or"}}
// duration={{delay : 1.5, duration : 1.5, type : "spring", stiffness : 120}}
