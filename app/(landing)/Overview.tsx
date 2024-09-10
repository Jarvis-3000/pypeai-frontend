const Overview = () => {
  return (
    <div className="flex flex-col items-center py-[50px]">
      {/* Overview heading and description */}
      <div className="w-[80%] max-w-[600px] text-center mb-10">
        <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold mb-10">
          Build, Evaluate and Improve Prompts
          <br />
          <p className="text-blue-800 dark:text-white mt-3 font-extrabold">
            10x faster
          </p>
        </h1>
        <p className=" font-medium ">
          Empower your team to build, evaluate, and deploy high-performing
          prompts for LLM-based applications. Pype streamlines collaboration,
          version control, and performance analysis, helping you deliver
          reliable AI solutions faster.
        </p>
      </div>

      {/* youtube video */}
      <div className="relative border-2 border-gray-400 dark:border-slate-500 w-[80%] max-w-[700px] aspect-[100/55] rounded-lg overflow-hidden cursor-pointer mb-[50px]">
        {/* Preconnect to improve loading performance */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />

        <iframe
          src="https://www.youtube.com/embed/-y_KrosGWaU?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1"
          className="h-full w-full"
          allowFullScreen
          allow="presentation accelerometer autoplay encrypted-media gyroscope picture-in-picture"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-3 text-sm">
        <button className="bg-slate-800 font-semibold text-slate-50 dark:bg-slate-50 dark:text-slate-800 py-2 px-[20px] sm:px-[30px] lg:px-[50px] rounded-lg">
          Launch App
        </button>
        <button className="bg-blue-500 font-semibold text-white dark:bg-blue-400 py-2 px-[20px] sm:px-[30px] lg:px-[50px] rounded-lg">
          Book a demo {`-{>}`}
        </button>
      </div>
    </div>
  );
};

export default Overview;
