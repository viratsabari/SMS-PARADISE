import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaBars, FaTimes, FaShoppingBag, FaSearch, FaHeart,FaStar } from 'react-icons/fa';
import logo from './assets/WhatsApp Image 2025-02-28 at 21.10.22_9937cf1b.jpg'
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll for navigation highlighting and navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      const sections = document.querySelectorAll('section');
      const currentPosition = position + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample collections data
  const collections = [
    { id: 1, name: 'Royal Bridal Collection', image: '/api/placeholder/400/600', description: 'Exquisite bridal wear with intricate embroidery and premium fabrics crafted for your special day.' },
    { id: 2, name: 'Festive Elegance', image: '/api/placeholder/400/600', description: 'Celebrate in style with our festive collection featuring rich colors and detailed craftsmanship.' },
    { id: 3, name: 'Designer Sarees', image: '/api/placeholder/400/600', description: 'Elegant sarees with modern designs and traditional touches, perfect for any occasion.' },
    { id: 4, name: 'Contemporary Fusion', image: '/api/placeholder/400/600', description: 'The perfect blend of traditional aesthetics and contemporary designs for the modern woman.' },
    { id: 5, name: 'Exclusive Accessories', image: '/api/placeholder/400/600', description: 'Complete your look with our handcrafted accessories designed to complement our outfits.' },
    { id: 6, name: 'Custom Couture', image: '/api/placeholder/400/600', description: 'Personalized outfits created to your exact specifications and preferences by our master craftsmen.' },
  ];

  // Testimonials
  const testimonials = [
    { id: 1, name: 'Priya S.', text: 'SMS Paradise created my dream wedding outfit. The attention to detail was impeccable, and I felt like royalty on my special day!', rating: 5 },
    { id: 2, name: 'Divya R.', text: 'Excellent craftsmanship and the staff is so helpful with selecting the perfect designs. Their collection is unmatched in Trichy!', rating: 5 },
    { id: 3, name: 'Karthik M.', text: 'The quality of fabrics and embroidery is outstanding. Worth every penny! My wife was thrilled with her anniversary gift.', rating: 5 },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen font-serif overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-teal-800"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {/* Animated patterns */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
        </div>
        {/* Decorative gold particles */}
        <div className="gold-particles"></div>
      </div>

      {/* Enhanced Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrollPosition > 50 ? 'py-2 bg-black bg-opacity-80 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-gold rounded-full blur opacity-70 ${scrollPosition > 50 ? 'scale-90' : 'scale-110'} transition-all duration-500`}></div>
                <div className="text-gold text-3xl font-extrabold italic tracking-wider relative">SMS Paradise</div>
              </motion.div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex space-x-1">
                {['home', 'collections', 'about', 'testimonials', 'contact'].map((section) => (
                  <motion.li key={section} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`relative px-4 py-2 block capitalize transition-all duration-300`}
                    >
                      <span className={`relative z-10 ${activeSection === section ? 'text-black font-bold' : 'text-white hover:text-gold'}`}>
                        {section}
                      </span>
                      {activeSection === section && (
                        <motion.span 
                          layoutId="navHighlight"
                          className="absolute inset-0 bg-gradient-to-r from-gold to-amber-400 rounded-full -z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* Navigation Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-white hover:text-gold transition-colors duration-300"
                aria-label="Search"
              >
                <FaSearch className="text-xl" />
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                href="#wishlist"
                className="text-white hover:text-gold transition-colors duration-300"
                aria-label="Wishlist"
              >
                <FaHeart className="text-xl" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                href="#cart"
                className="text-white hover:text-gold transition-colors duration-300"
                aria-label="Shopping Bag"
              >
                <FaShoppingBag className="text-xl" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-gold to-amber-500 text-black rounded-full font-medium text-sm hover:from-amber-500 hover:to-gold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </motion.button>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gold text-2xl focus:outline-none bg-black bg-opacity-30 p-2 rounded-full"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black bg-opacity-90 backdrop-blur-md border-t border-gold border-opacity-20"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for products..." 
                    className="w-full px-4 py-3 bg-gray-900 border border-gold border-opacity-30 rounded-full focus:outline-none focus:border-gold text-white pr-10"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-b from-black to-purple-900 border-t border-gold border-opacity-20 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col divide-y divide-gold divide-opacity-20">
                  {['home', 'collections', 'about', 'testimonials', 'contact'].map((section) => (
                    <motion.a
                      key={section}
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className={`py-4 flex items-center capitalize ${
                        activeSection === section 
                          ? 'text-gold font-bold' 
                          : 'text-white'
                      }`}
                      whileHover={{ x: 10, color: '#D4AF37' }}
                    >
                      <span className="mr-2">
                        {section === 'home' && '🏠'}
                        {section === 'collections' && '👗'}
                        {section === 'about' && 'ℹ️'}
                        {section === 'testimonials' && '💬'}
                        {section === 'contact' && '📞'}
                      </span>
                      {section}
                    </motion.a>
                  ))}
                  
                  <div className="py-4">
                    <button className="w-full py-3 bg-gradient-to-r from-gold to-amber-500 text-black rounded-full font-medium">
                      Book Appointment
                    </button>
                  </div>
                  
                  <div className="py-4 flex justify-around">
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="#wishlist"
                      className="text-white hover:text-gold transition-colors duration-300"
                    >
                      <FaHeart className="text-xl" />
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="#cart"
                      className="text-white hover:text-gold transition-colors duration-300"
                    >
                      <FaShoppingBag className="text-xl" />
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="https://wa.me/1234567890"
                      className="text-white hover:text-gold transition-colors duration-300"
                    >
                      <FaWhatsapp className="text-xl" />
                    </motion.a>
                    
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="https://instagram.com/smsparadise"
                      className="text-white hover:text-gold transition-colors duration-300"
                    >
                      <FaInstagram className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                delay: 0.2
              }}
              className="w-64 h-64 mx-auto mb-8 relative"
            >
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{ 
                  background: [
                    "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(212,175,55,0.4) 50%, rgba(178,151,0,0) 70%)",
                    "radial-gradient(circle, rgba(255,192,203,0.7) 0%, rgba(219,112,147,0.4) 50%, rgba(199,21,133,0) 70%)",
                    "radial-gradient(circle, rgba(72,209,204,0.7) 0%, rgba(0,128,128,0.4) 50%, rgba(0,139,139,0) 70%)",
                    "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(212,175,55,0.4) 50%, rgba(178,151,0,0) 70%)",
                  ],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-gold p-2">
                <img src={logo} alt="SMS Paradise Logo" className="w-full h-full object-contain" />
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-gold opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-gold to-amber-400">SMS Paradise</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-light mb-8 text-pink-200"
            >
              Where Elegance Meets Tradition
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl mb-10 text-gray-200"
            >
              Discover exquisite designer wear crafted with passion and precision in Musiri, Trichy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212,175,55,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gold to-amber-500 text-black rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Collections
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(219,112,147,0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-pink-300 text-pink-200 rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:text-white hover:border-pink-200 transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <svg className="w-8 h-8 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-gold opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </section>

      {/* Enhanced Collections Section */}
      <section id="collections" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black bg-opacity-60"></div>
        
        {/* Floating decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 left-10 w-24 h-24 border-2 border-gold opacity-20 rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 right-10 w-32 h-32 border-2 border-pink-400 opacity-20 rounded-full"
        ></motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="inline-block text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-300 to-gold pb-2">
              Our Exquisite Collections
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Discover our handcrafted designs that blend traditional artistry with contemporary elegance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  scale: 1.02
                }}
                className="group bg-gradient-to-br from-purple-900 to-teal-900 rounded-xl overflow-hidden shadow-lg border border-gold border-opacity-30"
              >
                <div className="h-80 overflow-hidden relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-50 z-10 transition-opacity duration-500"
                  ></motion.div>
                  <motion.img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out" 
                    whileHover={{ scale: 1.15 }}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 z-20"
                  >
                    <button className="bg-gradient-to-r from-gold to-amber-500 text-black rounded-full px-4 py-2 text-sm font-medium hover:from-amber-500 hover:to-gold transition-all duration-300 transform hover:scale-105">
                      Quick View
                    </button>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gold mb-2 group-hover:text-amber-300 transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{collection.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-transparent border border-gold text-gold rounded-full text-sm font-medium hover:bg-gold hover:text-black transition-all duration-300">
                      View Collection
                    </button>
                    <motion.button 
                      whileHover={{ scale: 1.2, color: '#FF69B4' }}
                      className="text-white"
                    >
                      <FaHeart />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-3 bg-transparent border-2 border-gold text-gold rounded-full font-medium hover:bg-gold hover:text-black transition-all duration-300 group">
              <span className="inline-block group-hover:-translate-x-1 transition-transform duration-300">View All Collections</span>
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-teal-900 opacity-70"></div>
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "60px 60px"
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(212,175,55,0.5)", 
                      "0 0 40px rgba(212,175,55,0.7)", 
                      "0 0 20px rgba(212,175,55,0.5)"
                    ] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-gold opacity-30 blur-lg rounded-lg"
                ></motion.div>
                <img src="/api/placeholder/600/400" alt="About SMS Paradise" className="w-full rounded-lg relative z-10" />
                            <motion.div 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-gold rounded-lg z-0"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-300 to-gold">
              About SMS Paradise
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              SMS Paradise is a premier fashion house based in Musiri, Trichy, specializing in exquisite bridal and festive wear. With over two decades of experience, we have been crafting timeless designs that blend traditional craftsmanship with modern aesthetics.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              Our team of skilled artisans and designers work tirelessly to create outfits that make you feel special on your most important occasions. From intricate embroidery to luxurious fabrics, every piece is a testament to our dedication to quality and elegance.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-gold to-amber-500 text-black rounded-full font-medium hover:from-amber-500 hover:to-gold transition-all duration-300">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Enhanced Testimonials Section */}
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black opacity-80"></div>
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-20 w-24 h-24 border-2 border-gold opacity-20 rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 right-20 w-32 h-32 border-2 border-pink-400 opacity-20 rounded-full"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-300 to-gold pb-2">
            What Our Clients Say
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Hear from our satisfied customers who have experienced the magic of SMS Paradise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900 to-teal-900 rounded-xl p-6 border border-gold border-opacity-30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-amber-500 rounded-full flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-200">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Enhanced Contact Section */}
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-teal-900 opacity-80"></div>
      
      {/* Decorative elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-24 h-24 border-2 border-gold opacity-20 rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-32 h-32 border-2 border-pink-400 opacity-20 rounded-full"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-300 to-gold pb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our collections or want to book an appointment, feel free to reach out.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900 to-teal-900 rounded-xl p-8 border border-gold border-opacity-30"
          >
            <h3 className="text-2xl font-bold text-gold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaWhatsapp className="text-gold text-xl mr-4" />
                <a href="https://wa.me/1234567890" className="text-gray-200 hover:text-gold transition-colors duration-300">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gold text-xl mr-4" />
                <a href="mailto:info@smsparadise.com" className="text-gray-200 hover:text-gold transition-colors duration-300">
                  info@smsparadise.com
                </a>
              </div>
              <div className="flex items-center">
                <FaInstagram className="text-gold text-xl mr-4" />
                <a href="https://instagram.com/smsparadise" className="text-gray-200 hover:text-gold transition-colors duration-300">
                  @smsparadise
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900 to-teal-900 rounded-xl p-8 border border-gold border-opacity-30"
          >
            <h3 className="text-2xl font-bold text-gold mb-6">Send Us a Message</h3>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-gray-900 border border-gold border-opacity-30 rounded-lg focus:outline-none focus:border-gold text-white"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-gray-900 border border-gold border-opacity-30 rounded-lg focus:outline-none focus:border-gold text-white"
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full px-4 py-3 bg-gray-900 border border-gold border-opacity-30 rounded-lg focus:outline-none focus:border-gold text-white"
              ></textarea>
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-gold to-amber-500 text-black rounded-full font-medium hover:from-amber-500 hover:to-gold transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-12 bg-black bg-opacity-80 backdrop-blur-md border-t border-gold border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-gold text-3xl font-extrabold italic tracking-wider mb-4">SMS Paradise</div>
            <p className="text-gray-300">© {new Date().getFullYear()} SMS Paradise. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ scale: 1.2 }} 
              href="https://wa.me/1234567890"
              className="text-gray-300 hover:text-gold transition-colors duration-300"
            >
              <FaWhatsapp className="text-xl" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2 }} 
              href="https://instagram.com/smsparadise"
              className="text-gray-300 hover:text-gold transition-colors duration-300"
            >
              <FaInstagram className="text-xl" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2 }} 
              href="mailto:info@smsparadise.com"
              className="text-gray-300 hover:text-gold transition-colors duration-300"
            >
              <FaEnvelope className="text-xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
};

export default App;