"use client";

import { useEffect } from "react";

const airbnbListingUrl = ""; // TODO: user to provide exact Airbnb listing URL

function ScrollIndicator() {
  return (
    <div className="fixed left-4 bottom-6 z-50 hidden md:flex items-center gap-3 text-xs tracking-wide text-neutral-700">
      <span className="uppercase">scroll down</span>
      <span className="h-6 w-px bg-neutral-300" />
      <svg
        className="h-4 w-4 animate-bounce"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openAirbnb = () => {
    if (airbnbListingUrl) {
      window.open(airbnbListingUrl, "_blank");
    } else {
      alert("Please provide the Airbnb listing URL to enable direct booking.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-widest uppercase text-sm">
            The Nest at York
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#ethos" className="hover:opacity-70">
              About
            </a>
            <a href="#rooms" className="hover:opacity-70">
              Rooms
            </a>
            <a href="#facilities" className="hover:opacity-70">
              Facilities
            </a>
            <a href="#gallery" className="hover:opacity-70">
              Gallery
            </a>
            <a href="#location" className="hover:opacity-70">
              Location
            </a>
          </nav>
          <button
            onClick={openAirbnb}
            className="rounded-full border border-neutral-900 px-4 py-2 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Book on Airbnb
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative h-[95vh] md:h-screen">
        <img
          src="/nest-hero.jpg"
          alt="The Nest at York hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-white/90">
            <div
              className="text-xs md:text-sm tracking-[0.5em] uppercase"
              style={{ letterSpacing: "0.5em" }}
            >
              L O O K
            </div>
            <h1 className="mt-2 text-3xl md:text-6xl font-light tracking-tight">
              Beyond Limits
            </h1>
            <p className="mt-3 md:mt-6 text-xs md:text-sm tracking-[0.35em] uppercase">
              Find True Perfection
            </p>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Ethos / About */}
      <section id="ethos" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light">
              Tastemakers of Understated Comfort
            </h2>
            <p className="text-neutral-700">
              Tucked away in the serene, leafy suburb of Highlands, Harare, The
              Nest at York is a beautiful three-bedroom apartment that
              masterfully combines modern comfort with a warm, inviting home
              feel. Whether you're traveling with family, friends, or on
              business, this space offers a relaxing retreat from the bustle of
              the city.
            </p>
            <p className="text-neutral-700">
              Step out from the open-plan living area onto a private patio
              overlooking an immaculately kept garden — perfect for morning
              coffees, alfresco dining, or unwinding in green surroundings. A
              fully equipped kitchen and free Wi‑Fi make stays easy, while a
              responsive Superhost ensures a five‑star experience.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("facilities")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-neutral-900 px-4 py-2 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors"
              >
                See Facilities
              </button>
              <button
                onClick={openAirbnb}
                className="rounded-full border border-neutral-900 px-4 py-2 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Book
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/nest-frontview.jpg"
              alt="Front view"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Rooms & Layout */}
      <section id="rooms" className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="space-y-3 opacity-0 translate-y-4 transition-all duration-700"
              data-animate
            >
              <img
                src="/nest-bedroom1.jpg"
                alt="Main bedroom"
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-lg font-medium">Main Bedroom</h3>
              <p className="text-sm text-neutral-600">
                King-size bed with en‑suite bathroom.
              </p>
            </div>
            <div
              className="space-y-3 opacity-0 translate-y-4 transition-all duration-700"
              data-animate
            >
              <img
                src="/nest-bedroom2.jpg"
                alt="Second bedroom"
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-lg font-medium">Second Bedroom</h3>
              <p className="text-sm text-neutral-600">Queen‑size bed.</p>
            </div>
            <div
              className="space-y-3 opacity-0 translate-y-4 transition-all duration-700"
              data-animate
            >
              <img
                src="/nest-bedroom3.jpg"
                alt="Third bedroom"
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-lg font-medium">Third Bedroom</h3>
              <p className="text-sm text-neutral-600">
                Two twin beds — ideal for children.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div
              className="space-y-3 opacity-0 translate-y-4 transition-all duration-700"
              data-animate
            >
              <img
                src="/nest-bathroom.jpg"
                alt="Bathroom"
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-lg font-medium">Bathrooms</h3>
              <p className="text-sm text-neutral-600">
                Two bathrooms: one en‑suite in the main bedroom plus a shared
                bathroom.
              </p>
            </div>
            <div
              className="space-y-3 opacity-0 translate-y-4 transition-all duration-700"
              data-animate
            >
              <img
                src="/nest-lounge2.jpg"
                alt="Open-plan living"
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-lg font-medium">Open‑plan Living</h3>
              <p className="text-sm text-neutral-600">
                A roomy, homey space that flows to the patio and garden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">Amenities & Services</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> 3
                Bedrooms (1 King, 1 Queen, 2 Twins)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> 2
                Bathrooms (1 en‑suite)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Fully
                Equipped Kitchen
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Free
                Wi‑Fi
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> TV /
                Entertainment
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                Washer / Laundry Facilities
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Patio
                & Outdoor Seating / Dining
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                Private Garden
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Free
                On‑site Parking
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                Check‑in (after 15:00) / Check‑out (before 10:00)
              </li>
            </ul>
            <p className="text-xs text-neutral-500">
              Note: listing indicates no carbon monoxide alarm and no smoke
              alarm.
            </p>
            <div className="pt-4">
              <button
                onClick={openAirbnb}
                className="rounded-full border border-neutral-900 px-5 py-2 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors"
              >
                Book on Airbnb
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/nest-kitchen.jpg"
              alt="Kitchen"
              className="w-full h-40 object-cover rounded"
            />
            <img
              src="/nest-kitchen2.jpeg"
              alt="Kitchen detail"
              className="w-full h-40 object-cover rounded"
            />
            <img
              src="/nest-lounge.jpg"
              alt="Lounge"
              className="w-full h-40 object-cover rounded"
            />
            <img
              src="/nest-lounge3.jpeg"
              alt="Lounge detail"
              className="w-full h-40 object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-light mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/nest-lounge4.jpg",
              "/nest-kitchen3.jpg",
              "/nest-closet.jpg",
              "/nest-shower.jpg",
              "/nest-toilet.jpg",
              "/nest-toilet2.jpg",
              "/nest-shower2.jpg",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt="Gallery image"
                className="w-full h-48 md:h-56 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Flawless check‑in",
              d: "Guests routinely award a full 5 stars for the ease of arrival.",
            },
            {
              t: "Exceptional value",
              d: "5/5 for value — a great deal for the comfort and space offered.",
            },
            {
              t: "Spotless and well maintained",
              d: "Perfect cleanliness score reflects a meticulously kept space.",
            },
            {
              t: "Responsive and caring host",
              d: "Sheilla’s 100% response rate and Superhost status inspire trust.",
            },
            {
              t: "Peaceful retreat",
              d: "Calm, private spot — ideal for family, work, or group stays.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg border p-4 bg-white opacity-0 translate-y-4 transition-all duration-700"
              data-animate
            >
              <h3 className="font-medium">{item.t}</h3>
              <p className="text-sm text-neutral-600 mt-2">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-neutral-700">
          Overall Rating: <span className="font-semibold">5.0 / 5</span> from 14
          reviews.
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">Location</h2>
            <p className="text-neutral-700 mb-6">
              Highlands, Harare — Zimbabwe. Use the embedded map for
              directions; precise street can be refined.
            </p>
            <div className="aspect-video w-full rounded overflow-hidden border">
              <iframe
                title="Highlands, Harare map"
                src="https://www.google.com/maps?q=Highlands,Harare&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Contact & Booking</h3>
            <ul className="text-sm space-y-2 text-neutral-700">
              <li>Hosted by: Sheilla (Superhost)</li>
              <li>Max guests: 6</li>
              <li>Check‑in after 15:00; Check‑out before 10:00</li>
              <li>
                Booking & inquiries: {
                  <button onClick={openAirbnb} className="underline underline-offset-4">
                    Airbnb — The Nest at York
                  </button>
                }
              </li>
            </ul>
            <div className="mt-6 p-4 border rounded text-xs text-neutral-600">
              Safety notes: No carbon monoxide alarm or smoke alarm listed in
              amenities.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600">
          <div>&copy; {new Date().getFullYear()} The Nest at York — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#ethos" className="hover:opacity-70">
              About
            </a>
            <a href="#facilities" className="hover:opacity-70">
              Facilities
            </a>
            <a href="#gallery" className="hover:opacity-70">
              Gallery
            </a>
            <a href="#location" className="hover:opacity-70">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
