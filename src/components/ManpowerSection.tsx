import React from 'react';
import { Users, ShieldCheck, CheckCircle2, ArrowRight, HeartHandshake } from 'lucide-react';
import { overseasJobSectors, servicesList, JobCategory } from '../data/agencyData';

interface ManpowerSectionProps {
  onSelectCategory: (category: JobCategory) => void;
  onOpenInquiry: (serviceType: string, note: string) => void;
  recruitingLicense: string;
}

export const ManpowerSection: React.FC<ManpowerSectionProps> = ({
  onSelectCategory,
  onOpenInquiry,
  recruitingLicense,
}) => {
  const manpowerService = servicesList.find(s => s.id === 'manpower-employment')!;

  return (
    <section id="overseas-manpower" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
              <span>Service 03</span>
              <span aria-hidden="true">·</span>
              <span>Overseas Employment & Manpower</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Manpower & Safe Overseas Employment Services
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We connect job seekers with verified foreign employers across the Middle East, Southeast Asia, and Europe. Operating in full compliance with government regulations, we ensure every worker receives a legitimate contract, clear wage terms, and BMET emigration clearance.
            </p>
          </div>

          <div className="self-start md:self-auto flex flex-col items-start md:items-end gap-1">
            <span className="text-xs text-slate-500 font-medium">Government License:</span>
            <span className="inline-block px-3 py-1 bg-sky-50 text-sky-800 text-xs font-bold rounded border border-sky-200">
              {recruitingLicense}
            </span>
          </div>
        </div>

        {/* Anti-Fraud / Ethical Protection Banner */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Our Honest Commitment to Overseas Job Seekers</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-3xl">
                We never engage in unauthorized sub-agents or false job promises. Every demand letter, visa, and employment contract is verified for official government attestation so you and your family have absolute security.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('Overseas Employment', 'Direct inquiry from job seeker regarding current job openings.')}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Register Your Profile Free
          </button>
        </div>

        {/* What You Receive from Badhan Air */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-700" />
              <span>What Overseas Workers & Recruiters Receive</span>
            </h3>

            <div className="space-y-3.5">
              {manpowerService.whatYouReceive.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-sky-700" />
                <span>Pre-Departure Orientation & Protection</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Before boarding your flight, we provide a complete briefing to ensure you are thoroughly prepared for life and work abroad:
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">1. Labor Laws & Rights Briefing</strong>
                  <span>Understanding your contract hours, overtime, holidays, and embassy contact numbers abroad.</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">2. Airport & Immigration Assistance</strong>
                  <span>How to pass immigration, luggage safety, and meeting employer representatives at destination airports.</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">3. Family Communication & Remittance</strong>
                  <span>Guidance on legal banking channels to send your hard-earned money safely home to your family.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* In-Demand Job Sectors Bento Grid */}
        <div className="mb-16">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-bold text-slate-900">Current In-Demand Overseas Job Categories</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select your trade to check requirements or apply for interviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {overseasJobSectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded">
                      {sector.demandStatus}
                    </span>
                    <span className="text-xs text-slate-500">{sector.experienceLevel}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900">{sector.title}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{sector.description}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Destinations & Requirements
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {sector.countries.map((c, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">
                      Criteria: {sector.requirements.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-sky-800">Direct Employer Interviews</span>
                  <button
                    onClick={() => onSelectCategory(sector)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors cursor-pointer"
                  >
                    <span>Apply for this Trade</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step "How to Start" Process */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Your Safe Path from Application to Flight</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear, step-by-step procedure ensuring zero fraud and government authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manpowerService.stepByStep.map((step) => (
              <div key={step.step} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-sky-700 text-white font-bold text-sm flex items-center justify-center mb-3">
                  0{step.step}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
