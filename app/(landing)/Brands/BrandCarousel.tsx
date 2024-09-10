import Image from "next/image";

export interface BrandProps {
  name: string;
  image: string;
}

const BrandCarousel = ({ brands }: { brands: BrandProps[] }) => {
  return (
    <div className="bg-slate-50 w-full bg-trasnsparent inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_200px,_white_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-[50px] [&_img]:max-w-none animate-infinite-scroll">
        {brands?.map((brand) => {
          return (
            <li key={brand.name}>
              <Image
                src={brand.image}
                alt="Brand 1"
                width={200}
                height={100}
                className="h-[70px] object-contain"
              />
            </li>
          );
        })}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-[50px] [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {brands?.map((brand) => {
          return (
            <li key={brand.name}>
              <Image
                src={brand.image}
                alt="Brand 1"
                width={200}
                height={100}
                className="h-[50px] object-contain"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandCarousel;
