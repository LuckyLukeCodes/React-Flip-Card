import { IoArrowForward } from "react-icons/io5";

const CardFront = ({ image }) => {
  return (
    <div
      className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-gray-900 
    transition-all delay-100 duration-200 hover:opacity-0 "
    >
      <img src={image} alt="" className="object-cover" />
      <div className="absolute bottom-4 right-4 rounded-full border-[3px] border-white p-2">
        <IoArrowForward className="text-lg" />
      </div>
    </div>
  );
};

export default CardFront;
