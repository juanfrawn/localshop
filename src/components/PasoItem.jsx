const PasoItem = ({ img, title, description }) => {
  return (
    <section className="pasos__item">
      <div className="pasos__item__image">
        <img src={img} alt={title} className="md:w-full" />
      </div>
      <div className="pasos__item__content">
        <h3 className="pasos__item__title">{title}</h3>
        <p className="pasos__item__description">{description}</p>
      </div>
    </section>
  );
};

export default PasoItem;
