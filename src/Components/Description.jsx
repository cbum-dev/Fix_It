function DescriptionCard({ title, description }) {
  return (
    <div className="m-2">
      <div className="bg-neutral-950 rounded-lg py-6 md:px-6 px-4">
        <h1 className="text-2xl text-center text-gray-200   mb-2 md:text-2xl lg:text-4xl ">
          {title}
        </h1>
        <p className="text-center text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
}

export default DescriptionCard;
