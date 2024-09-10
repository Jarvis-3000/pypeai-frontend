import Image from "next/image";
import { FeatureCard, FeatureProps } from "./FeatureCard";

export const Features = async ({ features }: { features: FeatureProps[] }) => {
  return (
    <div id="features" className="py-[20px] px-[20px] lg:px-[50px] mt-[100px]">
      <div className="flex justify-center mb-10">
        <button className="py-2 px-6 flex items-center gap-3 shadow-custom-inset rounded-full border bg-white text-slate-800 ">
          <Image
            src="/features.svg"
            height={50}
            width={50}
            className="h-4 w-4"
            alt=""
          />
          Features
        </button>
      </div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold mb-[30px] md:mb-[50px]">
        Turbocharge your LLM apps development
      </h1>
      {/* Features */}
      <div className="relative flex">
        <div className="md:columns-2 gap-[20px] mx-auto">
          {features?.length > 0 ? (
            features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))
          ) : (
            <p>No features available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
