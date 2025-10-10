'use client'
import Link from 'next/link'
import React from 'react'
import Breadcrumb from '../Common/Breadcrumb'
import { useQuery } from '@tanstack/react-query';
import API from '@/services/api';
import { useParams, useSearchParams } from 'next/navigation';

export default function SubGroup() {
    const { category, slug } = useParams(); // dynamic route params
    const searchParams = useSearchParams(); // query params
    const subCategoryId = searchParams.get("subId"); // extract ?subId=

    console.log("Category:", category);
    console.log("Slug:", slug);
    console.log("Subcategory ID:", subCategoryId);

    const { data, isLoading } = useQuery({
        queryKey: ["layout", subCategoryId],
        queryFn: async () => {
            const res = await API.getCategoriesById(subCategoryId);
            return res.data.data;
        },
        enabled: !!subCategoryId, // only fetch if subCategoryId exists
        staleTime: Infinity,
    });

    return (
        <section className="overflow-hidden relative pb-20 pt-25 lg:pt-20 xl:pt-28 bg-[#f3f4f62e]">
            <Breadcrumb title={category} pages={[category]} />
            <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                <Link href={`/categories/${category}/${slug}?subId=${subCategoryId}`} className="cursor-pointer group">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="font-medium text-lg text-dark ease-out duration-200 hover:text-blue">
                            {slug}
                        </h3>
                    </div>
                </Link>
            </div>
        </section>
    )
}
