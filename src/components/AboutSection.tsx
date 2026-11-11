import React, { useState } from 'react';
import { Award, ShieldCheck, HeartHandshake, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { agencyContact, clientTestimonials, frequentlyAskedQuestions, AgencyContactInfo } from '../data/agencyData';

interface AboutSectionProps {
  contactInfo: AgencyContactInfo;
  onOpenOwnerModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ contactInfo }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="about-agency" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Agency Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
              <span>About Us</span>
              <span aria-hidden="true">·</span>
              <span>Badhan Air International Travels</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Trusted Partner for Honest Overseas Journeys and Careers
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Founded with a commitment to integrity and client care, <strong>{contactInfo.agencyName}</strong> was established to provide reliable, transparent, and legally authorized air travel and overseas migration services.
            </p>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Whether you are an overseas worker seeking a verified foreign employment contract, a student traveling abroad for higher studies, a pilgrim embarking on Umrah, or a family booking holiday flights, our team delivers personalized, end-to-end guidance without hidden charges or misleading promises.
            </p>

            {/* 3 Core Agency Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Zero Hidden Costs</h3>
                <p className="text-xs text-slate-600 mt-1">Exact official embassy fees and airline fares with crystal-clear receipts.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">100% Legal Clearances</h3>
                <p className="text-xs text-slate-600 mt-1">Strict compliance with government BMET and immigration guidelines.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Passenger Care</h3>
                <p className="text-xs text-slate-600 mt-1">24/7 dedicated support from flight booking until safe airport arrival.</p>
              </div>
            </div>
          </div>

          {/* Agency Official Credentials & Non-technical Owner Guide */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg">
            <div className="pb-4 border-b border-slate-800 mb-6">
              <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase block">
                Official Agency Credentials
              </span>
              <h3 className="text-lg font-bold text-white">Government Licenses & Registrations</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-xs text-slate-400">Government Recruiting License (BMET Approved):</div>
                <div className="text-sm sm:text-base font-bold text-sky-300 mt-0.5">
                  {contactInfo.licenseRecruiting}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Permits legal deployment of overseas manpower and emigration clearance.
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-xs text-slate-400">Civil Aviation / Travel Agency Registration:</div>
                <div className="text-sm sm:text-base font-bold text-sky-300 mt-0.5">
                  {contactInfo.licenseCivilAviation}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Authorizes commercial airline ticket reservations and international issuance.
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-xs text-slate-400">Municipal Trade License:</div>
                <div className="text-sm sm:text-base font-bold text-sky-300 mt-0.5">
                  {contactInfo.licenseTrade}
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <div className="text-xs text-slate-400">IATA / Partner Booking Identity:</div>
                <div className="text-sm sm:text-base font-bold text-sky-300 mt-0.5">
                  {contactInfo.iataRegistration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Client Testimonials */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">What Travelers & Workers Say</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real experiences from clients who entrusted their overseas journeys to Badhan Air
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-sky-600 mb-3 opacity-60" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-sm text-slate-900">{item.clientName}</div>
                  <div className="text-xs text-sky-700 font-medium">{item.destination}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Service: {item.serviceUsed} · {item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plain Language FAQ Accordion */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear answers to common questions about ticketing, visas, and overseas employment.
            </p>
          </div>

          <div className="space-y-3">
            {frequentlyAskedQuestions.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-sky-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-sky-700 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Still have questions? Call our direct hotline at{' '}
            <a href={`tel:${agencyContact.phonePrimary}`} className="font-semibold text-sky-700 underline">
              {agencyContact.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
