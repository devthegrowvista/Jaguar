import React from 'react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ServicesGrid } from '../components/ServicesGrid';
import { CtaBand } from '../components/CtaBand';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Professional care"
        title="Services"
        copy="Technical expertise and specialized equipment to improve your environment and protect your investment."
        image="/assets/carpet-CCNUCPve.jpg"
      />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Complete property care"
            title="Our professional services."
            copy="From restoration to rejuvenation, our team is ready with a precise solution for your space."
          />
          <ServicesGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
};
