const PasoItem = ({ img, title, description }) => {
  return (
    <section className="grid grid-cols-steps mb-9 px-3">
      <div className="">
        <img src={img} className="w" alt={title} />
      </div>
      <div className="px-2 self-center">
        <h3 className="text-base text-primary font-extrabold">{title}</h3>
        <p className="text-xs text-subtitle">{description}</p>
      </div>
    </section>
  );
};

export default PasoItem;
