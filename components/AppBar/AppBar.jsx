import React from "react";
import "./AppBar.css";
import Image from "next/image";
import barcode from "../../src/assets/img/barcode.png";
import playstore from "../../src/assets/img/playstore.png";
import appstore from "../../src/assets/img/appstore.png";
import mobile from "../../src/assets/img/mobile.png";

function AppBar() {
  return (
    <div className="mt-10 mb-10">
      <div className="customContainer bg-[#0E82FD] rounded-lg">
        <div className="appbar rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-10">
              <h4 className="text-2xl mt-5 font-bold text-white">
                Working for Your Better Health.
              </h4>
              <h2 className=" text-4xl py-4 font-bold text-white">
                Download the Doccure <br /> App today!
              </h2>
              <h4 className="text-2xl font-bold text-white py-3">
                Scan the QR code to get the app now
              </h4>
              <Image src={barcode} width={100} height={100} alt="image" />
              <div className="flex gap-5 pb-3 mt-8">
                <Image src={playstore} width={200} height={100} alt="image" />
                <Image src={appstore} width={200} height={100} alt="image" />
              </div>
            </div>
            <div>
              <Image
                className="mt-11"
                src={mobile}
                width={500}
                height={500}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
