import React from 'react';
import { GALLERY_IMAGES } from '../data/siteData';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { CtaBand } from '../components/CtaBand';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Gallery"
        copy="Quality results you can see."
        image="/assets/carpet-CCNUCPve.jpg"
      />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Recent projects"
            title="Care in every detail."
          />
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((item, idx) => (
              <figure key={item.src}>
                <img
                  src={item.src}
                  alt={`Jaguar Services completed project ${idx + 1}`}
                  loading="lazy"
                />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};
