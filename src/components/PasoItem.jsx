const PasoItem = ({ img, title, description }) => {
  return (
    <section className="grid grid-cols-steps mb-9 px-3 xs:mb-10">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="px-2 self-center">
        <h3 className="text-lg xs:text-xl text-primary font-extrabold">{title}</h3>
        <p className="text-sm xs:text-base text-subtitle">{description}</p>
      </div>
    </section>
  );
};

export default PasoItem;
