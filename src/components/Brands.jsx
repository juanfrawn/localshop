import BrandsCarrousell from "./BrandsCarrousell";

const Brands = () => {
  return (
    <section className="brands__container">
      <h2 className="brands__title">
        ESTÁN HABLANDO DE <span className="text-primary">LOCALSHOP</span>
      </h2>
        <BrandsCarrousell />
    </section>
  );
};

export default Brands;
