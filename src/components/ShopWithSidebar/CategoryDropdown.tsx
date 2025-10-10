"use client";

import { FilterTranslations } from "@/data";
import { RootState } from "@/redux/store";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const CategoryItem = ({ category, onSelectCategory, selectedCategories }) => {
  const selected = selectedCategories.includes(category.name);

  const handleClick = () => {
    if (onSelectCategory) onSelectCategory(category.name);
  };

  return (
    <button
      className={`${selected ? "text-blue" : ""} group flex items-center justify-between ease-out duration-200 hover:text-blue w-full`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${selected ? "border-[#ccc] bg-blue" : "bg-white border-[#ccc]"} `}
        >
          <svg
            className={selected ? "block" : "hidden"}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{category.name}</span>
      </div>

      {category.products && (
        <span
          className={`${selected ? "text-white bg-blue" : "bg-gray-2"} inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}
        >
          {category.products}
        </span>
      )}
    </button>
  );
};

const ParentCategory = ({ parent, onSelectCategory, selectedCategories }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-[#ccc9]">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-between py-3 px-6 bg-gray-50 hover:bg-gray-100"
      >
        <span className="font-semibold text-dark">{parent.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {open && (
        <div className="flex flex-col gap-3 py-3 pl-8 pr-5">
          {parent.children?.map((child, i) => (
            <CategoryItem
              key={i}
              category={child}
              onSelectCategory={onSelectCategory}
              selectedCategories={selectedCategories}
            />
          ))}
        </div>
      )}
    </div>
  );
};
const CategoryDropdown = ({
  categories = [],
  onSelectCategory,
  selectedCategories = [],
  pageTitle,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  // Toggle a category when clicked
  const handleSelectCategory = (cat) => {
    if (onSelectCategory) onSelectCategory(cat);
  };

  return (
    <div className="bg-white shadow-1 rounded-lg">
      {/* Header */}
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 border-b border-[#ccc9]"
      >
        <p className="text-dark font-medium">{pageTitle}</p>
        <svg
          className={`fill-current transition-transform ${toggleDropdown ? "rotate-180" : ""
            }`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M4.43 8.51L12 14.01L19.57 8.43L12.49 15.57L4.51 9.57Z" />
        </svg>
      </div>

      {/* Dropdown list */}
      <div className={`mt-2 flex-col ${toggleDropdown ? "flex" : "hidden"}`}>
        {categories.map((cat) => {
          const isSelected = selectedCategories.includes(cat.encrypted_id);
          return (
            <div
              key={cat.encrypted_id}
              onClick={() => handleSelectCategory(cat)}
              className={`py-2 px-6 cursor-pointer flex items-center transition-colors ${isSelected ? "bg-gray-100 font-medium" : ""
                }`}
            >
              {/* <div
                className={`flex items-center justify-center rounded w-4 h-4 border ${isSelected
                    ? "border-blue-600 bg-blue-600"
                    : "bg-white border-gray-300"
                  }`}
              >
                {isSelected && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
                      stroke="white"
                      strokeWidth="1.94437"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div> */}
              <div
                className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${isSelected ? "border-[#ccc] bg-blue" : "bg-white border-[#ccc]"} `}
              >
                <svg
                  className={isSelected ? "block" : "hidden"}
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
                    stroke="white"
                    strokeWidth="1.94437"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-2 text-sm">{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryDropdown;
