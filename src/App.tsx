import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { agencyContact, AgencyContactInfo } from './data/agencyData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InquiryAndContactSection } from './components/InquiryAndContactSection';
import { OwnerSection } from './components/OwnerSection';
import { OwnerCustomizerModal } from './components/OwnerCustomizerModal';
import { Footer } from './components/Footer';

export default function App() {
  const [contactInfo, setContactInfo] = useState<AgencyContactInfo>(() => {
    try {
      const saved = localStorage.getItem('badhan_air_contact_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...agencyContact,
          ...parsed,
          whatsappNumber: agencyContact.whatsappNumber,
          whatsappDisplay: agencyContact.whatsappDisplay,
          phonePrimary: agencyContact.phonePrimary,
          emailPrimary: agencyContact.emailPrimary,
          ownerPhotoUrl: agencyContact.ownerPhotoUrl,
          officeAddress: agencyContact.officeAddress,
          cityCountry: agencyContact.cityCountry,
        };
      }
    } catch {
      // ignore
    }
    return agencyContact;
  });

  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Air Ticket Booking');
  const [prefilledNote, setPrefilledNote] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveContactInfo = (updated: AgencyContactInfo) => {
    setContactInfo(updated);
    try {
      localStorage.setItem('badhan_air_contact_info', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const scrollToContact = (serviceType: string, note: string) => {
    setPreselectedService(serviceType);
    setPrefilledNote(note);
    const contactElem = document.getElementById('contact-agency');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar contactInfo={contactInfo} />

      {/* Main Content: Hero & Direct Contact/Inquiry (Intermediate sections removed per user request) */}
      <main className="flex-1">
        {/* 1. Hero Section with Bangla Branding, Slogan, and Trust Strip */}
        <Hero
          contactInfo={contactInfo}
          onQuickInquiry={scrollToContact}
        />

        {/* 2. Executive Leadership & Owner Section (কবির আহমেদ ভূঁইয়া, চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক) */}
        <OwnerSection
          contactInfo={contactInfo}
        />

        {/* 3. Direct Contact & Booking Inquiry Section */}
        <InquiryAndContactSection
          contactInfo={contactInfo}
          preselectedService={preselectedService}
          prefilledNote={prefilledNote}
        />
      </main>

      {/* Footer */}
      <Footer contactInfo={contactInfo} />

      {/* Owner Customizer Modal */}
      <OwnerCustomizerModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        currentInfo={contactInfo}
        onSave={handleSaveContactInfo}
      />

      {/* Floating Action Buttons: Direct WhatsApp, Phone, and Scroll to top */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-md backdrop-blur-xs transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Call button */}
        <a
          href={`tel:${contactInfo.phonePrimary}`}
          title={`Call Badhan Air: ${contactInfo.phonePrimary}`}
          className="flex items-center gap-2 p-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-600/30 transition-transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden md:inline text-xs font-bold pr-1">কল করুন</span>
        </a>

        {/* Direct WhatsApp button */}
        <a
          href={`https://wa.me/${contactInfo.whatsappNumber}?text=Hello%20Badhan%20Air%20Travels,%20I%20would%20like%20to%20inquire%20about%20flights%20and%20visa%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Chat with Badhan Air on WhatsApp: ${contactInfo.whatsappDisplay}`}
          className="flex items-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden md:inline text-xs font-bold pr-1">হোয়াটসঅ্যাপ</span>
        </a>
      </div>
    </div>
  );
}
