import { useState } from "react";
import { CheckCircle2, Copy, Building2, Heart } from "lucide-react";
import { cn } from "../lib/utils";

const PRESET_AMOUNTS = [3, 5, 10, 15, 20, 30, 50, 100];

export default function Donate() {
  const [amount, setAmount] = useState<number | null>(20);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  const [giftAid, setGiftAid] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const finalAmount = isCustom ? parseFloat(customAmount) || 0 : (amount ?? 0);
  const giftAidBonus = giftAid ? finalAmount * 0.25 : 0;

  function copyToClipboard(text: string, key: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary-900 py-16 text-white text-center">
        <Heart className="w-10 h-10 text-amber-400 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">Please Donate Generously</h1>
        <p className="text-primary-100 max-w-xl mx-auto text-sm px-4">
          Your donations support Ellesmere Port Masjid and Islamic Centre with running costs, ongoing projects and future projects.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Donation Amount Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="px-8 pt-8 pb-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-6 text-center">Donation Amount</h2>

            {/* Preset amount grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {PRESET_AMOUNTS.map(val => (
                <button
                  key={val}
                  onClick={() => { setAmount(val); setIsCustom(false); setCustomAmount(""); }}
                  className={cn(
                    "py-5 rounded-2xl border-2 text-xl font-bold transition-all duration-150",
                    !isCustom && amount === val
                      ? "border-primary-700 bg-primary-50 text-primary-900 shadow-md scale-[1.03]"
                      : "border-slate-200 text-slate-700 hover:border-primary-300 hover:bg-slate-50"
                  )}
                >
                  £{val}
                </button>
              ))}
              <button
                onClick={() => { setIsCustom(true); setAmount(null); }}
                className={cn(
                  "py-5 rounded-2xl border-2 text-base font-bold transition-all duration-150",
                  isCustom
                    ? "border-primary-700 bg-primary-50 text-primary-900 shadow-md scale-[1.03]"
                    : "border-slate-200 text-slate-600 hover:border-primary-300 hover:bg-slate-50"
                )}
              >
                Custom
              </button>
            </div>

            {/* Custom amount input */}
            {isCustom && (
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-lg font-bold">£</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-primary-400 bg-primary-50 text-primary-900 font-mono text-lg outline-none focus:border-primary-600 transition"
                />
              </div>
            )}

            {/* Gift Aid */}
            <label className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl cursor-pointer hover:bg-emerald-100 transition mb-4">
              <input
                type="checkbox"
                checked={giftAid}
                onChange={e => setGiftAid(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-emerald-600 shrink-0"
              />
              <div>
                <span className="text-sm font-bold text-emerald-800 block">Add Gift Aid</span>
                <span className="text-xs text-emerald-700">
                  I am a UK taxpayer. The masjid can claim 25% Gift Aid on my donation at no extra cost to me.
                  {giftAid && finalAmount > 0 && (
                    <span className="font-bold"> (+£{giftAidBonus.toFixed(2)} from government)</span>
                  )}
                </span>
              </div>
            </label>

            {/* Summary */}
            {finalAmount > 0 && (
              <div className="bg-slate-50 rounded-2xl p-4 mb-4 text-center">
                <span className="text-3xl font-bold text-primary-900">£{finalAmount.toFixed(2)}</span>
                {giftAid && (
                  <div className="text-xs text-emerald-700 font-bold mt-1">
                    + £{giftAidBonus.toFixed(2)} Gift Aid = £{(finalAmount + giftAidBonus).toFixed(2)} total benefit
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Notice */}
          <div className="px-8 pb-8">
            <p className="text-[11px] text-slate-500 leading-relaxed text-center">
              <span className="font-bold text-slate-700">Please Note:</span> There is a 1.69% transaction charge for all payments made. However, as a registered charity, we are able to claim 25% Gift Aid on all eligible donations which will cover the charges.
            </p>
          </div>
        </div>

        {/* Bank Transfer Details */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="px-8 py-6">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5 text-primary-800" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-900">Bank Transfer</h2>
            </div>

            <p className="text-sm text-slate-600 mb-5">
              You can donate directly via bank transfer using the details below. Please use your name as the reference.
            </p>

            <div className="space-y-3">
              {[
                { label: "Account Name", value: "Ellesmere Port Masjid & Islamic Centre", key: "name" },
                { label: "Sort Code", value: "40-20-20", key: "sort" },
                { label: "Account Number", value: "21463330", key: "acc" },
                { label: "Bank", value: "HSBC", key: "bank" },
              ].map(({ label, value, key }) => (
                <div key={key} className="flex items-center justify-between bg-slate-50 rounded-2xl px-5 py-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{label}</div>
                    <div className="font-mono font-bold text-slate-900 text-sm">{value}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(value, key)}
                    className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-700 hover:text-primary-900 transition"
                  >
                    {copied === key ? (
                      <><CheckCircle2 className="w-4 h-4 text-emerald-600" /><span className="text-emerald-600">Copied</span></>
                    ) : (
                      <><Copy className="w-4 h-4" />Copy</>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Donate */}
        <div className="bg-primary-900 rounded-3xl text-white overflow-hidden">
          <div className="px-8 py-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">Why Donate?</h3>
            <ul className="space-y-4">
              {[
                "Maintain the daily operations, utilities, and upkeep of the masjid.",
                "Fund youth education programmes, Quran classes, and weekly Islamic seminars.",
                "Support our community food bank and welfare initiatives for families in need.",
                "Help with ongoing building projects and future expansion of the centre.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span>Registered Charity No. <span className="font-bold text-white">1195799</span></span>
              <span>Contact: <span className="text-amber-400">masjidellesmereport@gmail.com</span></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
