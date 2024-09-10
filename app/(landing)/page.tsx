import Header from "./Header";
import Overview from "./Overview";
import { Brands } from "./Brands";
import { Features } from "./Features";
import { Footer } from "./Footer";
import FeatureJson from "../../resources/features.json";
import BrandsJson from "../../resources/brands.json";

const getFeaturesData = async () => {
  try {
    // Fetch data from your backend API
    let res = await fetch(process.env.STRAPI_API + "/features");
    res = await res.json();
    res = res?.data;

    const features = res?.map((entry) => {
      const title = entry?.attributes?.title;
      const description = entry?.attributes?.description;
      const icon = entry?.attributes?.icon || "";
      const displayImage = entry?.attributes?.displayImage || "";

      return {
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
    let res = await fetch(process.env.STRAPI_API + "/user-companies");
    res = await res.json();
    res = res?.data;

    const userCompanies = res?.map((entry) => {
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
    <div className="mx-auto pt-[80px] relative bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-50 overflow-y-auto">
      <Header />
      <Overview />
      <Brands brands={brands} />
      <Features features={features} />
      <Footer />
    </div>
  );
}
