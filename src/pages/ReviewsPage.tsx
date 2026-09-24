import React from 'react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ReviewList } from '../components/ReviewList';
import { CtaBand } from '../components/CtaBand';

export const ReviewsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="44 Google reviews"
        title="Reviews"
        copy="Real experiences from homeowners who trusted Jaguar with their space."
        image="/assets/upholstery-BXSkjPQV.jpg"
      />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Customer stories"
            title="See why Hampton trusts Jaguar."
          />
          <ReviewList />
        </div>
      </section>

      <CtaBand />
    </>
  );
};
