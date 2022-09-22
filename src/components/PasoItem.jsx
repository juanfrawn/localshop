const PasoItem = ({ img, title, description }) => {
  return (
    <section className="grid grid-cols-steps mb-9 px-3 sm:mb-10 md:flex md:flex-col md:text-center md:w-1/3">
      <div className="md:mx-auto md:w-28 md:mb-4">
        <img src={img} alt={title} className="md:w-full" />
      </div>
      <div className="px-2 self-center">
        <h3 className="text-lg sm:text-xl text-primary font-extrabold md:mb-2 lg:text-2xl">{title}</h3>
        <p className="text-sm sm:text-base text-subtitle">{description}</p>
      </div>
    </section>
  );
};

export default PasoItem;
