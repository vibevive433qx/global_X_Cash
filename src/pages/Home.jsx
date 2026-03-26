import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Heart, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Cashapp Transfers",
      description: "Receive your cash back in your Cashapp account within minutes of verification."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Secure & Anonymous",
      description: "We use state-of-the-art encryption to protect your data and gift card information."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Charity Sponsored",
      description: "Sponsored by a private foundation dedicated to providing financial relief."
    }
  ];

  const steps = [
    { number: "01", title: "Add Gift Card", description: "Select your gift card type and enter the details." },
    { number: "02", title: "Wait for Verification", description: "Our team will quickly verify the balance on your card." },
    { number: "03", title: "Get 4X Return", description: "Receive 4 times the amount of your card via Cashapp." }
  ];

  const testimonials = [
    { name: "Sarah J.", amount: "$200 → $800", text: "This is a lifesaver! I received my transfer in under 15 minutes." },
    { name: "Marcus T.", amount: "$400 → $1600", text: "Truly a blessing from the anonymous sponsors. 100% legit and helpful." },
    { name: "Linda P.", amount: "$100 → $400", text: "I was skeptical at first, but it works exactly as promised. Thank you!" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8"
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Sponsored by Anonymous Foundation</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-[1.1]"
          >
            Exchange Gift Cards for <br />
            <span className="text-primary">4X Cashapp Transfer</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Turn your unused gift cards into instant cash. Global X Cash is trusted by millions of users for its speed and security.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/exchange" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 shadow-xl shadow-primary/20">
              <span>Redeem Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Visa_2021.svg" alt="Visa" className="h-6 mx-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Xbox_logo_2019.svg" alt="Xbox" className="h-8 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$85.4M+</div>
              <p className="text-gray-400">Total Cash Distributed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2.4M+</div>
              <p className="text-gray-400">Trusted Global Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-400">Secure & Encrypted</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-4">Simple Three-Step Process</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Get your cash transfer in as little as 10 minutes by following these simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl font-black text-primary/10 absolute top-6 right-6 leading-none">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Real Success Stories</h2>
            <p className="text-gray-600">Hear from people who have already benefited from this initiative.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 glass-card border-none bg-white shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="font-bold text-secondary">{t.name}</span>
                  <span className="text-primary font-black bg-primary/10 px-3 py-1 rounded-full text-xs">{t.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[40px] p-12 text-center text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get your cash?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of others who are turning their gift cards into financial relief today. This offer is only available for a limited time.
            </p>
            <Link to="/exchange" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg">
              Start Your Exchange Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
