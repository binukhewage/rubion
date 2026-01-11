"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  Check,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeBudget, setActiveBudget] = useState("100k - 300k");

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const services = ["Web Development", "E-Commerce", "UI/UX Design", "Consulting"];
  const budgets = ["50-100k", "100-300k", "300k+"];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-lime-400 selection:text-black overflow-x-hidden py-50 font-sans">
      
      {/* --- Texture & Glow --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[50] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          
          {/* --- LEFT: Context & Info --- */}
          <div className="lg:col-span-2 pt-8">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-12"
             >
                <div className="inline-flex items-center gap-2 text-lime-400 font-mono text-xs uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                  Accepting Projects
                </div>
                <h1 className="text-5xl font-bold text-white tracking-tight mb-6">
                  Let's discuss <br /> your vision.
                </h1>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  We help ambitious brands build high-performance digital products. Fill out the form, and we'll be in touch within 24 hours.
                </p>
             </motion.div>

             <div className="space-y-6 border-t border-zinc-800 pt-8">
                <ContactRow icon={Mail} label="Email" value="rubiondev@gmail.com" />
                <ContactRow icon={Phone} label="Phone" value="+94 77 166 7277" />
                <ContactRow icon={MapPin} label="Office" value="Colombo, Sri Lanka" />
             </div>
          </div>

          {/* --- RIGHT: The Clean Form --- */}
          <div className="lg:col-span-3">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl"
            >
              
              <div className="space-y-8">
                
                {/* 1. Identity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CleanInput label="Name" placeholder="John Doe" />
                  <CleanInput label="Email" placeholder="john@example.com" type="email" />
                </div>

                {/* 2. Services Grid */}
                <div>
                   <label className="block text-xs font-bold text-white uppercase tracking-wider mb-4">I need help with...</label>
                   <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                            selectedServices.includes(service)
                              ? "bg-white text-black border-white"
                              : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                          }`}
                        >
                          {service}
                          {selectedServices.includes(service) && <Check className="w-4 h-4" />}
                        </button>
                      ))}
                   </div>
                </div>

                {/* 3. Budget Grid */}
                <div>
                   <label className="block text-xs font-bold text-white uppercase tracking-wider mb-4">Budget Range (LKR)</label>
                   <div className="grid grid-cols-3 gap-3">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setActiveBudget(budget)}
                          className={`px-2 py-3 rounded-xl text-sm font-medium border text-center transition-all ${
                            activeBudget === budget
                              ? "bg-zinc-800 text-white border-lime-400"
                              : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                   </div>
                </div>

                {/* 4. Message */}
                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all resize-none text-sm"
                    placeholder="Tell us about your project goals and timeline..."
                  />
                </div>

                {/* Submit */}
                <button 
                  type="submit"
                  className="w-full bg-lime-400 text-black h-14 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-lime-300 transition-colors flex items-center justify-center gap-2"
                >
                   Send Request <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </motion.form>
          </div>

        </div>
      </section>
    </main>
  );
}

// --- Components ---

function CleanInput({ label, placeholder, type = "text" }: { label: string, placeholder: string, type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold text-white uppercase tracking-wider">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all text-sm"
      />
    </div>
  )
}

function ContactRow({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">{label}</div>
        <div className="text-zinc-200 text-sm font-medium">{value}</div>
      </div>
    </div>
  )
}