export default function Hero() {
  return (
    <section className="bg-xtb-dark text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Where your money works</h1>
        <p className="text-xl text-gray-300 mb-8">
          Investing, market analysis, education
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-xtb-blue px-8 py-3 rounded-lg">
            Start Trading
          </button>
          <button className="border border-white px-8 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
