import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, Facebook, ExternalLink } from 'lucide-react';
import { AgencyContactInfo } from '../data/agencyData';

interface FooterProps {
  contactInfo: AgencyContactInfo;
}

export const Footer: React.FC<FooterProps> = ({ contactInfo }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0b2545] via-[#091f3a] to-[#051324] text-blue-100 text-xs border-t-4 border-blue-600 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand & Overview (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <img
                  src="/assets/aistudio/logo_copy_757ea872.png"
                  alt="Badhan Air International Travels"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block leading-tight">
                  Badhan Air
                </span>
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase block mt-0.5">
                  International Travels
                </span>
              </div>
            </div>

            <p className="text-blue-200/90 leading-relaxed text-xs sm:text-sm max-w-sm">
              Your trusted partner for genuine air tickets, certified visa processing, and safe government-compliant overseas employment services.
            </p>

            <div className="pt-2 text-xs text-blue-300/80 space-y-1.5">
              <div>Govt. Recruiting License: <span className="text-white font-semibold">{contactInfo.licenseRecruiting}</span></div>
              <div>Civil Aviation Agency ID: <span className="text-white font-semibold">{contactInfo.licenseCivilAviation}</span></div>
            </div>

            {/* Quick Connect Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/8801711444699?text=Hello%20Badhan%20Air%20Travels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 01711444699</span>
              </a>
              <a
                href="https://www.facebook.com/badhanair/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <Facebook className="w-3.5 h-3.5 fill-white" />
                <span>Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-blue-800/80 pb-1.5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#contact-agency"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Domestic & Intl Air Tickets
                </a>
              </li>
              <li>
                <a
                  href="#contact-agency"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Visa Processing & Embassy Support
                </a>
              </li>
              <li>
                <a
                  href="#contact-agency"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Overseas Manpower & Recruitment
                </a>
              </li>
              <li>
                <a
                  href="#contact-agency"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Online Visa & BMET Smart Card
                </a>
              </li>
              <li>
                <a
                  href="#contact-agency"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Travel & Medical Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Agency Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-blue-800/80 pb-1.5">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/8801711444699?text=Hello%20Badhan%20Air%20Travels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: 01711444699</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/badhanair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 hover:text-sky-200 font-semibold inline-flex items-center gap-1.5"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>facebook.com/badhanair</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phonePrimary}`}
                  className="text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call: {contactInfo.phonePrimary}</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact-agency"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Online Inquiry Form
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleScrollTo('#'); }}
                  className="text-blue-200 hover:text-white transition-colors block"
                >
                  Back to Top
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-blue-800/80 pb-1.5">
              Office Details
            </h4>
            <div className="space-y-2.5 text-xs text-blue-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{contactInfo.officeAddress}, {contactInfo.cityCountry}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${contactInfo.phonePrimary}`} className="hover:text-white">{contactInfo.phonePrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${contactInfo.emailPrimary}`} className="hover:text-white break-all">{contactInfo.emailPrimary}</a>
              </div>
              <div className="pt-1 text-[11px] text-blue-300/80">
                {contactInfo.operatingHours}
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Safety Notice in Blue Card */}
        <div className="py-5 border border-blue-500/25 bg-[#13315c]/60 rounded-xl px-5 my-6 text-[11px] text-blue-200/90 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Government Compliance & Regulatory Notice:</strong>
            Badhan Air International Travels operates in strict accordance with the Emigration Ordinance, Bureau of Manpower, Employment and Training (BMET) rules, and Civil Aviation Authority regulations. Final visa issuance decisions are made exclusively by the respective sovereign embassy or consulate.
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-blue-300/80">
          <div>
            © {currentYear} {contactInfo.agencyName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>Crafted for safe global journeys</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
            </span>
            <span aria-hidden="true">·</span>
            <a href="#contact-agency" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact-agency'); }} className="hover:text-white transition-colors">
              Agency Inquiry Desk
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
