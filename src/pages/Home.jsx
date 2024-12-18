import CategoryList from "../components/Category-List/CategoryList";
import ProductList from "../components/Product-List/ProductList";
import { ProductProvider } from "../context/ProductContext";

const Home = () => {
  return (
    <ProductProvider>
      <div className="main-content">
        <div className="products">
          <h1 className="section-title">Products</h1>
          <ProductList />
        </div>

        <div className="category">
          <h1 className="section-title">Category</h1>
          <CategoryList />
        </div>
      </div>
    </ProductProvider>
  );
};

export default Home;
