import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check } from 'lucide-react';
import { COMPANY, FAQS } from '../data/siteData';
import { SectionHeading } from '../components/SectionHeading';
import { ServicesGrid } from '../components/ServicesGrid';
import { ValuePillars } from '../components/ValuePillars';
import { ReviewList } from '../components/ReviewList';
import { CtaBand } from '../components/CtaBand';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Home Hero Section */}
      <section
        className="home-hero"
        style={{ '--hero-image': 'url(/assets/hero-BVWdbkoS.png)' } as React.CSSProperties}
      >
        <div className="hero-shade" />
        <div className="site-container home-hero-content">
          <span className="eyebrow light">{COMPANY.area}</span>
          <h1>
            Professional<br />
            Carpet Cleaning<br />
            <em>&amp; Water Damage<br />Solutions</em>
          </h1>
          <p>
            Premium deep cleaning and responsive restoration for homes and businesses across
            Metro Atlanta—delivered with care, clarity, and respect for your space.
          </p>
          <div className="hero-actions">
            <Link to="/contact-us" className="btn btn-primary">
              Get Free Estimate <ArrowRight size={17} />
            </Link>
            <a href={COMPANY.phoneHref} className="btn btn-outline">
              <Phone size={17} />
              {COMPANY.phone}
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <Check size={16} /> Locally owned
            </span>
            <span>
              <Check size={16} /> Eco-friendly care
            </span>
            <span>
              <Check size={16} /> Professional equipment
            </span>
          </div>
        </div>
      </section>

      {/* Feature Story Section */}
      <section className="section">
        <div className="site-container split-feature">
          <div>
            <SectionHeading
              eyebrow="Why choose Jaguar Services INC"
              title="Hampton’s trusted carpet care specialists."
            />
            <p className="body-copy">
              At Jaguar Services INC, we believe a clean home is a healthy home. We remove
              deep-seated dirt, allergens, and stubborn stains using professional-grade equipment
              and a commitment to excellence.
            </p>
            <p className="body-copy">
              Based in Hampton, Georgia, we take pride in our local roots and treat every home
              with the care and respect it deserves.
            </p>
            <Link to="/about-us" className="text-link">
              Discover our story <ArrowRight size={16} />
            </Link>
          </div>
          <div className="feature-image">
            <img
              src="/assets/interior-DXK03ihY.jpg"
              alt="A professionally cleaned modern living room"
              loading="lazy"
            />
            <span>
              Reliable &amp; local.<br />
              Premium quality.
            </span>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="section section-muted">
        <div className="site-container">
          <SectionHeading
            eyebrow="What we do"
            title="Professional cleaning solutions."
            copy="Specialized equipment, skilled care, and a commitment to a healthier environment."
          />
          <ServicesGrid limit={6} />
          <div className="section-link">
            <Link to="/services" className="btn btn-dark">
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Pillars Section */}
      <section className="section dark-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why Hampton chooses Jaguar"
            title="Service without shortcuts."
          />
          <ValuePillars />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="What our clients say"
            title="Work that earns trust."
          />
          <ReviewList limit={3} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="site-container faq-grid">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Good to know before we arrive."
          />
          <div className="faq-list">
            {FAQS.map((faq, idx) => (
              <details key={faq.question} open={idx === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <CtaBand />
    </>
  );
};
