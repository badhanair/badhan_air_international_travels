import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Send, RotateCcw, Facebook, ExternalLink } from 'lucide-react';
import { AgencyContactInfo } from '../data/agencyData';

interface InquiryAndContactSectionProps {
  contactInfo: AgencyContactInfo;
  preselectedService?: string;
  prefilledNote?: string;
}

export const InquiryAndContactSection: React.FC<InquiryAndContactSectionProps> = ({
  contactInfo,
  preselectedService,
  prefilledNote,
}) => {
  const [service, setService] = useState('বিমান টিকিট বুকিং (অভ্যন্তরীণ ও আন্তর্জাতিক)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (prefilledNote) {
      setMessage(prefilledNote);
    }
  }, [prefilledNote]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।';
    if (!phone.trim()) {
      errs.phone = 'সঠিক মোবাইল বা হোয়াটসঅ্যাপ নম্বর প্রদান করুন।';
    } else if (phone.trim().length < 8) {
      errs.phone = 'নম্বরটি অন্তত ৮ ডিজিটের হতে হবে।';
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'সঠিক ইমেইল ঠিকানা দিন (অথবা ফাঁকা রাখুন)।';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const refCode = `BAIT-${randomId}`;
      setSubmittedRef(refCode);
      setIsSubmitting(false);
    }, 450);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setDestination('');
    setMessage('');
    setErrors({});
  };

  const encodedWhatsAppText = encodeURIComponent(
    `আসসালামু আলাইকুম বাঁধন এয়ার ট্রাভেলস্,\nআমার নাম: ${fullName}\nমোবাইল নম্বর: ${phone}\nপ্রয়োজনীয় সেবা: ${service}\nগন্তব্য/পেশা: ${destination || 'নির্দিষ্ট নয়'}\nবিস্তারিত তথ্য: ${message || 'আমার এই সেবা প্রয়োজন, অনুগ্রহ করে বিস্তারিত জানান।'}\nরেফারেন্স কোড: ${submittedRef || 'ওয়েব ইনকোয়ারি'}`
  );

  return (
    <section id="contact-agency" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CSS selector 2: Section Header in Bangla */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-100/70 border border-red-200 px-3.5 py-1 rounded-full tracking-wide uppercase mb-3">
            <span>যোগাযোগ ও অনুসন্ধান</span>
            <span aria-hidden="true">·</span>
            <span>দ্রুততম সেবা ও নিশ্চিত পরামর্শ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-xs font-['Hind_Siliguri'] text-slate-900 leading-tight">
            <span className="text-red-600">বাঁধন এয়ার ইন্টারন্যাশনাল ট্রাভেলস্</span> - যোগাযোগ করুন
          </h2>
          <p className="mt-3.5 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            আপনার বিমান টিকিট বুকিং, ভিসা ফাইল প্রসেসিং কিংবা বিদেশে নিরাপদ চাকরির তথ্যের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন। আমাদের টিম দ্রুত আপনার সাথে যোগাযোগ করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CSS selector 4: Column 1: Contact Details & Official Facebook Page (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-red-100 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase block mb-1">
                সরাসরি যোগাযোগ
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">বাঁধন এয়ার ইন্টারন্যাশনাল ট্রাভেলস্</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                আপনার বিশ্বস্ত ভ্রমণ ও বৈদেশিক কর্মসংস্থান সহযোগী। যেকোনো পরামর্শ ও তথ্যের জন্য সরাসরি কল বা অফিস ভিজিট করুন।
              </p>
            </div>

            {/* Official Facebook & WhatsApp Connect Section */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-blue-50/90 via-slate-50 to-emerald-50/80 border border-slate-200/90 rounded-2xl space-y-3.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">সোশ্যাল ও সরাসরি যোগাযোগ</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">সক্রিয় সাপোর্ট</span>
              </div>

              {/* Facebook Page */}
              <div className="bg-white border border-blue-100 p-3.5 rounded-xl shadow-2xs hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm">
                    <Facebook className="w-4 h-4 fill-blue-600 text-blue-600" />
                    <span>আমাদের অফিশিয়াল ফেসবুক পেজ</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <p className="text-[11px] text-slate-600 mb-2.5">
                  নিয়মিত ফ্লাইট ডিসকাউন্ট, নতুন ভিসা আপডেট এবং চাকরির খবর জানতে ফেসবুক পেজে যুক্ত থাকুন:
                </p>
                <a
                  href="https://www.facebook.com/badhanair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
                >
                  <span>facebook.com/badhanair</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* WhatsApp Direct Connect */}
              <div className="bg-white border border-emerald-100 p-3.5 rounded-xl shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs sm:text-sm">
                    <MessageSquare className="w-4 h-4 fill-emerald-600/20 text-emerald-600" />
                    <span>সরাসরি হোয়াটসঅ্যাপ হটলাইন</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">24/7 লাইভ</span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2.5">
                  তাৎক্ষণিক ফ্লাইট বুকিং ও যেকোনো তথ্যের জন্য সরাসরি হোয়াটসঅ্যাপে মেসেজ দিন:
                </p>
                <a
                  href={`https://wa.me/8801711444699?text=${encodedWhatsAppText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>হোয়াটসঅ্যাপ: 01711444699</span>
                </a>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              
              {/* Phone Hotlines */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">ফোন ও হটলাইন নম্বর</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    <a href={`tel:${contactInfo.phonePrimary}`} className="hover:text-red-600 transition-colors">
                      {contactInfo.phonePrimary}
                    </a>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    অন্যান্য: <a href={`tel:${contactInfo.phoneSecondary}`} className="hover:text-red-600">{contactInfo.phoneSecondary}</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">তাৎক্ষণিক হোয়াটসঅ্যাপ চ্যাট</div>
                  <div className="text-sm sm:text-base font-bold text-emerald-700 mt-0.5">
                    <a
                      href={`https://wa.me/${contactInfo.whatsappNumber}?text=আসসালামু%20আলাইকুম%20বাঁধন%20এয়ার%20ট্রাভেলস্`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {contactInfo.whatsappDisplay}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">টিকিট রেট ও ভিসা তথ্যের জন্য সরাসরি মেসেজ দিন</div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0 border border-red-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">ইমেইল ঠিকানা</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    <a href={`mailto:${contactInfo.emailPrimary}`} className="hover:text-red-600 break-all">
                      {contactInfo.emailPrimary}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    অফিসিয়াল: {contactInfo.emailSecondary}
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">প্রধান কার্যালয়ের ঠিকানা</div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                    {contactInfo.officeAddress}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {contactInfo.cityCountry}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">অফিস সময়সূচি</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    {contactInfo.operatingHours}
                  </div>
                  <div className="text-xs text-red-700 font-medium mt-0.5">
                    ২৪/৭ জরুরি ফ্লাইট টিকিট রি-ইস্যু ও হোয়াটসঅ্যাপ সাপোর্ট
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CSS selector 3: Column 2: Booking & Inquiry Form in Bangla (7 cols) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 border border-red-100 shadow-sm">
            {submittedRef ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">আপনার আবেদনটি সফলভাবে জমা হয়েছে!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-4 leading-relaxed">
                  ধন্যবাদ, <strong>{fullName}</strong>। <strong>{service}</strong> সংক্রান্ত আপনার তথ্য আমরা পেয়েছি।
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-slate-500">ইনকোয়ারি ট্র্যাকিং আইডি:</span>
                    <span className="font-bold text-red-600 tabular-nums">{submittedRef}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-slate-500">মোবাইল নম্বর:</span>
                    <span className="font-semibold text-slate-800">{phone}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">সেবা:</span>
                    <span className="font-semibold text-slate-800">{service}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodedWhatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>হোয়াটসঅ্যাপে তথ্যটি পাঠান</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>নতুন আবেদন</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    বুকিং বা তথ্যের জন্য অনুরোধ পাঠান
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    নিচের তথ্যগুলো পূরণ করুন, আমাদের কর্মকর্তা দ্রুত আপনার সাথে যোগাযোগ করবেন।
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      প্রয়োজনীয় সেবা নির্বাচন করুন <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-600 font-medium"
                    >
                      <option value="বিমান টিকিট বুকিং (অভ্যন্তরীণ ও আন্তর্জাতিক)">বিমান টিকিট বুকিং (অভ্যন্তরীণ ও আন্তর্জাতিক)</option>
                      <option value="ভিসা প্রসেসিং ও এম্বাসি সাপোর্ট">ভিসা প্রসেসিং ও এম্বাসি সাপোর্ট (কাজের ভিসা, ট্যুরিস্ট, স্টুডেন্ট)</option>
                      <option value="বৈদেশিক কর্মসংস্থান ও ম্যানপাওয়ার">বৈদেশিক কর্মসংস্থান ও ম্যানপাওয়ার রিক্রুটমেন্ট</option>
                      <option value="অনলাইন সেবা (বিএমইটি স্মার্ট কার্ড, ভিসা চেক, পাসপোর্ট)">অনলাইন সেবা (বিএমইটি কার্ড, ভিসা যাচাই, পাসপোর্ট, ইন্স্যুরেন্স)</option>
                      <option value="সাধারণ ভ্রমণ পরামর্শ">সাধারণ ভ্রমণ ও অভিবাসন পরামর্শ</option>
                    </select>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        আপনার পূর্ণ নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="যেমন: মোঃ কবির হোসেন"
                        className={`w-full text-xs sm:text-sm border rounded-lg px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-red-600'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        মোবাইল বা হোয়াটসঅ্যাপ নম্বর <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="যেমন: +৮৮০ ১৭১১-XXXXXX"
                        className={`w-full text-xs sm:text-sm border rounded-lg px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-red-600'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        ইমেইল ঠিকানা (ঐচ্ছিক)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="যেমন: yourname@email.com"
                        className={`w-full text-xs sm:text-sm border rounded-lg px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-red-600'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        গন্তব্য দেশ বা কাজের পেশা
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="যেমন: সৌদি আরব / দুবাই / ইলেকট্রিশিয়ান"
                        className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      ভ্রমণের তারিখ, যাত্রীর সংখ্যা বা বিস্তারিত বিবরণ
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="আপনার ভ্রমণের সম্ভাব্য তারিখ, ভিসা সংক্রান্ত তথ্য বা পূর্বের কাজের অভিজ্ঞতা লিখুন..."
                      className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded-lg shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>আবেদন পাঠানো হচ্ছে...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>বুকিং ও অনুসন্ধান আবেদন জমা দিন</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>আপনার তথ্যসমূহ সম্পূর্ণ নিরাপদ ও গোপনীয় রাখা হয়।</span>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
