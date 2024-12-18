/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./categoryCard.css";
import { motion } from "framer-motion";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category}`}>
      <motion.div
        className="category-card"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <h4 className="category-name">{category}</h4>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
