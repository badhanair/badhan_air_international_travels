import React, { useRef } from 'react';
import { Phone, MessageSquare, Mail, ShieldCheck, Award, CheckCircle2, Camera } from 'lucide-react';
import { AgencyContactInfo } from '../data/agencyData';

interface OwnerSectionProps {
  contactInfo: AgencyContactInfo;
  onUpdatePhoto?: (newPhotoUrl: string) => void;
}

export const OwnerSection: React.FC<OwnerSectionProps> = ({ contactInfo, onUpdatePhoto }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const photoSrc = contactInfo.ownerPhotoUrl || '/assets/kabir_ahmed_bhuiyan.jpg';

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdatePhoto) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUpdatePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>শীর্ষ নেতৃত্ব ও ব্যবস্থাপনা (Executive Leadership)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-['Hind_Siliguri']">
            বিশ্বস্ততা ও সততার প্রতীক আমাদের নেতৃত্ব
          </h2>
          <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-normal">
            দীর্ঘদিনের অভিজ্ঞতা ও সরকারি বিধিবিধানের শতভাগ বাস্তবায়নে পরিচালিত আমাদের এজেন্সি। যেকোনো পরামর্শ বা জরুরি প্রয়োজনে সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* Executive Profile Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Column 1: Portrait Photo Area (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-900 via-[#0B2545] to-slate-900 p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              {/* Subtle ambient rings */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Photo Frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white/90 shadow-2xl bg-slate-800">
                <img
                  src={photoSrc}
                  alt="কবির আহমেদ ভূঁইয়া - চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to generated asset if custom url fails
                    (e.target as HTMLImageElement).src = '/assets/kabir_ahmed_bhuiyan.jpg';
                  }}
                />

                {/* Upload Photo Button Overlay */}
                {onUpdatePhoto && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="ছবি পরিবর্তন বা আপডেট করুন"
                    className="absolute bottom-2 right-2 p-2 bg-slate-900/80 hover:bg-red-600 text-white rounded-xl backdrop-blur-xs shadow-md transition-colors cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Verified Executive Seal */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ভেরিফাইড ও অনুমোদিত উদ্যোক্তা</span>
              </div>
            </div>

            {/* Column 2: Details & Direct Contact Options (7 cols) */}
            <div className="md:col-span-7 p-6 sm:p-10 space-y-6">
              
              <div>
                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                  চেয়ারম্যান ও প্রধান নির্বাহী
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-['Hind_Siliguri']">
                  {contactInfo.ownerName || 'কবির আহমেদ ভূঁইয়া'}
                </h3>
                <div className="text-base sm:text-lg font-bold text-[#1E3A5F] mt-1 font-['Hind_Siliguri']">
                  {contactInfo.ownerTitle || 'চেয়ারম্যান ও ব্যবস্থাপনা পরিচালক'}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  বাঁধন এয়ার ইন্টারন্যাশনাল ট্রাভেলস্
                </div>
              </div>

              {/* Message from the Chairman */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                "{contactInfo.ownerMessage || 'আমাদের মূল লক্ষ্য প্রতিটি গ্রাহকের জন্য শতভাগ সততা, নির্ভরযোগ্যতা ও বৈধ ভ্রমণ সেবা নিশ্চিত করা। যেকোনো প্রয়োজনীয় তথ্য ও সহযোগিতার জন্য সরাসরি আমার সাথে যোগাযোগ করতে পারেন।'}"
              </div>

              {/* Direct Contact Methods */}
              <div className="space-y-3 pt-1">
                {/* Mobile Call Button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="tel:+8801711444699"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm shadow-sm shadow-red-600/20 hover:shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>কল করুন: 01711-444699</span>
                  </a>

                  {/* WhatsApp Direct Chat Button */}
                  <a
                    href="https://wa.me/8801711444699?text=আসসালামু%20আলাইকুম%20কবির%20আহমেদ%20ভূঁইয়া%20স্যার,%20বাঁধন%20এয়ার%20ট্রাভেলস্%20সম্পর্কে%20জানতে%20চাই।"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-sm shadow-emerald-600/20 hover:shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/20" />
                    <span>হোয়াটসঅ্যাপ: 01711-444699</span>
                  </a>
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-2.5 pt-1 text-xs text-slate-600">
                  <Mail className="w-4 h-4 text-red-600 shrink-0" />
                  <a href={`mailto:${contactInfo.emailPrimary || 'kabirbadhan@gmail.com'}`} className="font-semibold text-slate-900 hover:text-red-600 hover:underline">
                    {contactInfo.emailPrimary || 'kabirbadhan@gmail.com'}
                  </a>
                  <span className="text-slate-400">·</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-sm">সরাসরি ইনবক্স</span>
                </div>
              </div>

              {/* Leadership Guarantees */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">সরাসরি পরিচালকের তত্ত্বাবধান</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A5F] shrink-0" />
                  <span className="font-medium">১০০% স্বচ্ছ ও আইনসম্মত সেবা</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
