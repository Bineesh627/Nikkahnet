import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export function Footer({ onNavigate, t, lang }) {
  return (
    <footer id="contact" className="footer">
      <div className="app-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src="/assets/images/logo.jpeg" 
                alt="Nikah.Net Logo" 
                style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1.5px solid var(--gold-400)' }} 
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Nikah<span style={{ color: '#10B981' }}>.Net</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#FDE68A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Find Your Soulmate
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {t.footer_tagline} Connecting genuine Muslim families across Malappuram, Kozhikode, and worldwide Malayali communities.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/nikkah.nett?igsh=MWpibTZkYWZqOWNmNg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-icon"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#FDE68A' }}
                title="Follow on Instagram (@nikkah.nett)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a 
                href="https://www.facebook.com/share/1BfzDwduDc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-icon"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#FDE68A' }}
                title="Follow on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a 
                href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Nikah.Net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-icon"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)', color: '#10B981' }}
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.04em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                  {t.nav_home}
                </a>
              </li>
              <li>
                <a href="#profiles" onClick={(e) => { e.preventDefault(); onNavigate('profiles'); }}>
                  {t.nav_profiles}
                </a>
              </li>
              <li>
                <a href="#post-ad" onClick={(e) => { e.preventDefault(); onNavigate('post-ad'); }}>
                  {t.nav_post_ad}
                </a>
              </li>
              <li>
                <a href="#couples" onClick={(e) => { e.preventDefault(); onNavigate('couples'); }}>
                  {t.nav_couples}
                </a>
              </li>
              <li>
                <a href="#service-areas" onClick={(e) => { e.preventDefault(); onNavigate('service-areas'); }}>
                  {t.nav_service_areas}
                </a>
              </li>
              <li>
                <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>
                  {t.nav_privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.04em' }}>
              Official Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} className="text-gold" />
                <span>+91 80759 13098</span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <MessageCircle size={16} className="text-emerald" />
                <a href="https://wa.me/918075913098" target="_blank" rel="noopener noreferrer" style={{ color: '#10B981', fontWeight: 600 }}>
                  WhatsApp: 80759 13098
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} className="text-gold" style={{ marginTop: '0.2rem' }} />
                <span>Malappuram & Kozhikode Districts, Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          <strong>Matrimonial Advertising Disclaimer:</strong> {t.footer_disclaimer}
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>{t.footer_rights}</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>AI Image Terms</a>
            <span>•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
