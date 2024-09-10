import { FeatureCard, FeatureProps } from "./FeatureCard";

export const Features = async ({ features }: { features: FeatureProps[] }) => {
  return (
    <div className="px-[20px] lg:px-[50px] mt-[100px]">
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
