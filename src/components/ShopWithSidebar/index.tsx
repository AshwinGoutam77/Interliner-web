"use client";
import React, { useState, useEffect, useMemo } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import CategoryDropdown from "./CategoryDropdown";
import SingleGridItem from "../Shop/SingleGridItem";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import API from "@/services/api";

const ShopWithSidebar = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop() || "";

  const [selectedChildren, setSelectedChildren] = useState([]);

  // ✅ Fetch categories
  const { data: categoriesData, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await API.getCategories();
      return response.data?.data?.categories || [];
    },
    staleTime: Infinity,
  });

  // ✅ Find the matched category using slug
  const matchedCategory = useMemo(() => {
    return categoriesData?.find(
      (cat) => cat.slug?.toLowerCase() === slug.toLowerCase()
    );
  }, [categoriesData, slug]);

  // ✅ When data is ready, select all children by default
  useEffect(() => {
    if (matchedCategory?.children?.length) {
      setSelectedChildren(matchedCategory.children.map((child) => child.encrypted_id));
    }
  }, [matchedCategory]);

  // ✅ Handle toggling category filter
  const handleSelectCategory = (childId) => {
    setSelectedChildren((prev) =>
      prev.includes(childId)
        ? prev.filter((id) => id !== childId)
        : [...prev, childId]
    );
  };

  // ✅ Filter groups
  const filteredGroups = useMemo(() => {
    if (!matchedCategory) return [];
    if (!matchedCategory.children?.length) return [];

    // If no child is selected (should not happen now), return all groups
    if (selectedChildren.length === 0) {
      return matchedCategory.children.flatMap((child) => child.groups || []);
    }

    // Otherwise, return groups of selected children
    return matchedCategory.children
      .filter((child) => selectedChildren.includes(child.encrypted_id))
      .flatMap((child) => child.groups || []);
  }, [matchedCategory, selectedChildren]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;
  if (!matchedCategory) return <p>Category not found</p>;

  return (
    <section className="overflow-hidden relative pb-20 pt-25 lg:pt-20 xl:pt-28 bg-[#f3f4f62e]">
      <Breadcrumb title={matchedCategory.name} pages={[matchedCategory.name]} />
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex gap-7.5">
          {/* Sidebar */}
          <div
            className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[270px] w-full ease-out duration-200 
                -translate-x-full`}
          >
            <button
              aria-label="button for product sidebar toggle"
              className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1`}
            >
              {/* icon */}
              <svg
                className="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z"
                />
              </svg>
            </button>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <CategoryDropdown
                categories={matchedCategory.children || []}
                onSelectCategory={(child) => handleSelectCategory(child.encrypted_id)}
                pageTitle={matchedCategory.name}
                selectedCategories={selectedChildren} // ✅ pass selected ones
              />
            </form>
          </div>

          {/* Main Content */}
          <div className="xl:max-w-[870px] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9">
              {filteredGroups.length === 0 && <p>No groups found</p>}
              {filteredGroups.map((item, key) => (
                <SingleGridItem
                  key={key}
                  pageTitle={matchedCategory.slug}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWithSidebar;
