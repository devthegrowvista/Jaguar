import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS, SERVICES } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        {/* Brand & Reserved Logo Space */}
        <div>
          <Link to="/" className="logo logo-light" aria-label="Jaguar Services home">
            {/* USER LOGO IMAGE PLACEHOLDER */}
            <div className="logo-image-placeholder">
              <img src="/assets/jaguar-logo.png" alt="Jaguar Services Logo" />
            </div>
          
          </Link>
          <p style={{ marginTop: '1rem' }}>
            Professional cleaning and restoration for homes and businesses across Metro Atlanta.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3>Explore</h3>
          {NAV_LINKS.filter((l) => l.name !== 'Home').map((link) => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Services Links */}
        <div>
          <h3>Services</h3>
          {SERVICES.map((service) => (
            <Link key={service.slug} to={`/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h3>Contact</h3>
          <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <p>{COMPANY.address}</p>
          <p style={{ color: 'var(--primary-bright)', fontSize: '0.82rem' }}>
            {COMPANY.area}
          </p>
        </div>
      </div>

<div className="site-container footer-bottom">
  <span>{COMPANY.copyright}</span>

  <span>
    Developed by{' '}
    <a
      href="https://thegrowvista.com/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      The Grow Vista
    </a>
  </span>
</div>


    </footer>
  );
};