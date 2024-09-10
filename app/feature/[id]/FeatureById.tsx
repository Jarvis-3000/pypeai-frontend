/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FeatureCard, FeatureProps } from "@/app/_components/FeatureCard";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FeatureById = () => {
  const { id }: { id: string } = useParams();
  const [feature, setFeature] = useState<FeatureProps | null | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  const getFeatureById = (featureId: string) => {
    // Fetch data from your backend API
    setLoading(true);
    fetch(process.env.NEXT_PUBLIC_STRAPI_API + "/features/" + featureId)
      .then((res) => res.json())
      .then(({ data }) => {
        if (!data) {
          setFeature(null);
          return;
        }

        const id = data?.id;
        const title = data?.attributes?.title;
        const description = data?.attributes?.description;
        const icon = data?.attributes?.icon || "";
        const displayImage = data?.attributes?.displayImage || "";

        setFeature({
          id,
          title,
          description,
          icon,
          displayImage,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return null;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    getFeatureById(id);
  }, [id]);

  if (loading || feature === undefined) {
    return (
      <div>
        <LoaderCircle className="animate-spin stroke-1" size={50} />
      </div>
    );
  }

  return (
    <>
      {feature ? (
        <FeatureCard {...feature} />
      ) : (
        <div className="bg-red-100 border-2 border-red-300 p-[30px] rounded-lg flex flex-col justify-center gap-10">
          <Image
            src="/issue.svg"
            height={400}
            width={400}
            className="h-[100px] w-[150px] mx-auto"
            alt="issue"
          />
          <p className="text-slate-800 text-lg text-center  text-muted-foreground">
            Failed to load the requested feature information
          </p>
        </div>
      )}
    </>
  );
};

export default FeatureById;
