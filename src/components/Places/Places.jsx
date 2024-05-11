import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/Dal.png";
import Img2 from "../../assets/places/Beetab.png";
import Img3 from "../../assets/places/Sonamarg.png";
import Img4 from "../../assets/places/Patnitop.png";
import Img5 from "../../assets/places/Kishtwar.png";
import Img6 from "../../assets/places/Bahu fort.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Dal Lake",
    location: "Srinagar",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Beetab valley",
    location: "Srinagar",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 500,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Sonamarg",
    location: "Srinagar",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Patnitop",
    location: "Jammu",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Kishtwar",
    location: "Jammu",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 400,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Bahu fort",
    location: "Jammu",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
