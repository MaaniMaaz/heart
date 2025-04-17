import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaShare, FaBookmark, FaRegBookmark } from 'react-icons/fa';

const Blog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Track scroll progress for reading indicator
  useEffect(() => {
    const scrollListener = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setReadingProgress(scrolled);
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  // Mock blog data - in a real app you would fetch this from an API
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      // Example blog post content
      const fetchedBlog = {
        id: 1,
        title: 'Top 10 Natural Cleaning Solutions for Your Home',
        content: `
          <p>Keeping your home clean is essential for maintaining a healthy living environment, but traditional cleaning products often contain harsh chemicals that can be harmful to both your health and the environment. Fortunately, there are many natural alternatives that are just as effective without the negative side effects.</p>
          
          <h2>Why Choose Natural Cleaning Products?</h2>
          
          <p>Before diving into our list of recommended products, it's important to understand why natural cleaning solutions are worth considering:</p>
          
          <ul>
            <li><strong>Better for Your Health:</strong> Conventional cleaning products can release volatile organic compounds (VOCs) that may cause respiratory issues, skin irritation, and other health problems. Natural alternatives typically contain gentle ingredients that are safer for your body.</li>
            <li><strong>Safe for Pets:</strong> If you have furry friends at home, natural cleaning products reduce the risk of exposing them to toxic chemicals that could be harmful if ingested or inhaled.</li>
            <li><strong>Environmental Impact:</strong> Traditional cleaning products can contaminate waterways and harm aquatic life. Natural options are biodegradable and have a minimal environmental footprint.</li>
            <li><strong>Effective Cleaning:</strong> Many people assume that natural cleaning products aren't as effective as their chemical-laden counterparts. However, modern natural formulations can be just as powerful at removing dirt, grime, and bacteria.</li>
          </ul>
          
          <h2>Our Top 10 Natural Cleaning Solutions</h2>
          
          <h3>1. White Vinegar</h3>
          <p>This pantry staple is one of the most versatile natural cleaning agents. Its acidity makes it effective at cutting through grease, removing soap scum, and disinfecting surfaces. For a pleasant scent, infuse white vinegar with citrus peels or essential oils.</p>
          
          <h3>2. Baking Soda</h3>
          <p>Baking soda works as a gentle abrasive for scrubbing surfaces and neutralizing odors. It's perfect for cleaning sinks, tubs, and ovens without scratching or damaging the surface.</p>
          
          <h3>3. Castile Soap</h3>
          <p>Made from vegetable oils, castile soap is biodegradable and free from synthetic ingredients. It can be diluted and used for everything from washing dishes to mopping floors and laundering clothes.</p>
          
          <h3>4. Lemon Juice</h3>
          <p>The natural acidity of lemon juice makes it excellent for removing stains, cutting through grease, and leaving a fresh scent. It's particularly effective for cleaning cutting boards and brightening white fabrics.</p>
          
          <h3>5. Hydrogen Peroxide</h3>
          <p>A safer alternative to chlorine bleach, hydrogen peroxide is a powerful disinfectant that breaks down into water and oxygen, making it environmentally friendly.</p>
        `,
        category: 'Cleaning Tips',
        date: 'April 12, 2025',
        readTime: '5 min read'
      };
      
      setBlog(fetchedBlog);
      setLoading(false);
    }, 1000);
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8f3] flex justify-center items-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gray-800 animate-spin"></div>
          <div className="absolute inset-0 rounded-full border-4 border-gray-100 opacity-25"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f8f8f3] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <h1 className="font-sans font-bold text-2xl text-gray-800 mb-3">Article not found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-gray-800 text-white font-medium px-6 py-2.5 rounded-lg shadow hover:bg-black transition-all duration-200"
          >
            Explore Articles
          </button>
        </motion.div>
      </div>
    );
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#f8f8f3] min-h-screen pb-0">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gray-800 z-50 transition-all duration-100"
        style={{ width: `${readingProgress}%` }}
      ></div>
      
      {/* Bookmark Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button 
          onClick={() => setBookmarked(!bookmarked)}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 hover:shadow-xl"
        >
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </motion.div>
      
      {/* Back button */}
      <div className="sticky top-0 z-30 bg-[rgba(255,174,174,0.95)] backdrop-blur-sm pt-4 pb-3 px-4 border-b border-[rgba(255,174,174,0.7)] shadow-sm">
  <div className="container mx-auto max-w-3xl">
    <button
      onClick={() => navigate('/blog')}
      className="inline-flex items-center text-white hover:text-gray-100 font-medium transition-all duration-200"
    >
      <FaArrowLeft className="mr-2 text-sm" /> 
      <span>Back to Blogs</span>
    </button>
  </div>
</div>
      
      <div className="container mx-auto max-w-3xl px-4">
        {/* Article Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            
            <span className="inline-flex items-center text-gray-500">
              <FaCalendarAlt className="mr-2 text-gray-600" /> {blog.date}
            </span>
            <span className="text-gray-500">{blog.readTime}</span>
          </div>
          
          <h1 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
            {blog.title}
          </h1>
        </motion.div>
        
        {/* Article Content */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <div 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
              className="prose prose-slate max-w-none article-content"
            />
          </div>
        </motion.div>
        
        {/* Extra space filler to connect with footer */}
        <div className="h-24"></div>
      </div>
      
      {/* Add custom CSS for article content styling */}
      <style jsx>{`
        .article-content h2 {
          font-family: sans-serif;
          font-weight: 700;
          font-size: 1.75rem;
          color: #1f2937;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.75rem;
          text-align: left;
        }
        
        .article-content h2::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 3rem;
          height: 3px;
          background-color: #333;
          border-radius: 2px;
        }
        
        .article-content h3 {
          font-family: sans-serif;
          font-weight: 600;
          font-size: 1.3rem;
          color: #333;
          margin-top: 1.75rem;
          margin-bottom: 1rem;
          text-align: left;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #333;
          text-align: left;
        }
        
        .article-content ul {
          margin-left: 0.5rem;
          margin-bottom: 1.75rem;
          list-style-type: none;
          text-align: left;
        }
        
        .article-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          position: relative;
          padding-left: 1.5rem;
          text-align: left;
        }
        
        .article-content li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 0.4rem;
          height: 0.4rem;
          background-color: #666;
          border-radius: 50%;
        }
        
        .article-content a {
          color: #666;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
          transition: all 0.2s ease;
        }
        
        .article-content a:hover {
          color: #000;
        }
        
        .article-content strong {
          font-weight: 600;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Blog;