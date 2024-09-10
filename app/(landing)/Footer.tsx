import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <div className="mt-[100px] bg-slate-200 dark:bg-slate-800 flex justify-between gap-[50px] py-[30px] px-[20px] sm:px-[50px] lg:px-[100px] xl:px-[200px]">
      <h3 className="text-sm min-w-[400px]">
        © Singularity Corp Pvt. Ltd. 2024. All rights reserved. Privacy Policy.
      </h3>

      <a
        href="https://www.linkedin.com/company/pype-ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 bg-blue-700 rounded-sm"
      >
        <Linkedin className="h-5 w-5 group-hover:scale-110 duration-200 text-slate-50 "/>
      </a>
    </div>
  );
};
