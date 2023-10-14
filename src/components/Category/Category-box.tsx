import React, { FC } from "react";
import { MinusIcon, PlusIcon } from "../../utils/icons/Icon";

type BoxProps = {
  category: string;
  addCategory: () => void;
  removeCategory: () => void;
};

const CategoryBox: FC<BoxProps> = ({
  category,
  addCategory,
  removeCategory,
}) => {
  return (
    <div className="category-box">
      <h2>{category} </h2>
      <PlusIcon className="add-icon" onClick={addCategory} />
      <MinusIcon className="add-icon" onClick={removeCategory} />
    </div>
  );
};

export default CategoryBox;
