/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./productCard.css";
import { TbPlus } from "react-icons/tb";
import { motion } from "framer-motion";

const ProductCard = ({ productData }) => {
  const { addToCart } = useCart();
  // console.log(addToCart);

  const handleAdd = (product) => {
    addToCart(product);
  };

  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="card-image">
        <img src={productData.image} alt="product-image" />
      </div>

      <div className="card-details">
        <Link to={`/product/${productData.id}`}>
          <h4 className="card-title">{productData.title}</h4>
          <div className="card-category">{productData.category}</div>
        </Link>

        <div className="card-flex">
          <div className="card-price">${productData.price}</div>
          <div onClick={() => handleAdd(productData)} className="card-button">
            <TbPlus />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
