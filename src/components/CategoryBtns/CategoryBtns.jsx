import { NavLink } from "react-router-dom";

const CategoryBtns = ({ categories }) => {
  return (
    <div className="flex flex-col w-[200px] h-[280px] border rounded-md justify-center items-center p-3 space-y-4">
      {categories.map(category => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`} 
          className={({ isActive }) =>
            `btn rounded-full w-full ${isActive ? 'bg-common text-white border-common' : 'border-gray-300'}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryBtns;
