import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  copy?: string;
  image?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  copy,
  image = '/assets/hero-BVWdbkoS.png',
}) => {
  return (
    <section
      className="page-hero"
      style={{ '--hero-image': `url(${image})` } as React.CSSProperties}
    >
      <div className="hero-shade" />
      <div className="site-container page-hero-content">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        {copy && <p>{copy}</p>}
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};
