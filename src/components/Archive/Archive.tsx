import { useState } from "react";

import ArchiveCard from "./ArchiveCard";
import Lightbox from "../Lightbox/Lightbox";

import { archive } from "../../data/archive";

type ArchivePhoto = {
  id: number;
  image: string;
  title: string;
  location: string;
  year: number;
};

function Archive() {
  const [selectedPhoto, setSelectedPhoto] =
    useState<ArchivePhoto | null>(null);

  return (
    <section id="archive" className="archive">
      <div className="archive-header">
        <h2>Archive</h2>

        <p>A personal archive of ordinary moments.</p>
      </div>

      <div className="archive-grid">
        {archive.map((photo) => (
          <ArchiveCard
            key={photo.id}
            photo={photo}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      <Lightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </section>
  );
}

export default Archive;