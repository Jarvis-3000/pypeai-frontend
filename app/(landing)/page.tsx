/* eslint-disable @typescript-eslint/no-explicit-any */
import Overview from "./Overview";
import { Brands } from "./Brands";
import { Features } from "./Features";
import FeatureJson from "../../resources/features.json";
import BrandsJson from "../../resources/brands.json";

const getFeaturesData = async () => {
  try {
    // Fetch data from your backend API
    let res: any = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_API + "/features"
    );
    res = await res.json();
    res = res?.data;

    const features = res?.map((entry: any) => {
      const id = entry?.id;
      const title = entry?.attributes?.title;
      const description = entry?.attributes?.description;
      const icon = entry?.attributes?.icon || "";
      const displayImage = entry?.attributes?.displayImage || "";

      return {
        id,
        title,
        description,
        icon,
        displayImage,
      };
    });

    return features;
  } catch (error) {
    console.error("Error fetching data:", error);
    return FeatureJson;
  }
};

const getUserCompaniesData = async () => {
  try {
    // Fetch data from your backend API
    let res: any = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_API + "/user-companies"
    );
    res = await res.json();
    res = res?.data;

    const userCompanies = res?.map((entry: any) => {
      const name = entry?.attributes?.name || "";
      const image = entry?.attributes?.image || "";

      return {
        name,
        image,
      };
    });

    return userCompanies;
  } catch (error) {
    console.error("Error fetching data:", error);
    return BrandsJson;
  }
};

export default async function Home() {
  const features = await getFeaturesData();
  const brands = await getUserCompaniesData();

  return (
    <div className="mx-auto pb-10 bg-slate-50 dark:bg-slate-700 pt-[80px] relative overflow-y-auto">
      <Overview />
      <Brands brands={brands} />
      <Features features={features} />
    </div>
  );
}
