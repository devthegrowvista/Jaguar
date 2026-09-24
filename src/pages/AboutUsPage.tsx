import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ValuePillars } from '../components/ValuePillars';
import { ReviewList } from '../components/ReviewList';
import { CtaBand } from '../components/CtaBand';

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Local roots. Professional standards."
        title="About Us"
        copy="Restoring comfort, cleanliness, and peace of mind across Hampton and Metro Atlanta."
        image="/assets/hero-BVWdbkoS.png"
      />

      <section className="section">
        <div className="site-container split-feature">
          <div className="feature-image">
            <img
              src="/assets/interior-DXK03ihY.jpg"
              alt="Clean residential interior"
              loading="lazy"
            />
            <span>
              Healthy spaces.<br />
              Happy lives.
            </span>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Care that brings spaces back to life."
            />
            <p className="body-copy">
              At Jaguar Services INC, we believe a clean environment is the foundation of a
              healthy, happy life. Based in Hampton, Georgia, we are a full-service restoration
              and cleaning company for residential and commercial spaces.
            </p>
            <p className="body-copy">
              Our mission is to provide high-quality restoration and maintenance that extends the
              life of your property. We combine technical skill with reliability, personal
              attention, and results that exceed expectations.
            </p>
            <Link to="/contact-us" className="btn btn-primary">
              Talk With Our Team <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why work with Jaguar"
            title="Built on skill and accountability."
          />
          <ValuePillars />
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Customer stories"
            title="What our clients say."
          />
          <ReviewList limit={3} />
        </div>
      </section>

      <CtaBand />
    </>
  );
};
