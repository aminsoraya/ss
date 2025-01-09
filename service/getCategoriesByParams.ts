"use server";
export const getCategoriesByParams = async (params: any) => {
  const getData = await fetch(
    process.env.NEXT_PUBLIC_TRENDYOL_CATEGORIES_BY_PARAMS!
  ).then((data) => data.json());

  return getData;
};
