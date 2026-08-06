type ArchivePhoto = {
  id: number;
  image: string;
  title: string;
  location: string;
  year: number;
};

type Props = {
  photo: ArchivePhoto;
  onClick: () => void;
};

function ArchiveCard({ photo, onClick }: Props) {
  return (
    <article
      className="archive-card"
      onClick={onClick}
    >
      <img
        src={photo.image}
        alt={photo.title}
      />

      <h3>{photo.title}</h3>

      <p>
        {photo.location} · {photo.year}
      </p>
    </article>
  );
}

export default ArchiveCard;