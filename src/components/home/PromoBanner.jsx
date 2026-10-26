const BACKGROUND = {
  backgroundImage:
    "linear-gradient(90deg, rgba(110,72,44,.15), rgba(110,72,44,0) 60%), url('images/flat-white.jpg')",
};

export default function PromoBanner() {
  return (
    <article
      style={BACKGROUND}
      className="relative h-[140px] overflow-hidden rounded-2xl bg-[#9C6B48] bg-cover bg-[position:70%_50%] px-6 py-[13px]"
    >
      <span className="inline-block rounded-lg bg-promo px-1.5 py-1 text-sm font-semibold text-white">
        Promo
      </span>
      <h2 className="mt-2 text-[32px] font-semibold leading-[1.25] text-white">
        <span className="promo-highlight">Buy one get</span>
        <br />
        <span className="promo-highlight">one FREE</span>
      </h2>
    </article>
  );
}
