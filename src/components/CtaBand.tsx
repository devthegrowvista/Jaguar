import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY } from '../data/siteData';

export const CtaBand: React.FC = () => {
  return (
    <section className="cta-band">
      <div className="site-container cta-inner">
        <div>
          <span className="eyebrow light">A cleaner, safer home starts here</span>
          <h2>Ready to restore your space?</h2>
          <p>Tell us what you need. We’ll provide clear guidance and an honest estimate.</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact-us" className="btn btn-light">
            Get Free Estimate <ArrowRight size={17} />
          </Link>
          <a href={COMPANY.phoneHref} className="cta-phone">
            <Phone size={18} />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
