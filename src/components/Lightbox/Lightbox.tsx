import "./Lightbox.css";

type ArchivePhoto = {
  id: number;
  image: string;
  title: string;
  location: string;
  year: number;
};

type Props = {
  photo: ArchivePhoto | null;
  onClose: () => void;
};

function Lightbox({ photo, onClose }: Props) {
  if (!photo) return null;

  return (
    <div
      className="lightbox"
      onClick={onClose}
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.image}
          alt={photo.title}
        />

        <div className="lightbox-info">
          <h2>{photo.title}</h2>

          <p>
            {photo.location} · {photo.year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;