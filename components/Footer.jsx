import React from "react";

import footerBlobs from "@/assets/blobs/footer_blobs.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-fit align-middle justify-center flex flex-row border-t-[1px] border-t-text-color m-auto py-12 secondary-title mt-12 tablet:mt-20 laptop:mt-36 relative">
      adtimokhin 2022-2023
      {/* Blobs */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-1 items-center justify-center -z-50">
      <Image src={footerBlobs} alt="Footer Blobs" objectPosition="bottom" className="h-[300%] blur-3xl" />
      </div>
      
    </footer>
  );
};

export default Footer;
