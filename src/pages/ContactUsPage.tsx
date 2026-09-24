import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { COMPANY, SERVICES } from '../data/siteData';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { sendLeadEmail } from '../utils/sendEmail';

export const ContactUsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: preselectedService,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'sending' | 'sent' | 'failed'>('sending');
  const [botcheck, setBotcheck] = useState(''); // honeypot (spam protection)
  const [submissionLinks, setSubmissionLinks] = useState<{
    whatsapp: string;
    email: string;
  }>({ whatsapp: '', email: '' });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted) return;

    // Bots fill hidden fields - silently ignore them
    if (botcheck) return;

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const serviceName = formData.service || 'General Inquiry';

    // WhatsApp Formatted Text
    const whatsappText = `*New Estimate Request - ${COMPANY.name}*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer:* ${fullName}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
🛠️ *Service:* ${serviceName}
📝 *Details:*
${formData.message}
━━━━━━━━━━━━━━━━━━━━
Sent from ${COMPANY.name} Web Portal`;

    const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    // Email link - only used as a manual fallback if automatic sending fails
    const emailSubject = `Estimate Request: ${serviceName} - ${fullName}`;
    const emailBody = `Hello ${COMPANY.name} Team,

I would like to request an estimate for the following service:

Customer Name: ${fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Service Requested: ${serviceName}

Project Details:
${formData.message}

Thank you,
${fullName}`;

    const mailtoUrl = `mailto:${COMPANY.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setSubmissionLinks({ whatsapp: whatsappUrl, email: mailtoUrl });
    setEmailStatus('sending');
    setSubmitted(true);

    // 1) Start sending the email automatically in the background
    const emailRequest = sendLeadEmail({
      companyName: COMPANY.name,
      fullName,
      email: formData.email,
      phone: formData.phone,
      service: serviceName,
      message: formData.message,
      botcheck,
    });

    // 2) Open WhatsApp exactly like before (must happen right on the click)
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Popup blocked - the "Open in WhatsApp" button below still works
    }

    // 3) Show the email result
    try {
      await emailRequest;
      setEmailStatus('sent');
    } catch (error) {
      console.error('Email sending failed:', error);
      setEmailStatus('failed');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get a free estimate"
        title="Contact Us"
        copy="We’re ready to help you restore your space."
        image="/assets/hero-BVWdbkoS.png"
      />

      <section className="section">
        <div className="site-container contact-grid">
          {/* Left Column: Contact details */}
          <div>
            <SectionHeading
              eyebrow="Let’s talk"
              title="Tell us how we can help."
              copy="Whether you need emergency restoration, deep carpet cleaning, or a quote for junk removal, our team is standing by."
            />
            <div className="contact-list">
              <a href={COMPANY.phoneHref}>
                <i>
                  <Phone size={20} />
                </i>
                <span>
                  <b>Phone</b>
                  {COMPANY.phone}
                </span>
              </a>
              <a href={`mailto:${COMPANY.email}`}>
                <i>
                  <Mail size={20} />
                </i>
                <span>
                  <b>Email</b>
                  {COMPANY.email}
                </span>
              </a>
              <div>
                <i>
                  <MapPin size={20} />
                </i>
                <span>
                  <b>Address</b>
                  {COMPANY.address}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact Box */}
            <div
              style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={18} color="#25D366" />
                Need an Instant Response?
              </h4>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.88rem', margin: '0 0 1rem' }}>
                Chat directly with our team on WhatsApp for same-day estimates and scheduling.
              </p>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp compact"
                style={{ width: '100%' }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp ({COMPANY.phone})
              </a>
            </div>
          </div>

          {/* Right Column: Form or Confirmation */}
          <div>
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">
                  <CheckCircle2 size={36} />
                </span>
                <h2>Thank you!</h2>
                {emailStatus === 'sending' && (
                  <p>Sending your request to our team by email… WhatsApp has been opened for you.</p>
                )}
                {emailStatus === 'sent' && (
                  <p>
                    Your estimate request has been <strong>emailed to our team automatically</strong> and
                    your <strong>WhatsApp</strong> message is ready to send. We’ll get back to you shortly.
                  </p>
                )}
                {emailStatus === 'failed' && (
                  <p>
                    Your <strong>WhatsApp</strong> message is ready, but we couldn’t send the email
                    automatically. Please tap <strong>Send via Email App</strong> below, or call us directly.
                  </p>
                )}

                <div className="success-actions">
                  <a
                    href={submissionLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={17} />
                    Open in WhatsApp
                  </a>
                  {emailStatus === 'failed' && (
                    <a href={submissionLinks.email} className="btn btn-primary">
                      <Send size={17} />
                      Send via Email App
                    </a>
                  )}
                  <a
                    href={COMPANY.phoneHref}
                    className="btn btn-dark"
                  >
                    <Phone size={17} />
                    Call {COMPANY.phone}
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmailStatus('sending');
                  }}
                  className="btn btn-outline compact"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row">
                  <label>
                    First name
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Last name
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="e.g. Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <label>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Phone number
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="(770) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Service needed
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Emergency Water / Storm Restoration">
                      Emergency Water / Storm Restoration
                    </option>
                    <option value="Other / Multiple Services">
                      Other / Multiple Services
                    </option>
                  </select>
                </label>

                <label>
                  How can we help?
                  <textarea
                    required
                    rows={5}
                    name="message"
                    placeholder="Tell us about the property, rooms, or urgency of your request..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>

                {/* Honeypot: hidden from real users, bots tend to fill it */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Request My Estimate <ArrowRight size={17} />
                </button>

                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--muted-foreground)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '0.25rem',
                  }}
                >
                  <span>✓ Automatically connects via WhatsApp &amp; Email</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
