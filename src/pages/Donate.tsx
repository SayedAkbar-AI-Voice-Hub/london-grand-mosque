import { useState } from "react";
import { Lock, Heart, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import { cn } from "../lib/utils";

export default function Donate() {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"onetime" | "monthly">("onetime");
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleProcessPayment = () => {
    if (!amount && !customAmount) return;
    setIsProcessing(true);
    // Simulate real payment delay (Note: To accept real payments you would need Stripe/PayPal keys)
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <Heart className="w-12 h-12 text-primary-800 mx-auto mb-4" />
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-4">Support Our Mosque</h1>
          <p className="text-sm font-serif italic text-slate-600 max-w-2xl mx-auto leading-relaxed">
            "Those who spend their wealth in charity, by night and by day, secretly and publicly, will find their reward with their Lord." (Quran 2:274)
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row p-2">
          
          {/* Form Side */}
          <div className="p-8 md:p-10 md:w-2/3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-6 border-b border-slate-100 pb-4">Secure Online Donation</h2>
            
            {/* Frequency */}
            <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
              <button 
                onClick={() => setFrequency("onetime")}
                className={cn(
                  "flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition",
                  frequency === "onetime" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                One-Time
              </button>
              <button 
                onClick={() => setFrequency("monthly")}
                className={cn(
                  "flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition",
                  frequency === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                )}
              >
                Monthly
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Select Amount (GBP)</label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {predefinedAmounts.map(val => (
                  <button
                    key={val}
                    onClick={() => { setAmount(val); setCustomAmount(""); }}
                    className={cn(
                      "py-3 rounded-xl border text-sm font-mono font-medium transition",
                      amount === val 
                        ? "border-primary-500 bg-primary-50 text-primary-800 shadow-sm" 
                        : "border-slate-200 text-slate-600 hover:border-primary-200 hover:bg-slate-50"
                    )}
                  >
                    £{val}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono">£</span>
                <input 
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount(null);
                  }}
                  className={cn(
                    "w-full pl-8 pr-4 py-4 rounded-xl border text-sm font-mono transition outline-none",
                    customAmount 
                      ? "border-primary-500 bg-primary-50 text-primary-900 shadow-sm" 
                      : "border-slate-200 focus:border-primary-500"
                  )}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Where should this donation go?</label>
              <select className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:border-primary-500 outline-none text-sm text-slate-700 bg-white">
                <option>General Mosque Fund (Sadaqah)</option>
                <option>Mosque Expansion Project</option>
                <option>Zakat Al-Mal (Eligible Funds)</option>
                <option>Zakat Al-Fitr</option>
                <option>Youth Programs & Education</option>
              </select>
            </div>

            {/* Fake Payment Button / Success State */}
            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Jazakallah Khair!</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Thank you for your generous donation. Your support helps us maintain the mosque and serve the community.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mx-auto flex items-center text-[10px] font-bold uppercase tracking-widest text-emerald-700 hover:text-emerald-800 transition"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Make another donation
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={handleProcessPayment}
                  disabled={isProcessing}
                  className={cn(
                    "w-full text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg flex items-center justify-center transition",
                    isProcessing ? "bg-slate-700 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800"
                  )}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Process Payment
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-4 flex items-center justify-center">
                  <Lock className="w-3 h-3 mr-1" /> Secure Processing Simulated
                </p>
              </>
            )}

          </div>

          {/* Info Side */}
          <div className="md:w-1/3 bg-slate-900 rounded-2xl text-white p-8 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-transparent"></div>
             <div className="relative z-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-6">Why Donate?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">Maintain the daily operations, utilities, and cleanliness of the house of Allah.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">Fund youth mentorship programs, classes, and weekly educational seminars.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">Support our community food bank and interfaith neighborhood outreach initiatives.</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-white/10 text-[10px] text-slate-400">
                Ellesmere Port Mosque is a registered charity in the UK (Charity Number 1234567). Contact us at donations@ellesmereportmosque.org for tax gift aid receipts.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
