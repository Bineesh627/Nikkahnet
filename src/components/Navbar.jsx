import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  PlusCircle, 
  Moon, 
  Sun, 
  Globe, 
  Bookmark, 
  Menu, 
  X,
  ShieldCheck,
  MapPin
} from 'lucide-react';

export function Navbar({ 
  lang, 
  setLang, 
  theme, 
  toggleTheme, 
  shortlistCount, 
  openShortlist,
  onNavigate,
  t 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="navbar">
      <div className="app-container navbar-inner">
        {/* Brand Logo & Tagline */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="brand-logo-container">
          <img 
            src="/assets/images/logo.jpeg" 
            alt="Nikah.Net Logo" 
            className="brand-logo-img" 
          />
          <div>
            <div className="brand-title">
              Nikah<span>.Net</span>
            </div>
            <div className="brand-sub">
              {lang === 'ml' ? 'മാട്രിമോണിയൽ പരസ്യങ്ങൾ' : 'Find Your Soulmate'}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#profiles" onClick={(e) => { e.preventDefault(); handleNavClick('profiles'); }} className="nav-link">
                {t.nav_profiles}
              </a>
            </li>
            <li>
              <a href="#post-ad" onClick={(e) => { e.preventDefault(); handleNavClick('post-ad'); }} className="nav-link">
                {t.nav_post_ad}
              </a>
            </li>
            <li>
              <a href="#couples" onClick={(e) => { e.preventDefault(); handleNavClick('couples'); }} className="nav-link">
                {t.nav_couples}
              </a>
            </li>
            <li>
              <a href="#service-areas" onClick={(e) => { e.preventDefault(); handleNavClick('service-areas'); }} className="nav-link">
                {t.nav_service_areas}
              </a>
            </li>
            <li>
              <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); handleNavClick('privacy-ethics'); }} className="nav-link">
                {t.nav_privacy}
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Language Toggle */}
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
            title="Switch Language / ഭാഷ മാറ്റുക"
            style={{ fontWeight: 600 }}
          >
            <Globe size={15} />
            <span>{lang === 'en' ? 'മലയാളം' : 'English'}</span>
          </button>

          {/* Theme Switcher */}
          <button 
            className="btn btn-outline btn-icon"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-gold" />}
          </button>

          {/* Shortlist Badge Button */}
          <button 
            className="btn btn-outline btn-sm"
            onClick={openShortlist}
            title={t.shortlist_title}
            style={{ position: 'relative' }}
          >
            <Bookmark size={16} className={shortlistCount > 0 ? "text-gold" : ""} />
            <span className="hidden-mobile">{t.shortlist_label}</span>
            {shortlistCount > 0 && (
              <span style={{
                background: 'var(--primary-700)',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.1rem 0.45rem',
                borderRadius: '999px',
                marginLeft: '0.2rem'
              }}>
                {shortlistCount}
              </span>
            )}
          </button>

          {/* Post Your Ad CTA */}
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => handleNavClick('post-ad')}
          >
            <PlusCircle size={16} />
            <span>{t.btn_post_free_ad}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="btn btn-outline btn-icon mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation if toggled */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-surface)',
          padding: '1.25rem',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <button className="btn btn-outline" onClick={() => handleNavClick('profiles')} style={{ justifyContent: 'flex-start' }}>
            {t.nav_profiles}
          </button>
          <button className="btn btn-outline" onClick={() => handleNavClick('post-ad')} style={{ justifyContent: 'flex-start' }}>
            {t.nav_post_ad}
          </button>
          <button className="btn btn-outline" onClick={() => handleNavClick('couples')} style={{ justifyContent: 'flex-start' }}>
            {t.nav_couples}
          </button>
          <button className="btn btn-outline" onClick={() => handleNavClick('service-areas')} style={{ justifyContent: 'flex-start' }}>
            {t.nav_service_areas}
          </button>
          <button className="btn btn-outline" onClick={() => handleNavClick('privacy-ethics')} style={{ justifyContent: 'flex-start' }}>
            {t.nav_privacy}
          </button>
        </div>
      )}
    </header>
  );
}
