import { useState, FC } from "react";
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

  const removeSubcategory = (categoryId: number, subcategoryId: number) => {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      const category = newCategories.find(
        (category) => category.id === categoryId
      );
      if (category) {
        category.subCategories = category.subCategories.filter(
          (subCategory) => subCategory.id !== subcategoryId
        );
      }
      return newCategories;
    });
  };
  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="category-container">
          <div
            className="category-box"
            style={{ marginLeft: 40 * level }}
            id="category-box"
          >
            <p>{category.name}</p>
            <PlusIcon
              className="add-icon"
              onClick={() => addSubcategory(category.id)}
            />
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
                {/* <MinusIcon
                  className="add-icon"
                  onClick={() => removeSubcategory(category.id, subCategory.id)}
                /> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryComponent;
