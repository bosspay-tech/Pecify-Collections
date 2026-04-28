import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-rose-950 via-rose-900 to-rose-950">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            ✨ Know our story
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
            <Link to="/" className="text-pink-300 hover:text-pink-200 transition">
              Home
            </Link>
            <span className="mx-2 text-white/40">/</span>
            About Us
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-linear-to-b from-rose-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="overflow-hidden rounded-3xl border border-rose-200 shadow-lg">
            <img
              src="/about-hero-woman.png"
              alt="Pecify Collections bridal clothing"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              🏷️ Who we are
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-rose-950 sm:text-3xl">
              WELCOME TO PECIFY COLLECTIONS
            </h2>

            <p className="mt-4 text-sm leading-7 text-rose-700">
              Welcome to <strong className="text-rose-950">Pecify Collections</strong>, a premium
              clothing brand from Surat, Gujarat, dedicated to redefining style, comfort, and
              quality for modern India.
            </p>

            <p className="mt-3 text-sm leading-7 text-rose-700">
              At Pecify Collections, fashion is more than just clothing. It is an expression of
              elegance, confidence, and personality, shaped through thoughtfully designed apparel
              and careful craftsmanship.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-500/40"
            >
              Explore Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative overflow-hidden bg-linear-to-b from-rose-950 via-rose-900 to-rose-950 text-white">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-white">
                📖 Our journey
              </span>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                OUR STORY
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Pecify Collections was born with a simple idea:{" "}
                <strong className="text-white">
                  to offer high-quality, stylish clothing that blends luxury with affordability.
                </strong>
              </p>

              <p className="mt-3 text-sm leading-7 text-white/80">
                From curated everyday wear to standout fashion pieces, our brand celebrates
                modern trends while keeping comfort at the center.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <img
                  src="/about-menswear.png"
                  alt="Menswear collection"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <img
                  src="/about-womenswear.png"
                  alt="Women collection"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-linear-to-b from-white via-rose-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              🎁 Our promise
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-rose-950 sm:text-3xl">
              WHAT WE OFFER
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: "👔", title: "Premium Quality", desc: "Premium-quality clothing for men & women" },
              { icon: "✨", title: "Trendy Designs", desc: "Trendy, timeless, and comfortable designs" },
              { icon: "🧵", title: "Superior Fabric", desc: "Superior fabric selection" },
              { icon: "✂️", title: "Perfect Tailoring", desc: "Perfect tailoring and finishing" },
              { icon: "💎", title: "Affordable Luxury", desc: "Affordable luxury apparel" },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-rose-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-xl transition group-hover:bg-pink-100">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold text-rose-950">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-rose-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="rounded-3xl border border-rose-200 bg-linear-to-br from-rose-50 to-pink-50 p-8 shadow-sm transition hover:shadow-md">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              🔭 Vision
            </span>
            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-rose-950">
              OUR VISION
            </h2>
            <p className="mt-3 text-sm leading-7 text-rose-700">
              To become a globally recognized fashion brand known for luxury, innovation, and
              premium-quality clothing.
            </p>
          </div>

          <div className="rounded-3xl border border-rose-200 bg-linear-to-br from-rose-50 to-pink-50 p-8 shadow-sm transition hover:shadow-md">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              🎯 Mission
            </span>
            <h2 className="mt-4 text-xl font-extrabold tracking-tight text-rose-950">
              OUR MISSION
            </h2>
            <p className="mt-3 text-sm leading-7 text-rose-700">
              To deliver stylish, comfortable, and affordable apparel that elevates everyday
              fashion experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="rounded-2xl border border-rose-200 bg-rose-950 px-6 py-10 text-white sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Ready to explore our collections?
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Discover premium fashion at unbeatable prices.
                </p>
              </div>

              <Link
                to="/products"
                className="rounded-xl bg-pink-500 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-400"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
