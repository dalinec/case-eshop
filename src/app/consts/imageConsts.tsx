export const imageConsts = [
  { src: "/users/user-1.png" },
  { src: "/users/user-2.png" },
  { src: "/users/user-3.png" },
  { src: "/users/user-4.jpg" },
  { src: "/users/user-5.jpg" },
];

export const reviewsConsts = [
  {
    name: "John",
    review: (
      <p>
        &quot; The case feels durable and I even got a compliment on the design.
        Had the case for two and a half months now and{" "}
        <span className="bg-slate-800 p-0.5 text-white">
          the image is super clear
        </span>
        . On the case I had before, the image started fading into a yellowish
        color after a couple of weeks. Love it. &quot;
      </p>
    ),
    stars: 5,
    img: "/users/user-1.png",
  },
  {
    name: "Caitlyn",
    review: (
      <p>
        &quot; I usually keep my phone together with my keys in my pocket and
        that led to some pretty heavy scratchmarks on all of my last phone
        cases. This one, besides a barely noticable scratch on the corner{" "}
        <span className="bg-slate-800 p-0.5 text-white">
          looks brand new after about half year of using this case
        </span>
        . I dig it! &quot;
      </p>
    ),
    stars: 5,
    img: "/users/user-2.png",
  },
];

export const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

export const POSSIBLE_ANIMATION_DELAYS = [
  "0s",
  "0.1s",
  "0.2s",
  "0.3s",
  "0.4s",
  "0.5s",
];

export const homePageListConsts = [
  "High-quality silicone material",
  "Scratch- and fingerprint resistant coating",
  "Wireless charging compatible",
  "5 year print warranty",
];

export const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
];
