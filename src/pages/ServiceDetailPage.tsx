import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { ValuePillars } from '../components/ValuePillars';
import { ReviewList } from '../components/ReviewList';
import { CtaBand } from '../components/CtaBand';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        copy={service.summary}
        image={service.image}
      />

      <section className="section">
        <div className="site-container split-feature">
          <div className="feature-image">
            <img
              src={service.image}
              alt={`${service.title} in progress`}
              loading="lazy"
            />
            <span>
              Professional care.<br />
              Proven results.
            </span>
          </div>
          <div>
            <SectionHeading
              eyebrow="Expert service"
              title={service.title}
            />
            {service.body.map((paragraph, index) => (
              <p key={index} className="body-copy">
                {paragraph}
              </p>
            ))}
            <ul className="benefit-list">
              {service.benefits.map((benefit, index) => (
                <li key={index}>
                  <Check size={18} />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              to={`/contact-us?service=${encodeURIComponent(service.title)}`}
              className="btn btn-primary"
            >
              Request an Estimate <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="site-container">
          <SectionHeading
            eyebrow="The Jaguar standard"
            title="Care you can count on."
          />
          <ValuePillars />
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Customer stories"
            title="See why Hampton trusts Jaguar."
          />
          <ReviewList limit={3} />
        </div>
      </section>

      <CtaBand />
    </>
  );
};
