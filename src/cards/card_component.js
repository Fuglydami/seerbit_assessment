import React from "react";

const CardComponent = ({ items }) => {
  const { image, heart_icon, Cart_icon, amount, name } = items;
  return (
    <section className="lg:w-1/3 md:w-1/2 overflow-hidden cursor-pointer w-full">
      <div className=" w-full md:mx-auto mx-0 md:p-6 p-1">
        <img
          src={image}
          alt="card"
          className=" relative object-cover w-full  h-80 md:h-fit"
        />
        <div className="flex justify-between pt-5">
          <div className="">
            <p className="font-medium md:text-2xl text-xl">{name}</p>
            <p className="md:text-xl text-lg grey">{amount}</p>
          </div>
          <div className="flex flex-col justify-between">
            <img src={heart_icon} alt="heart_icon" />
            <img src={Cart_icon} alt="Cart_icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
