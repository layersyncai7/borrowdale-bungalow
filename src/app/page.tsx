// Updated page.tsx with Borrowdale bungalow images
// TODO: Replace hero, rooms, bathrooms, kitchen, livingroom, passage, pool, dining images

"use client";

import { useEffect } from "react";

const airbnbListingUrl = "https://www.airbnb.com/rooms/1275956809302840769?search_mode=regular_search&adults=1&check_in=2025-12-05&check_out=2025-12-10&children=0&infants=0&source_impression_id=p3_1763711799_P3o8U0l4MT1myakG&previous_page_section_name=1000"; // TODO: user to provide full Airbnb URL

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
            Borrowdale Bungalow
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#ethos" className="hover:opacity-70">About</a>
            <a href="#rooms" className="hover:opacity-70">Rooms</a>
            <a href="#facilities" className="hover:opacity-70">Facilities</a>
            <a href="#gallery" className="hover:opacity-70">Gallery</a>
            <a href="#location" className="hover:opacity-70">Location</a>
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
          src="/bangalow-hero1.jpeg"
          alt="Borrowdale Bungalow Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="text-white/90">
            <div className="text-xs md:text-sm tracking-[0.5em] uppercase" style={{ letterSpacing: "0.5em" }}>
              L U X U R Y
            </div>
            <h1 className="mt-2 text-3xl md:text-6xl font-light tracking-tight">
              A Peaceful Borrowdale Escape
            </h1>
            <p className="mt-3 md:mt-6 text-xs md:text-sm tracking-[0.35em] uppercase">
              Space • Comfort • Privacy
            </p>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Ethos */}
      <section id="ethos" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light">Luxury Meets Serenity</h2>
            <p className="text-neutral-700">
              Nestled in the prestigious Borrowdale suburb, this four‑bedroom bungalow
              offers unmatched tranquility and comfort. Perfect for families, business travelers,
              or groups seeking a peaceful retreat.
            </p>
            <p className="text-neutral-700">
              Enjoy an open‑plan living area, lush outdoor spaces, private swimming pool,
              reliable solar backup, and borehole water — ensuring uninterrupted comfort.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => document.getElementById("facilities")?.scrollIntoView({ behavior: "smooth" })}
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
              src="/bangalow-livingroom1.avif"
              alt="Living Room"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              src: "/bangalow-bedroom1.jpeg",
              title: "Master Bedroom",
              desc: "King bed • En‑suite bathroom"
            }, {
              src: "/bangalow-bedroom2.0.jpeg",
              title: "Queen Room",
              desc: "Queen bed • Spacious and bright"
            }, {
              src: "/bangalow-bedroom3.0.jpeg",
              title: "Third Bedroom",
              desc: "Queen bed • Garden‑side comfort"
            }].map((room, i) => (
              <div key={i} className="space-y-3 opacity-0 translate-y-4 transition-all duration-700" data-animate>
                <img src={room.src} alt={room.title} className="w-full h-64 object-cover rounded" />
                <h3 className="text-lg font-medium">{room.title}</h3>
                <p className="text-sm text-neutral-600">{room.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="space-y-3 opacity-0 translate-y-4 transition-all duration-700" data-animate>
              <img src="/bangalow-bathroom1.0.jpeg" alt="Bathroom" className="w-full h-64 object-cover rounded" />
              <h3 className="text-lg font-medium">Bathrooms</h3>
              <p className="text-sm text-neutral-600">4.5 bathrooms — spacious and luxurious.</p>
            </div>
            <div className="space-y-3 opacity-0 translate-y-4 transition-all duration-700" data-animate>
              <img src="/bangalow-livingroom2.jpeg" alt="Living Room" className="w-full h-64 object-cover rounded" />
              <h3 className="text-lg font-medium">Open‑plan Living</h3>
              <p className="text-sm text-neutral-600">Bright, modern space flowing to the patio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">Amenities & Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Sleeps up to 8 guests</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> 4 Bedrooms (King, Queen, Queen, Double)</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> 4.5 Modern Bathrooms</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Fully Equipped Kitchen</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Wi‑Fi + Workspace</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Private Swimming Pool</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Solar Backup Power</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Borehole Water</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Free Parking</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Strict No‑Party Policy</li>
            </ul>
            <p className="text-xs text-neutral-500">Note: Listing indicates no carbon monoxide or smoke alarm.</p>
            <div className="pt-4">
              <button onClick={openAirbnb} className="rounded-full border border-neutral-900 px-5 py-2 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors">
                Book on Airbnb
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/bangalow-kitchen1.jpeg" alt="Kitchen" className="w-full h-40 object-cover rounded" />
            <img src="/bangalow-kitchen2.jpeg" alt="Kitchen Detail" className="w-full h-40 object-cover rounded" />
            <img src="/bangalow-livingroom3.jpeg" alt="Living Room" className="w-full h-40 object-cover rounded" />
            <img src="/bangalow-livingroom4.jpeg" alt="Living Detail" className="w-full h-40 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-light mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/bangalow-pool1.jpeg",
              "/bangalow-pool2.jpeg",
              "/bangalow-dining1.jpeg",
              "/bangalow-dining2.jpeg",
              "/bangalow-passage1.jpeg",
              "/bangalow-passage2.jpeg",
              "/bangalow-passage3.jpeg",
              "/bangalow-passage4.jpeg",
            ].map((src) => (
              <img key={src} src={src} alt="Gallery image" className="w-full h-48 md:h-56 object-cover rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Peaceful & Quiet",
              d: "Guests consistently praise the calm Borrowdale neighborhood.",
            },
            {
              t: "Reliable Comfort",
              d: "Solar backup and borehole water ensure uninterrupted stays.",
            },
            {
              t: "Perfect for Groups",
              d: "4 bedrooms + 4.5 bathrooms make group travel effortless.",
            },
            {
              t: "Immaculately Maintained",
              d: "Guests love the cleanliness and thoughtful design.",
            },
            {
              t: "Outstanding Hosting",
              d: "Grace’s Superhost reputation shows in every review.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-lg border p-4 bg-white opacity-0 translate-y-4 transition-all duration-700" data-animate>
              <h3 className="font-medium">{item.t}</h3>
              <p className="text-sm text-neutral-600 mt-2">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-neutral-700">
          Overall Rating: <span className="font-semibold">5.0 / 5</span> from 22 reviews.
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-4">Location</h2>
            <p className="text-neutral-700 mb-6">
              Borrowdale, Harare — Zimbabwe. Private, peaceful neighborhood with strict no‑noise policy.
            </p>
            <div className="aspect-video w-full rounded overflow-hidden border">
              <iframe
                title="Borrowdale Harare map"
                src="https://www.google.com/maps?q=Borrowdale,Harare&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Contact & Booking</h3>
            <ul className="text-sm space-y-2 text-neutral-700">
              <li>Hosted by: Grace (Superhost)</li>
              <li>Max guests: 8</li>
              <li>Check‑in via keypad (self check‑in)</li>
              <li>Booking: <button onClick={openAirbnb} className="underline underline-offset-4">Airbnb Listing</button></li>
            </ul>
            <div className="mt-6 p-4 border rounded text-xs text-neutral-600">
              Safety notes: No carbon monoxide or smoke alarm listed.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-600">
          <div>&copy; {new Date().getFullYear()} Borrowdale Bungalow — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#ethos" className="hover:opacity-70">About</a>
            <a href="#facilities" className="hover:opacity-70">Facilities</a>
            <a href="#gallery" className="hover:opacity-70">Gallery</a>
            <a href="#location" className="hover:opacity-70">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
