import BrandCarousel, { BrandProps } from "./BrandCarousel";

export const Brands = ({ brands }: { brands: BrandProps[] }) => {
  return (
    <div className="mt-[50px]">
      <h3 className="w-[80%] max-w-[500px] mx-auto text-lg text-center text-slate-800 dark:text-slate-50 text-muted-foreground mb-5">
        {`Helping individuals and teams at the world's best companies`}
      </h3>
      <BrandCarousel brands={brands} />
    </div>
  );
};
