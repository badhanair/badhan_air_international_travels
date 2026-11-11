import React, { useState } from 'react';
import { FileCheck, ShieldCheck, Clock, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { visaDestinations, servicesList, VisaDestination } from '../data/agencyData';

interface VisaProcessingSectionProps {
  onSelectCountry: (destination: VisaDestination) => void;
  onOpenInquiry: (serviceType: string, note: string) => void;
}

export const VisaProcessingSection: React.FC<VisaProcessingSectionProps> = ({ onSelectCountry, onOpenInquiry }) => {
  const [selectedDestination, setSelectedDestination] = useState<VisaDestination>(visaDestinations[0]);
  const visaService = servicesList.find(s => s.id === 'visa-processing')!;

  return (
    <section id="visa-processing" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
              <span>Service 02</span>
              <span aria-hidden="true">·</span>
              <span>Visa Consultation & Embassy Submission</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fast, Accurate Visa Processing Services
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From Middle East employment and Umrah visas to European student visas and holiday tourist visas, our experienced consultants guide you through checklists, biometrics, and embassy submissions with precision.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Visa Processing', 'Inquiry regarding visa application support.')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-700 bg-white hover:bg-sky-50 border border-slate-300 rounded-lg shadow-2xs transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>Ask Visa Consultant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* What Client Receives & Document Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: What You Receive */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">What You Receive from Badhan Air</h3>
            </div>

            <div className="space-y-3">
              {visaService.whatYouReceive.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>We check all documents prior to submission to minimize visa rejection risks.</span>
            </div>
          </div>

          {/* Card 2: Essential Documents Needed */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">General Documents to Prepare</h3>
            </div>

            <ul className="space-y-2.5">
              {visaService.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500">
              <span>* Country-specific checklists (e.g. Gamca medical for GCC or bank balance for Schengen) provided on request.</span>
            </div>
          </div>

        </div>

        {/* Popular Visa Destinations Interactive Browser */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-16 shadow-xs">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">Select a Country to View Visa Details</h3>
            <p className="text-xs sm:text-sm text-slate-500">Clear processing windows and category support</p>
          </div>

          {/* Country selector buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {visaDestinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedDestination.id === dest.id
                    ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {dest.country}
              </button>
            ))}
          </div>

          {/* Active country detail card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block mb-0.5">
                  {selectedDestination.popularity}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">{selectedDestination.country}</h4>
              </div>

              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 self-start sm:self-auto">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Estimated Time: <strong className="text-slate-900">{selectedDestination.processingTime}</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Available Visa Types
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.visaTypes.map((type, i) => (
                    <span key={i} className="text-xs font-medium text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-md">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Required Documentation Summary
                </span>
                <p className="text-xs text-slate-700 bg-white border border-slate-200 p-3 rounded-md leading-relaxed">
                  {selectedDestination.requirementsSummary}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Official embassy fees applied with zero unexpected surcharges.
              </span>
              <button
                onClick={() => onSelectCountry(selectedDestination)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Start {selectedDestination.country} Visa Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* 3-Step "How to Start" Process */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">How to Start Your Visa Processing</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Step-by-step guidance from submission to passport collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaService.stepByStep.map((step) => (
              <div key={step.step} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
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
