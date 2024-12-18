import "./productList.css";
import ProductCard from "../Product-Card/ProductCard";
import { useProduct } from "../../context/ProductContext";
import Skeleton from "../Skeleton/Skeleton";

const ProductList = () => {
  const { products, loading } = useProduct();
  // console.log("proverka", products);

  return (
    <div className="product-list">
      {loading ? (
        Array.from({ length }).map((_, index) => (
          <div key={index} className="skeleton-container">
            <Skeleton />
          </div>
        ))
      ) : (
        <>
          {" "}
          {products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
