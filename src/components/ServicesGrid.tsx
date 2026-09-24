import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesGridProps {
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ limit }) => {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="services-grid">
      {displayedServices.map((service, index) => (
        <Link
          to={`/${service.slug}`}
          key={service.slug}
          className="service-card"
        >
          <img
            src={service.image}
            alt={`${service.title} service`}
            loading="lazy"
          />
          <div className="service-card-body">
            <span>0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <b>
              Explore service <ArrowRight size={16} />
            </b>
          </div>
        </Link>
      ))}
    </div>
  );
};
