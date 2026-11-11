import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Phone } from 'lucide-react';
import { AgencyContactInfo } from '../data/agencyData';

interface HeroProps {
  contactInfo: AgencyContactInfo;
  onQuickInquiry?: (serviceType: string, summary: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ contactInfo }) => {
  return (
    <section className="relative bg-white text-slate-900 overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-red-100">
      {/* User Uploaded Custom Brand Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/assets/aistudio/air_ticket_copy554_6116c69b.jpg')",
        }}
      >
        {/* Soft gradient overlay to ensure perfect contrast and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/88 to-white/70 sm:to-white/55"></div>
      </div>

      {/* Top aerodynamic curve line matching the logo flight swoosh */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-[#1E3A5F]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Top Messaging */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          
          {/* Prominent Official Logo Badge */}
          <div className="mb-6 inline-block bg-white/95 backdrop-blur-xs p-3 sm:p-4 rounded-2xl border border-red-100 shadow-xs hover:shadow-md transition-shadow">
            <img
              src="/assets/aistudio/logo_copy_757ea872.png"
              alt="বাঁধন এয়ার ইন্টারন্যাশনাল ট্রাভেলস্"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>



          {/* Main Title & Slogan in Bangla - bolded like the h2 section */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-xs font-['Hind_Siliguri'] text-slate-900 leading-[1.2] text-balance">
            <span className="text-red-600">বাঁধন এয়ার</span> <span className="text-[#1E3A5F]">ইন্টারন্যাশনাল ট্রাভেলস্</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-extrabold text-red-600 mt-3 font-['Hind_Siliguri']">
              আপনার গন্তব্যের শুরু থেকে শেষ অব্দি, আমরা আছি আপনার সাথে।
            </span>
          </h1>

          {/* Description "P" in Bangla */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            <strong className="text-slate-900 font-bold">বাঁধন এয়ার ইন্টারন্যাশনাল ট্রাভেলস্</strong>-এ আমরা প্রদান করি শতভাগ আসল দেশি ও আন্তর্জাতিক বিমান টিকিট, নিশ্চিন্ত ও নির্ভুল ভিসা প্রসেসিং, সরকারি অনুমোদনপ্রাপ্ত নিরাপদ বৈদেশিক কর্মসংস্থান এবং তাৎক্ষণিক অনলাইন ট্রাভেল সেবা—সম্পূর্ণ সততা ও স্বচ্ছতার সাথে।
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
            <a
              href="#contact-agency"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md shadow-red-600/20 transition-all hover:scale-[1.02]"
            >
              <span>ফ্রি কোটেশন ও পরামর্শ নিন</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href={`tel:${contactInfo.phonePrimary}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-red-50 hover:text-red-700 border border-slate-300 hover:border-red-300 rounded-lg shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>হেল্পলাইনে কল করুন: {contactInfo.phonePrimary}</span>
            </a>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl gap-4.5">
          {/* Card 1: Airlines */}
          <div className="bg-white border border-red-100 hover:border-red-300 rounded-xl p-5.5 transition-all shadow-xs hover:shadow-md">
            <div className="flex items-center gap-2 text-red-600 mb-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0 text-red-600" />
              <span className="text-xs font-bold tracking-wide uppercase">এয়ারলাইন্স টিকিট</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">১০০% নিশ্চিত</div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">এয়ারলাইন্সের অফিসিয়াল ওয়েবসাইটে সরাসরি PNR যাচাইযোগ্য</p>
          </div>

          {/* Card 2: Turnaround */}
          <div className="bg-white border border-red-100 hover:border-red-300 rounded-xl p-5.5 transition-all shadow-xs hover:shadow-md">
            <div className="flex items-center gap-2 text-[#1E3A5F] mb-1.5">
              <Clock className="w-4 h-4 shrink-0 text-[#1E3A5F]" />
              <span className="text-xs font-bold tracking-wide uppercase">দ্রুততম সেবা</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tabular-nums">২৪ - ৪৮ ঘণ্টা</div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">জরুরি এয়ার টিকিট বুকিং ও অগ্রাধিকার ভিত্তিতে ভিসা প্রসেসিং</p>
          </div>
        </div>

      </div>
    </section>
  );
};
