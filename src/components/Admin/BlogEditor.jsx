// src/components/Admin/BlogEditor.jsx - fixed version for [object Object] issue
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';

const BlogEditor = () => {
  const { content, fetchContent, updateContent, isLoading } = useContent();
  const blogs = content?.blog?.posts || [];
  const [selectedSection, setSelectedSection] = useState('header');
  const [headerContent, setHeaderContent] = useState({
    title: 'Expert Cleaning Tips & <green>Insights</green>',
    subtitle: 'Professional advice, trends, and expert knowledge to keep your space pristine and healthy'
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  
  // Fetch content when component mounts
  useEffect(() => {
    const loadContent = async () => {
      if (!content?.blog) {
        await fetchContent('blog', null, false); // Set format to false to get raw content
      } else if (content.blog.header) {
        // Initialize header form fields with raw strings
        let title = content.blog.header.title;
        let subtitle = content.blog.header.subtitle;
        
        // Convert objects to strings if needed
        if (title && typeof title !== 'string') {
          title = 'Expert Cleaning Tips & <green>Insights</green>';
        }
        
        if (subtitle && typeof subtitle !== 'string') {
          subtitle = 'Professional advice, trends, and expert knowledge to keep your space pristine and healthy';
        }
        
        setHeaderContent({
          title: title || 'Expert Cleaning Tips & <green>Insights</green>',
          subtitle: subtitle || 'Professional advice, trends, and expert knowledge to keep your space pristine and healthy'
        });
      }
    };
    
    loadContent();
  }, [content?.blog, fetchContent]);

  // Handle header content changes
  const handleHeaderChange = (field, value) => {
    setHeaderContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Save header content
  const handleSaveHeader = async () => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(false);
      
      // Ensure we're saving string values, not objects
      const updatedHeader = {
        title: String(headerContent.title),
        subtitle: String(headerContent.subtitle)
      };
      
      const result = await updateContent('blog', {
        ...content.blog,
        header: updatedHeader
      });
      
      if (result) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        
        // Refresh the content to ensure we're working with updated data
        fetchContent('blog', null, false);
      }
    } catch (err) {
      console.error('Error saving blog header:', err);
      setError(err.message || 'Failed to save blog header');
    } finally {
      setSaving(false);
    }
  };

  const sections = [
    { id: 'header', name: 'Blog Page Header' },
    { id: 'blogPosts', name: 'Blog Posts' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold font-['Raleway'] mb-6">Edit Blog Content</h2>
      
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`mr-8 py-2 px-1 font-medium text-sm whitespace-nowrap ${
                  selectedSection === section.id
                    ? 'text-[rgba(168,192,130,1)] border-b-2 border-[rgba(168,192,130,1)]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {selectedSection === 'header' ? (
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Edit Blog Header Content</h3>
            <p className="text-gray-600 mb-6">Changes will be visible on the website immediately after saving.</p>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Title</label>
              <textarea
                value={headerContent.title}
                onChange={(e) => handleHeaderChange('title', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded resize-none"
                rows={2}
              />
              <p className="text-sm text-gray-500 mt-1">
                You can use &lt;green&gt;text&lt;/green&gt; tags for green text and &lt;pink&gt;text&lt;/pink&gt; tags for pink text.
              </p>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Subtitle</label>
              <textarea
                value={headerContent.subtitle}
                onChange={(e) => handleHeaderChange('subtitle', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded resize-y"
                rows={3}
              />
              <p className="text-sm text-gray-500 mt-1">
                You can use &lt;green&gt;text&lt;/green&gt; tags for green text and &lt;pink&gt;text&lt;/pink&gt; tags for pink text.
              </p>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                Header content saved successfully!
              </div>
            )}
            
            <div className="flex justify-end">
              <button
                onClick={handleSaveHeader}
                disabled={saving}
                className="px-4 py-2 bg-[rgba(168,192,130,1)] hover:bg-[rgba(148,172,110,1)] text-white rounded flex items-center"
              >
                {saving ? (
                  <>
                    <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Blog Posts</h3>
          <p className="mb-4 text-gray-600">Select a blog post to edit its content:</p>
          
          <div className="grid grid-cols-1 gap-4">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <span className="inline-block px-2 py-1 bg-[rgba(168,192,130,0.1)] text-[rgba(168,192,130,1)] text-xs rounded-full mb-2">
                    {typeof blog.category === 'string' ? blog.category : 'Category'}
                  </span>
                  <h4 className="font-bold">
                    {typeof blog.title === 'string' ? blog.title : 'Blog Title'}
                  </h4>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                <Link 
                  to={`/admin/blog-post/${index}`} 
                  className="bg-[rgba(168,192,130,1)] text-white px-4 py-2 rounded hover:bg-[rgba(148,172,110,1)] transition-colors"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Editing Tips:</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Use &lt;green&gt;text&lt;/green&gt; tags to highlight text in green</li>
          <li>Use &lt;pink&gt;text&lt;/pink&gt; tags to highlight text in pink</li>
          <li>Changes will be reflected immediately on the website after saving</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogEditor;