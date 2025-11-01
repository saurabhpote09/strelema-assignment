import React from "react";
import DestinationCard from "../common/DestinationCard";

const destination = [
  {
    imgUrl: "/images/32e1459ae49e57046b9c9bf320fe245919168bb0.png",
    price: "5,42k",
    days: 10,
    location: "Rome, Italty",
  },
  {
    imgUrl: "/images/599d5437ff6f71a7522170940c3ac66332ac8d2f.jpg",
    price: "4,2k",
    days: 12,
    location: "London, UK",
  },
  {
    imgUrl: "/images/1119f8e879b2e4cb46bd33155639a62530f9a579.png",
    price: "15k",
    days: 28,
    location: "Full Europe",
  },
];
const Destination = () => {
  return (
    <div className="mt-28">
      <div className="font-semibold text-lg leading-[27px] text-[#5E6282] uppercase text-center">
        Top Selling
      </div>
      <h1 className="text-center">Top Destinations</h1>
      <div className="flex items-center justify-center flex-col md:flex-row gap-9 mt-16">
        {
            destination.map((dest)=>{
               return <DestinationCard imgUrl={dest.imgUrl} price={dest.price} days={dest.days} location={dest.location}/>

            })
        }
       
      </div>
    </div>
  );
};

export default Destination;
