import "./categoryList.css";
import CategoryCard from "../Category-Card/CategoryCard";
import useGetCategories from "../../hooks/useGetCategories";

const CategoryList = () => {
  const { categories, loading } = useGetCategories();
  // console.log("useHook", categories);

  return (
    <div className="category-list">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="category-card">
              <h4 className="category-name">Loading...</h4>
            </div>
          ))
        : categories.map((category) => (
            <CategoryCard key={category} category={category} />
          ))}
    </div>
  );
};

export default CategoryList;
