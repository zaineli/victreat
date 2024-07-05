import React from "react";

const Example = () => {
  return (
    <div className="grid place-content-center p-4 ">
      <DrawOutlineButton>Sign In</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }: {
  children: React.ReactNode;
  [x: string]: any;

}) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-slate-900 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-1000 group-hover:w-full [transfrom-origin:1p00%_center]" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example;