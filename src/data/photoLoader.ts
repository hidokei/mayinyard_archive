const lms = import.meta.glob(
  "../assets/photos/LMS/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const cats = import.meta.glob(
  "../assets/photos/cats/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const misc = import.meta.glob(
  "../assets/photos/misc/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const photos = [
  ...Object.values(lms),
  ...Object.values(cats),
  ...Object.values(misc),
];