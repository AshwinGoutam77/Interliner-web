"use client";

import { FilterTranslations } from "@/data";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const CategoryItem = ({ category }) => {
  const [selected, setSelected] = useState(category.isRefined || false);

  return (
    <button
      className={`${selected && "text-blue"
        } group flex items-center justify-between ease-out duration-200 hover:text-blue w-full`}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${selected ? "border-[#ccc] bg-blue" : "bg-white border-[#ccc]"
            }`}
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
          className={`${selected ? "text-white bg-blue" : "bg-gray-2"
            } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}
        >
          {category.products}
        </span>
      )}
    </button>
  );
};

const ParentCategory = ({ parent }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-[#ccc9]">
      {/* Parent header */}
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

      {/* Child categories */}
      {open && (
        <div className="flex flex-col gap-3 py-3 pl-8 pr-5">
          {parent.children?.map((child, i) => (
            <CategoryItem key={i} category={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryDropdown = ({ categories }) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const lang = useSelector((state: RootState) => state.language.lang);
  const content = FilterTranslations[lang] || FilterTranslations.en;

  // check if categories are parent-child or flat
  const hasParents = categories.some((cat) => cat.children);

  return (
    <div className="bg-white shadow-1 rounded-lg">
      {/* Dropdown header */}
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${toggleDropdown && "shadow-filter"
          }`}
      >
        <p className="text-dark">{content.category}</p>
        <button
          aria-label="button for category dropdown"
          className={`text-dark ease-out duration-200 ${toggleDropdown && "rotate-180"
            }`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* Dropdown content */}
      <div className={` mt-2 flex-col ${toggleDropdown ? "flex" : "hidden"}`}>
        {hasParents
          ? categories.map((parent, key) => (
            <ParentCategory key={key} parent={parent} />
          ))
          : categories.map((cat, key) => (
            <div key={key} className="py-2 px-6">
              <CategoryItem category={cat} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
