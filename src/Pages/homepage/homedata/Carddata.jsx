import React from "react";
import { Cards } from "../../../utils/Constants/Card/Cards";

const Carddata = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-[96%] mx-auto my-5">
      {Cards.map((ele) => {
        const { id, heading, content, icon: Icon, bgc } = ele; // icon as component

        return (
          <div key={id} className={`card w-full shadow-sm  text-black ${bgc}`}>
            <div className="card-body flex flex-col items-start gap-3">
              <figure className="w-full flex justify-center mb-3">
                {" "}
                {Icon && <Icon size={35} className="text-blue-600" />}
              </figure>
              <h2 className="card-title font-bold">{heading}</h2>
              <p className="font-serif ">{content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carddata;
