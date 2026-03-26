import React from 'react';
import { Heart, Globe, ShieldCheck, Users, HandHeart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: <HandHeart className="w-10 h-10 text-primary" />,
      title: "Our Mission",
      description: "To provide financial relief and empowerment to individuals through innovative and anonymous charitable initiatives."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Global Reach",
      description: "We help people from all over the world by leveraging the power of gift cards and instant digital transfers."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Full Transparency",
      description: "While our sponsors choose to remain anonymous, we maintain 100% transparency in our exchange process and payouts."
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">The Foundation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-8 leading-[1.1]">
                Empowering Lives Through <span className="text-primary">Generosity</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Global X Cash was founded in 2024 by a group of private donors who wanted to create a more direct and efficient way to provide financial assistance to people in need.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Trusted by millions of users worldwide, our platform serves as a bridge, funded by anonymous sponsors who contribute to a pool that allows us to offer exceptional returns on every gift card exchanged.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Joined by <span className="text-secondary font-bold">2.4M+</span> members worldwide
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=1000" 
                alt="Charity and Help" 
                className="rounded-[40px] shadow-2xl w-full h-auto object-cover border-8 border-white"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">98%</div>
                    <div className="text-sm text-gray-500">Positive Feedback</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Our donors are committed to making a difference, one transfer at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary rounded-[60px] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="text-center mb-20 relative">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We operate on the principles of trust, efficiency, and compassion to ensure everyone gets the help they deserve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="bg-primary/20 p-4 rounded-3xl inline-block mb-8">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Quote */}
        <section className="mt-24 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-12 h-12 text-primary mx-auto mb-8" />
            <blockquote className="text-3xl font-medium text-secondary mb-8 italic leading-snug">
              "We believe that financial assistance should be accessible to everyone, regardless of their background. Our mission is to bridge the gap between unused resources and urgent needs."
            </blockquote>
            <cite className="text-gray-500 not-italic font-bold text-lg">
              — The Anonymous Founders
            </cite>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
