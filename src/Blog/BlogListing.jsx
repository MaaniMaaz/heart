import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaSearch, FaArrowRight, FaTimes } from 'react-icons/fa';

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const blogsPerPage = 6;

  // Mock blog data - in a real app you would fetch this from an API
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setBlogs([
        {
          id: 1,
          title: 'Top 10 Natural Cleaning Solutions for Your Home',
          excerpt: 'Discover the best natural cleaning products that are safe for your family and pets while being kind to the environment.',
          category: 'Cleaning Tips',
          date: 'April 12, 2025',
          readTime: '5 min read'
        },
        {
          id: 2,
          title: 'How to Prepare Your Home for a Professional Cleaning Service',
          excerpt: 'Learn how to get the most out of your professional cleaning service with these simple preparation tips.',
          category: 'Tips & Tricks',
          date: 'April 5, 2025',
          readTime: '4 min read'
        },
        {
          id: 3,
          title: 'The Benefits of Regular House Cleaning for Your Health',
          excerpt: 'Regular cleaning does more than just make your home look good - it can significantly impact your physical and mental wellbeing.',
          category: 'Health',
          date: 'March 28, 2025',
          readTime: '6 min read'
        },
        {
          id: 4,
          title: 'Seasonal Cleaning Guide: Spring Edition',
          excerpt: 'Get your home refreshed and rejuvenated with our comprehensive spring cleaning guide.',
          category: 'Seasonal',
          date: 'March 21, 2025',
          readTime: '7 min read'
        },
        {
          id: 5,
          title: 'How to Clean Hard-to-Reach Areas in Your Home',
          excerpt: 'Tackle those challenging cleaning spots with our expert techniques and tool recommendations.',
          category: 'Tips & Tricks',
          date: 'March 14, 2025',
          readTime: '5 min read'
        },
        {
          id: 6,
          title: 'Why Choose Pet-Friendly Cleaning Products',
          excerpt: 'Keep your furry friends safe with our guide to pet-friendly cleaning solutions and practices.',
          category: 'Pet Care',
          date: 'March 7, 2025',
          readTime: '4 min read'
        },
        {
          id: 7,
          title: 'Understanding Different Types of Cleaning Services',
          excerpt: 'From routine to deep cleaning - learn which type of service is right for your specific needs.',
          category: 'Services',
          date: 'February 28, 2025',
          readTime: '6 min read'
        },
        {
          id: 8,
          title: 'The Ultimate Guide to Bathroom Cleaning',
          excerpt: 'Transform your bathroom from grimy to sparkling with our comprehensive cleaning approach.',
          category: 'Tips & Tricks',
          date: 'February 21, 2025',
          readTime: '8 min read'
        },
        {
          id: 9,
          title: 'Green Cleaning Myths Debunked',
          excerpt: 'Separate fact from fiction when it comes to sustainable cleaning practices and products.',
          category: 'Myth Busters',
          date: 'February 14, 2025',
          readTime: '5 min read'
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter blogs by search term
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  return (
    // Changed background color to match footer #f5f5f0
    <div className="min-h-screen bg-[rgba(251,246,243,1)]]">
      {/* Hero Section - updated background to match footer */}
      <div className="relative overflow-hidden bg-[#f5f5f0] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Raleway'] font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight"
          >
            <span className="relative inline-block">
              Expert Cleaning
              <svg className="absolute inset-x-0 -bottom-2 h-2 text-[rgba(168,192,130,0.4)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path fill="currentColor" d="M0 5 Q 25 9, 50 5 Q 75 1, 100 5 L100 10 Q 75 6, 50 10 Q 25 6, 0 10 Z"></path>
              </svg>
            </span>{' '}
            Tips & <span className="text-[rgba(168,192,130,1)]">Insights</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg mb-10"
          >
            Professional advice, trends, and expert knowledge to keep your space pristine and healthy
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative max-w-2xl mx-auto"
          >
            <div 
              className={`relative rounded-full transition-all duration-300 ${
                searchFocus 
                  ? 'shadow-xl ring-2 ring-[rgba(168,192,130,1)]' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              <input
                ref={searchRef}
                type="text"
                placeholder="Search for cleaning tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                className="w-full px-8 py-4 pl-12 pr-10 rounded-full text-gray-700 bg-white focus:outline-none"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <FaSearch className="h-4 w-4 text-[rgba(168,192,130,1)]" />
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements - adjusted colors to match footer */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[rgba(168,192,130,0.03)] transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f5f5f0] to-transparent"></div>
        <div className="absolute right-12 top-20 w-64 h-64 rounded-full bg-[rgba(168,192,130,0.05)] blur-3xl"></div>
        <div className="absolute left-8 bottom-20 w-48 h-48 rounded-full bg-[rgba(168,192,130,0.05)] blur-2xl"></div>
      </div>
      
      {/* Blog Posts Grid - background color maintained as #f5f5f0 */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 relative">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-[rgba(168,192,130,0.3)] rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-t-4 border-[rgba(168,192,130,1)] rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <>
            {searchTerm && (
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  {filteredBlogs.length === 0 
                    ? 'No articles found for your search.' 
                    : `Found ${filteredBlogs.length} article${filteredBlogs.length !== 1 ? 's' : ''} for "${searchTerm}"`}
                </p>
              </div>
            )}
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentBlogs.map(blog => (
                <motion.div 
                  key={blog.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  <Link to={`/blog/${blog.id}`} className="flex flex-col h-full">
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[rgba(168,192,130,0.1)] text-[rgba(168,192,130,1)]">
                          {blog.category}
                        </span>
                      </div>
                      
                      <h2 className="font-['Raleway'] font-semibold text-xl sm:text-2xl text-gray-800 mb-3 group-hover:text-[rgba(168,192,130,1)] transition-colors duration-300">
                        {blog.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">
                        {blog.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500 flex items-center">
                            <FaCalendarAlt className="mr-1 text-[rgba(168,192,130,0.7)]" /> {blog.date}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <FaClock className="mr-1 text-[rgba(168,192,130,0.7)]" /> {blog.readTime}
                          </span>
                        </div>
                        
                        <span className="text-[rgba(168,192,130,1)] text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 -mr-4 group-hover:mr-0 transition-all duration-300">
                          Read <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Empty state */}
            {!loading && filteredBlogs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-md"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(168,192,130,0.1)] flex items-center justify-center text-[rgba(168,192,130,1)] mx-auto mb-6">
                    <FaSearch className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Raleway'] font-semibold text-xl text-gray-800 mb-3">No articles found</h3>
                  <p className="text-gray-600 mb-8">Try adjusting your search or browse our categories for more content.</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="bg-[rgba(168,192,130,1)] text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-[rgba(148,172,110,1)] transition-all duration-300"
                  >
                    View All Articles
                  </button>
                </motion.div>
              </div>
            )}
            
            {/* Pagination */}
            {!loading && filteredBlogs.length > blogsPerPage && (
              <div className="flex justify-center mt-16">
                <motion.nav 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex rounded-full shadow-lg overflow-hidden bg-white p-1"
                  aria-label="Pagination"
                >
                  <button 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]'
                    } transition-all duration-300 mx-1`}
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                        i + 1 === currentPage
                          ? 'bg-[rgba(168,192,130,1)] text-white font-medium shadow-md'
                          : 'text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]'
                      } transition-all duration-300 mx-1`}
                      aria-current={i + 1 === currentPage ? "page" : undefined}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-[rgba(168,192,130,0.1)] hover:text-[rgba(168,192,130,1)]'
                    } transition-all duration-300 mx-1`}
                  >
                    Next
                  </button>
                </motion.nav>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Featured Categories Section - updated to match footer background */}
      {/* <div className="bg-[#f5f5f0] py-16 px-4 mt-8 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-['Raleway'] font-bold text-3xl text-gray-900 mb-4">
              Explore Our <span className="text-[rgba(168,192,130,1)]">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the specific cleaning advice you need by browsing our focused categories
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {['Cleaning Tips', 'Health', 'Pet Care', 'Seasonal', 'Tips & Tricks', 'Services', 'Myth Busters', 'All Articles'].map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                onClick={() => {
                  if (category === 'All Articles') {
                    setSearchTerm('');
                  } else {
                    setSearchTerm(category);
                  }
                  setCurrentPage(1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-xl py-6 px-4 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="font-['Raleway'] font-medium text-gray-800 group-hover:text-[rgba(168,192,130,1)] transition-colors duration-300">
                  {category}
                </h3>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default BlogListing;