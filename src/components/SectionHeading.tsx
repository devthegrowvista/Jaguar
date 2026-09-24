import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  copy,
}) => {
  return (
    <div className="section-heading text-left">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
};
