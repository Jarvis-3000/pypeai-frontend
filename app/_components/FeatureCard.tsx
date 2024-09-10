import Image from "next/image";

export interface FeatureProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  displayImage?: string;
}

export const FeatureCard = ({
  id,
  title,
  description,
  icon,
  displayImage,
}: FeatureProps) => {
  return (
    <a href={`/feature/${id}`}>
      <div className="break-inside-avoid py-[10px] max-w-[600px]">
        <div className="bg-gray-100 border-[1px] border-gray-300 p-[30px] rounded-lg">
          <Image
            src={icon}
            height={100}
            width={100}
            alt={title}
            className="h-[45px] w-[45px] mb-8"
          />
          <h1 className="text-slate-800 text-lg font-semibold mb-4">{title}</h1>
          <p className="text-slate-600 text-sm text-muted-foreground ">
            {description}
          </p>
          {displayImage && (
            <Image
              src={displayImage}
              height={500}
              width={500}
              alt={title}
              className="mt-8"
            />
          )}
        </div>
      </div>
    </a>
  );
};
