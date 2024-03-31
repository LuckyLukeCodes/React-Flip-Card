const CardBack = ({ text }) => {
  return (
    <div
      className="card-back absolute inset-0 z-10 flex h-full w-full items-center 
    justify-center bg-black transition-all"
    >
      {text}
    </div>
  );
};

export default CardBack;
