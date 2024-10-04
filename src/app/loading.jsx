import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen text-5xl flex justify-center items-center">
      {/* <span className="loading loading-infinity loading-lg"></span> */}
      <Image
        src={"/assets/images/loading-loader.gif"}
        width={460}
        height={120}
        alt="img"
      />
    </div>
  );
};

export default Loading;
