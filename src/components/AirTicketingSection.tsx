import React, { useState } from 'react';
import { Plane, Luggage, Clock, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { popularRoutes, servicesList, PopularRoute } from '../data/agencyData';

interface AirTicketingSectionProps {
  onBookRoute: (route: PopularRoute) => void;
  onOpenInquiry: (serviceType: string, note: string) => void;
}

export const AirTicketingSection: React.FC<AirTicketingSectionProps> = ({ onBookRoute, onOpenInquiry }) => {
  const [filterType, setFilterType] = useState<'All' | 'International' | 'Domestic'>('All');
  
  const ticketService = servicesList.find(s => s.id === 'air-ticket-booking')!;

  const filteredRoutes = popularRoutes.filter(route => {
    if (filterType === 'All') return true;
    return route.flightType === filterType;
  });

  return (
    <section id="air-tickets" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
              <span>Service 01</span>
              <span aria-hidden="true">·</span>
              <span>Airline Reservations & Ticketing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Domestic & International Air Ticket Booking
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We secure direct airline reservations with official PNR verification for workers, tourists, students, and families. Enjoy competitive group fares and full after-ticketing re-routing support.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Air Ticket Booking', 'Customer requested general flight ticketing assistance.')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>Request Custom Flight Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* What Client Receives & Key Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Plane className="w-5 h-5 text-sky-700" />
              <span>What You Receive with Every Flight Ticket</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ticketService.whatYouReceive.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Luggage className="w-4 h-4 text-sky-700" />
                <span>Standard baggage advice: 20kg to 46kg depending on route & carrier</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-700" />
                <span>Urgent ticket delivery in as fast as 15 minutes</span>
              </div>
            </div>
          </div>

          {/* Quick Airline Partners Box */}
          <div className="bg-sky-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-sky-300 tracking-wider uppercase block mb-1">
                Authorized Airlines
              </span>
              <h4 className="text-xl font-bold mb-3">All Leading Airlines</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Direct GDS booking on Biman Bangladesh, Saudia, Emirates, Qatar Airways, flydubai, Air Arabia, Kuwait Airways, Malaysia Airlines, and domestic airlines (US-Bangla, Novoair, Air Astra).
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-sky-800">
                  <span className="text-slate-300">Overseas Worker Fares</span>
                  <span className="font-semibold text-emerald-400">Special Discount Rates</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-sky-800">
                  <span className="text-slate-300">Student Flights</span>
                  <span className="font-semibold text-sky-200">Extra Baggage Entitlement</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-300">Date Change & Reissue</span>
                  <span className="font-semibold text-sky-200">24/7 Dedicated Support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-800">
              <p className="text-xs text-sky-200">
                Need group seats for 10+ migrant workers or pilgrims? We manage corporate and group blocks.
              </p>
            </div>
          </div>

        </div>

        {/* Popular Flight Routes Grid with Interactive Segmented Controls */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Popular Routes & Indicative Fares</h3>
              <p className="text-xs sm:text-sm text-slate-500">Live booking quotes available via direct airline connection</p>
            </div>

            {/* Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
              {(['All', 'International', 'Domestic'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    filterType === type
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type} Routes
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-500">{route.flightType} · {route.popularFor}</span>
                    <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">Verified PNR</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 my-2">
                    <div className="font-bold text-base text-slate-900">{route.from}</div>
                    <div className="flex-1 flex items-center justify-center px-2">
                      <div className="w-full h-px bg-slate-300 relative flex items-center justify-center">
                        <Plane className="w-3.5 h-3.5 text-sky-600 bg-white px-0.5 transform rotate-90" />
                      </div>
                    </div>
                    <div className="font-bold text-base text-slate-900">{route.to}</div>
                  </div>

                  <div className="text-xs text-slate-600 mt-2">
                    Airlines: {route.airlines.join(', ')}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Starting From</span>
                    <span className="text-sm font-bold text-sky-900 tabular-nums">{route.estimatedStartingFare}</span>
                  </div>

                  <button
                    onClick={() => onBookRoute(route)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors cursor-pointer"
                  >
                    Inquire Fare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step "How to Start" Process */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">How to Book Your Air Ticket in 3 Simple Steps</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              No complicated booking systems. Direct, fast, and secure support for every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ticketService.stepByStep.map((step) => (
              <div key={step.step} className="relative bg-white border border-slate-200/90 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-bold text-sm flex items-center justify-center mb-3">
                  0{step.step}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-sky-700" />
              <span>Required: Clear passport bio-page copy (minimum 6 months validity)</span>
            </div>
            <a
              href="#contact-agency"
              className="font-semibold text-sky-700 hover:text-sky-800 underline"
            >
              Have a question about baggage or flight dates? Speak with our travel desk →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
