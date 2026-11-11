import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { AgencyContactInfo } from '../data/agencyData';

interface NavbarProps {
  contactInfo: AgencyContactInfo;
  onOpenOwnerModal?: () => void;
  onUpdateLogo?: (newLogoUrl: string) => void;
  onSelectServiceTab?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ contactInfo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact & Booking', href: '#contact-agency' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notice Bar in English - Clean customer-facing contact strip */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span className="text-slate-400 font-medium">Approved Air Travel & Overseas Manpower Services</span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="text-red-400 font-medium">{contactInfo.licenseRecruiting}</span>
            <span className="hidden lg:inline text-slate-600">·</span>
            <span className="hidden lg:inline text-slate-400">Office Hours: 9:00 AM – 8:00 PM</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/badhanair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <span>Facebook Page</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`https://wa.me/8801711444699?text=Hello%20Badhan%20Air%20Travels`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: 01711444699</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (1 Primary WhatsApp Action) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Logo & Wordmark in Red & Navy Theme */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus:outline-hidden"
          >
            <img
              src="/assets/aistudio/logo_copy_757ea872.png"
              alt="Badhan Air International Travels Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 block leading-tight group-hover:text-red-600 transition-colors">
                <span className="text-red-600">Badhan</span> Air
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-[#1E3A5F] tracking-wider uppercase block mt-0.5">
                International Travels
              </span>
            </div>
          </a>

          {/* Zone 2: Concise English Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-red-600 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-red-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct WhatsApp Action Button with 01711444699 */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/8801711444699?text=Hello%20Badhan%20Air%20Travels,%20I%20would%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm shadow-emerald-600/20 hover:shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-white/20" />
              <span>WhatsApp: 01711444699</span>
            </a>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 text-base font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://wa.me/8801711444699?text=Hello%20Badhan%20Air%20Travels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 01711444699</span>
              </a>
              <a
                href={`tel:${contactInfo.phonePrimary}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call: {contactInfo.phonePrimary}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
