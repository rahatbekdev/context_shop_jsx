// import { useParams } from "react-router-dom";
import "./productDetail.css";
import useGetProduct from "../../hooks/useGetProduct";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { product, loading } = useGetProduct();
  const { addToCart } = useCart();
  // console.log(product);

  //Add to cart

  const handleAdd = (addProduct) => {
    addToCart(addProduct);
  };
  return (
    <motion.div
      className="product-container"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <div className="product-image">
        {loading ? (
          <div className="product-image-skeleton"></div>
        ) : (
          <img src={product.image} alt={product.title} />
        )}
      </div>

      <div className="product-detail">
        {loading ? (
          <div className="product-detail-skeleton">
            <div className="product-skeleton"></div>
            <div className="product-skeleton"></div>
            <div className="product-skeleton"></div>
            <div className="product-skeleton"></div>
            <div className="product-skeleton"></div>
            <div className="product-skeleton"></div>
            <div className="product-skeleton"></div>
          </div>
        ) : (
          <>
            <div className="product-category">{product.category}</div>
            <h1 className="product-title">{product.title}</h1>
            <div className="product-rating">
              <div className="product-rating-start">zvezdochka</div>
              <span>{product.rating?.rate}</span>
              <span>{product.count?.count} review</span>
            </div>

            <div className="product-description">{product.description}</div>
            <div className="product-price">$ {product.price}</div>

            <div className="product-buttons">
              <div onClick={() => handleAdd(product)} className="product-btn">
                Add To Cart
              </div>
              <div className="product-btn buy-btn">Buy Now</div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetail;
