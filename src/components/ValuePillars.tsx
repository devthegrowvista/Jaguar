import React from 'react';
import { Clock, ShieldCheck, Leaf } from 'lucide-react';
import { TRUST_PILLARS } from '../data/siteData';

export const ValuePillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock size={28} />;
      case 'shield':
        return <ShieldCheck size={28} />;
      case 'leaf':
        return <Leaf size={28} />;
      default:
        return <ShieldCheck size={28} />;
    }
  };

  return (
    <div className="trust-grid">
      {TRUST_PILLARS.map((pillar) => (
        <div key={pillar.title}>
          <i>{getIcon(pillar.iconName)}</i>
          <h3>{pillar.title}</h3>
          <p>{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};
