import { useState, FC } from "react";
import CategoryBox from "./Category-box";
import { MinusIcon, PlusIcon } from "../../utils/icons/Icon";

import "./category.css";

interface Category {
  id: number;
  name: string;
  subCategories: Category[];
}

interface CategoryComponentProps {
  data?: Category;
  level?: number;
}

const CategoryComponent: FC<CategoryComponentProps> = ({ data, level = 0 }) => {
  const [categories, setCategories] = useState<Category[]>(
    data ? [data] : [{ id: 1, name: "Categories", subCategories: [] }]
  );

  const addSubcategory = (categoryId: number) => {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      const category = newCategories.find(
        (category) => category.id === categoryId
      );
      if (category) {
        const newSubcategoryId =
          Math.max(...category.subCategories.map((subCat) => subCat.id), 0) + 1;
        category.subCategories.push({
          id: newSubcategoryId,
          name: `Subcategory ${newSubcategoryId}`,
          subCategories: [],
        });
      }
      return newCategories;
    });
  };

  //   const removeCategory = () => {
  //     const newCategories = [...categories];
  //     newCategories.pop();
  //     setCategories(newCategories);
  //   };
  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          style={{ marginLeft: 20 * level }}
          className="category-container"
        >
          <div className="category-box">
            <p>{category.name}</p>
            <PlusIcon
              className="add-icon"
              onClick={() => addSubcategory(category.id)}
            />
            <MinusIcon className="add-icon" onClick={() => null} />
          </div>
          <div className="sub-categories">
            {category.subCategories.map((subCategory, index) => (
              <div
                className={`sub-category ${
                  index !== 0 ? "sub-category-line" : ""
                }`}
                key={subCategory.id}
              >
                <CategoryComponent data={subCategory} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryComponent;
