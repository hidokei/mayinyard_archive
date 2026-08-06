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

const allPhotos = [
  ...Object.values(lms),
  ...Object.values(cats),
  ...Object.values(misc),
] as string[];

const shuffled = [...allPhotos].sort(() => Math.random() - 0.5);

export const archive = shuffled.slice(0, 6).map((image, index) => ({
  id: index + 1,
  image,
  title: "Untitled",
  location: "Kaluga",
  year: 2025,
}));