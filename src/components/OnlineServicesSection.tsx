import React from 'react';
import { Globe, CreditCard, Search, FileText, HeartPulse, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesList } from '../data/agencyData';

interface OnlineServicesSectionProps {
  onSelectOnlineService: (serviceName: string) => void;
}

export const OnlineServicesSection: React.FC<OnlineServicesSectionProps> = ({ onSelectOnlineService }) => {
  const onlineService = servicesList.find(s => s.id === 'online-travel-services')!;

  const onlineTools = [
    {
      id: 'bmet-smart-card',
      title: 'BMET Emigration Smart Card',
      icon: CreditCard,
      desc: 'Official clearance processing through the Bureau of Manpower, Employment and Training for legal departure.',
      timing: '24 - 48 Hours',
      highlights: 'Biometric verification & government QR clearance'
    },
    {
      id: 'visa-verification',
      title: 'Online Visa Validity Check',
      icon: Search,
      desc: 'Verify if your Saudi, UAE, Qatar, or Malaysia work/tourist visa is genuine directly on government portals.',
      timing: 'Same Day (Instant)',
      highlights: 'Prevents visa scams before you make any payment'
    },
    {
      id: 'passport-services',
      title: 'E-Passport Application & Renewal',
      icon: FileText,
      desc: 'Hassle-free filing for new e-passports, renewal of expired passports, and expedited delivery assistance.',
      timing: 'Assisted Appointment',
      highlights: 'Complete document audit & fee payment'
    },
    {
      id: 'travel-insurance',
      title: 'Overseas Travel & Medical Insurance',
      icon: HeartPulse,
      desc: 'Mandatory international travel insurance covering emergency medical expenses, luggage loss, and flight cancellations.',
      timing: 'Instant Issuance',
      highlights: 'Compliant with Schengen, UK, and Gulf embassy rules'
    },
    {
      id: 'hotel-airport',
      title: 'Hotel Vouchers & Meet-and-Assist',
      icon: Building2,
      desc: 'Verified hotel reservation vouchers for visa requirements and friendly airport transfer assistance upon arrival.',
      timing: 'Instant Confirmation',
      highlights: 'Flexible cancellation & verified bookings'
    },
    {
      id: 'document-attestation',
      title: 'MOFA & Embassy Attestation',
      icon: Globe,
      desc: 'Official attestation for marriage certificates, birth certificates, educational degrees, and police clearances.',
      timing: '3 - 7 Working Days',
      highlights: 'Ministry of Foreign Affairs & Notary Public stamps'
    }
  ];

  return (
    <section id="online-services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
              <span>Service 04</span>
              <span aria-hidden="true">·</span>
              <span>Digital & Migration Support</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Online Services for Overseas Work & Travel
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Skip embassy queues and complicated government websites. Our digital team helps you process official BMET clearance, verify visas online, renew passports, and issue international travel insurance from the comfort of your home.
            </p>
          </div>

          <div className="self-start md:self-auto">
            <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg font-medium inline-block">
              100% Online Processing Available
            </span>
          </div>
        </div>

        {/* 6 Digital Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {onlineTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {tool.timing}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{tool.desc}</p>

                  <div className="text-xs text-sky-800 font-medium bg-sky-50/60 p-2 rounded border border-sky-100 mb-4">
                    {tool.highlights}
                  </div>
                </div>

                <button
                  onClick={() => onSelectOnlineService(tool.title)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-sky-700 bg-slate-50 hover:bg-sky-50 hover:text-sky-800 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Request {tool.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* What Client Receives & Steps */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">How Our Online Service Delivery Works</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                You do not need to travel to our office for routine online tasks. Send photos of your documents via WhatsApp or our secure portal:
              </p>

              <div className="space-y-3">
                {onlineService.stepByStep.map((step) => (
                  <div key={step.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 block">{step.title}</strong>
                      <span className="text-xs text-slate-600">{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Notice for Overseas Workers & Students</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Always verify your visa online before paying any third party. Our visa verification team checks official government records in real time and sends you an authentic screenshot confirmation.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Saudi Absher & MOFA Visa Online Status Check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Malaysia e-Visa / VDR Approval Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>BMET Database Record Matching</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">Fast 1-hour verification desk</span>
                <button
                  onClick={() => onSelectOnlineService('Visa Verification Check')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors cursor-pointer"
                >
                  Verify Visa Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
