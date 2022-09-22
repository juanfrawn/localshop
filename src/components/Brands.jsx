import BrandsCarrousell from "./BrandsCarrousell";

const Brands = () => {
  return (
    <section className="text-center mb-16">
      <h2 className="mb-11 font-extrabold text-title text-xl sm:text-2xl md:text-4xl">
        ESTÁN HABLANDO DE <span className="text-primary">LOCALSHOP</span>
      </h2>
        <BrandsCarrousell />
    </section>
  );
};

export default Brands;
