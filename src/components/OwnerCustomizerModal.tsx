import React, { useState, useRef } from 'react';
import { X, Check, Copy, RotateCcw, Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import { AgencyContactInfo, agencyContact } from '../data/agencyData';
import { BrandLogo } from './BrandLogo';

interface OwnerCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInfo: AgencyContactInfo;
  onSave: (updated: AgencyContactInfo) => void;
}

export const OwnerCustomizerModal: React.FC<OwnerCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentInfo,
  onSave,
}) => {
  const [formData, setFormData] = useState<AgencyContactInfo>({ ...currentInfo });
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleChange = (field: keyof AgencyContactInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          handleChange('customLogoUrl', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = () => {
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({ ...agencyContact });
  };

  const handleCopyCode = () => {
    const codeSnippet = `export const agencyContact: AgencyContactInfo = ${JSON.stringify(formData, null, 2)};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold">Owner Information Customizer</h3>
            <p className="text-xs text-slate-300">Update placeholders and preview changes live on the website</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div className="p-3 bg-sky-50 border border-sky-200 rounded-lg text-xs text-sky-900 leading-relaxed">
            <strong>Welcome, Badhan Air Owner!</strong> You can upload your official logo, update your phone numbers, email, physical office address, and government licenses below. Changes update the website immediately in your browser.
          </div>

          {/* Official Agency Logo Management */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-sky-700" />
                <span>Agency Brand Logo</span>
              </span>
              {formData.customLogoUrl && (
                <button
                  type="button"
                  onClick={() => handleChange('customLogoUrl', '')}
                  className="inline-flex items-center gap-1 text-[11px] text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Remove Custom Logo</span>
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <BrandLogo
                  logoUrl={formData.customLogoUrl}
                  size="lg"
                  editable={false}
                />
                <span className="text-[11px] text-slate-500">
                  {formData.customLogoUrl ? 'Custom Logo Active' : 'Default Insignia'}
                </span>
              </div>

              <div className="flex-1 w-full space-y-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleLogoUpload}
                  accept="image/*"
                  className="hidden"
                />
                
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-sky-700 hover:bg-sky-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Logo File (PNG, JPG, SVG)</span>
                  </button>

                  <span className="text-xs text-slate-500">or enter image link:</span>
                </div>

                <div>
                  <input
                    type="url"
                    value={formData.customLogoUrl || ''}
                    onChange={(e) => handleChange('customLogoUrl', e.target.value)}
                    placeholder="https://your-domain.com/logo.png"
                    className="w-full border border-slate-300 rounded-lg px-3 py-1.5 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Hotline</label>
              <input
                type="text"
                value={formData.phonePrimary}
                onChange={(e) => handleChange('phonePrimary', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Secondary Phone</label>
              <input
                type="text"
                value={formData.phoneSecondary}
                onChange={(e) => handleChange('phoneSecondary', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Number (digits with country code)</label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                placeholder="8801711000000"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Display Text</label>
              <input
                type="text"
                value={formData.whatsappDisplay}
                onChange={(e) => handleChange('whatsappDisplay', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Email</label>
              <input
                type="email"
                value={formData.emailPrimary}
                onChange={(e) => handleChange('emailPrimary', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Secondary / Domain Email</label>
              <input
                type="email"
                value={formData.emailSecondary}
                onChange={(e) => handleChange('emailSecondary', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Street Address</label>
              <input
                type="text"
                value={formData.officeAddress}
                onChange={(e) => handleChange('officeAddress', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">City & Country</label>
              <input
                type="text"
                value={formData.cityCountry}
                onChange={(e) => handleChange('cityCountry', e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
              Government Licenses & Registrations
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Recruiting License (BMET)</label>
                <input
                  type="text"
                  value={formData.licenseRecruiting}
                  onChange={(e) => handleChange('licenseRecruiting', e.target.value)}
                  placeholder="RL-XXXX"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Civil Aviation Travel Agency ID</label>
                <input
                  type="text"
                  value={formData.licenseCivilAviation}
                  onChange={(e) => handleChange('licenseCivilAviation', e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50 focus:bg-white text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Placeholders</span>
            </button>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-sky-700 hover:text-sky-800 border border-sky-300 bg-sky-50 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Code!' : 'Copy Code for agencyData.ts'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-5 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Apply Live to Website
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
