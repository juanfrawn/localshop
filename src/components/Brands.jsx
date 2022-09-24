import BrandsCarrousell from "./BrandsCarrousell";

const Brands = () => {
  return (
    <section className="px-4 text-center mb-16 lg:max-w-4xl lg:mx-auto xl:max-w-5xl lg:mb-20">
      <h2 className="mb-11 font-extrabold text-title text-xl sm:text-2xl md:text-4xl lg:mb-16">
        ESTÁN HABLANDO DE <span className="text-primary">LOCALSHOP</span>
      </h2>
        <BrandsCarrousell />
    </section>
  );
};

export default Brands;
