import Card from "./Card";

const CardContainer = () => {
      return (
            <section className="w-full sm:flex sm:justify-center sm:items-center sm:w-1/2  relative h-[60%]  px-10">
                  <section className="absolute w-[70%] 2xl:w-[55%] lg:left-[55%] xl:left-[60%]  left-1/2 -translate-y-1/2 -translate-x-1/2 top-[46%] sm:top-[50%] rounded-md bg-white/30 lg:h-80  sm:h-64  h-80"></section>
                  <section className="absolute w-3/4 2xl:w-[60%] lg:left-[55%] xl:left-[60%]  left-1/2 -translate-y-1/2 -translate-x-1/2 top-[48%] sm:top-[52%] rounded-md bg-white/40 lg:h-80  sm:h-64  h-80"></section>
                  <Card />
            </section>
      );
};

export default CardContainer;
