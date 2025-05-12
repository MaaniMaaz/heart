// src/components/Admin/BlogPostEditor.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContent } from '../../contexts/ContentContext';

const BlogPostEditor = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const { content, fetchContent, updateContent, isLoading } = useContent();
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!content?.blog?.posts) {
      fetchContent('blog');
    } else {
      const postIndex = parseInt(blogId, 10);
      if (content.blog.posts[postIndex]) {
        setBlogPost(content.blog.posts[postIndex]);
      } else {
        setError("Blog post not found");
      }
    }
  }, [blogId, content?.blog?.posts, fetchContent]);

  const handleChange = (field, value) => {
    setBlogPost(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    try {
      setError(null);
      setSaving(true);
      setSuccess(false);

      // Ensure all fields are proper strings
      // For content, don't convert objects to string with Object.toString()
      const updatedPost = {
        ...blogPost,
        title: typeof blogPost.title === 'string' ? blogPost.title : String(blogPost.title),
        category: typeof blogPost.category === 'string' ? blogPost.category : String(blogPost.category),
        excerpt: typeof blogPost.excerpt === 'string' ? blogPost.excerpt : String(blogPost.excerpt),
        content: typeof blogPost.content === 'string' ? blogPost.content : JSON.stringify(blogPost.content)
      };

      // Create a copy of blog posts and update the one being edited
      const updatedPosts = [...content.blog.posts];
      updatedPosts[parseInt(blogId, 10)] = updatedPost;

      // Update blog posts in content
      const result = await updateContent('blog', {
        ...content.blog,
        posts: updatedPosts
      });

      if (result) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        
        // Refresh content
        fetchContent('blog', null, false);
      }
    } catch (err) {
      console.error('Error saving blog post:', err);
      setError(err.message || 'Failed to save blog post');
    } finally {
      setSaving(false);
    }
  };

  if (isLoading || !blogPost) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading blog post...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/admin/blog')}
          className="text-gray-600 hover:text-gray-900 mr-4"
        >
          ← Back to Blogs
        </button>
        <h2 className="text-2xl font-bold font-['Raleway']">Edit Blog Post</h2>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <input
            type="text"
            value={typeof blogPost.category === 'string' ? blogPost.category : JSON.stringify(blogPost.category)}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* <p className="text-sm text-gray-500 mt-1">
            You can use &lt;green&gt;text&lt;/green&gt; tags for green text and &lt;pink&gt;text&lt;/pink&gt; tags for pink text.
          </p> */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <textarea
            value={typeof blogPost.title === 'string' ? blogPost.title : JSON.stringify(blogPost.title)}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded resize-none"
            rows={2}
          />
          {/* <p className="text-sm text-gray-500 mt-1">
            You can use &lt;green&gt;text&lt;/green&gt; tags for green text and &lt;pink&gt;text&lt;/pink&gt; tags for pink text.
          </p> */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            type="text"
            value={typeof blogPost.date === 'string' ? blogPost.date : JSON.stringify(blogPost.date)}
            onChange={(e) => handleChange('date', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Read Time</label>
          <input
            type="text"
            value={typeof blogPost.readTime === 'string' ? blogPost.readTime : JSON.stringify(blogPost.readTime)}
            onChange={(e) => handleChange('readTime', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Excerpt</label>
          <textarea
            value={typeof blogPost.excerpt === 'string' ? blogPost.excerpt : JSON.stringify(blogPost.excerpt)}
            onChange={(e) => handleChange('excerpt', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded resize-y"
            rows={3}
          />
          {/* <p className="text-sm text-gray-500 mt-1">
            You can use &lt;green&gt;text&lt;/green&gt; tags for green text and &lt;pink&gt;text&lt;/pink&gt; tags for pink text.
          </p> */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Content</label>
          <textarea
            value={typeof blogPost.content === 'string' ? blogPost.content : JSON.stringify(blogPost.content)}
            onChange={(e) => handleChange('content', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded resize-y font-mono"
            rows={20}
          />
        </div>
      </div>

      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">HTML Formatting Guide:</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Use <code className="bg-gray-200 px-1">&lt;h2&gt;Heading&lt;/h2&gt;</code> for main headings</li>
          <li>Use <code className="bg-gray-200 px-1">&lt;h3&gt;Subheading&lt;/h3&gt;</code> for subheadings</li>
          <li>Use <code className="bg-gray-200 px-1">&lt;p&gt;Text paragraph&lt;/p&gt;</code> for paragraphs</li>
          <li>Use <code className="bg-gray-200 px-1">&lt;br&gt;</code> for line breaks</li>
          <li>Use <code className="bg-gray-200 px-1">&lt;strong&gt;Bold text&lt;/strong&gt;</code> for bold text</li>
          <li>Use <code className="bg-gray-200 px-1">&lt;green&gt;Green text&lt;/green&gt;</code> for green text</li>
          <li>Use <code className="bg-gray-200 px-1">&lt;pink&gt;Pink text&lt;/pink&gt;</code> for pink text</li>
          <li>Unordered lists: <code className="bg-gray-200 px-1">&lt;ul&gt;&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item 2&lt;/li&gt;&lt;/ul&gt;</code></li>
          <li>Ordered lists: <code className="bg-gray-200 px-1">&lt;ol&gt;&lt;li&gt;Step 1&lt;/li&gt;&lt;li&gt;Step 2&lt;/li&gt;&lt;/ol&gt;</code></li>
        </ul>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Blog post saved successfully!
        </div>
      )}
      
      <div className="flex justify-end">
        <button
          onClick={handleSave}
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
  );
};

export default BlogPostEditor;