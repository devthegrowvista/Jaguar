import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../data/siteData';

interface HeaderProps {
  light?: boolean;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        {/* Brand Logo & Reserved Logo Image Area */}
        <Link to="/" className="logo" aria-label="Jaguar Services home">
          {/* USER LOGO IMAGE PLACEHOLDER: You can place your logo image here */}
          <div className="logo-image-placeholder">
              <img src="/assets/jaguar-logo.png" alt="Jaguar Services Logo" />
            </div>
      
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.isDropdown ? (
              <div key={link.path} className="nav-dropdown">
                <Link
                  to={link.path}
                  className={location.pathname.startsWith('/services') ? 'active' : ''}
                >
                  {link.name}
                  <ChevronDown size={13} />
                </Link>
                <div className="dropdown-menu">
                  {SERVICES.map((service) => (
                    <Link key={service.slug} to={`/${service.slug}`}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a className="header-phone" href={COMPANY.phoneHref}>
            <Phone size={16} />
            {COMPANY.phone}
          </a>
          <Link to="/contact-us" className="btn btn-primary compact">
            Get Estimate
          </Link>
          <button
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={COMPANY.phoneHref}
              className="btn btn-dark compact text-center w-full"
            >
              Call {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp compact text-center w-full"
            >
              Chat on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
