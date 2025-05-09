// src/contexts/ContentContext.jsx - with improved API availability handling
import React, { createContext, useState, useEffect, useContext } from 'react';

// API URL - Change to your PHP server address
const API_URL = 'http://localhost:8000/api';

// Default content to use if the API fails
const DEFAULT_CONTENT = {
  home: {
    hero: {
      mainTitle: "Eco-Friendly Cleaning Services in Arizona West Valley",
      description: "Welcome to Heart & Home Green Clean, your trusted provider of eco-friendly house cleaning services in Arizona West Valley. We specialize in non-toxic, sustainable cleaning solutions that keep your home fresh, safe, and spotless. Whether you need routine cleaning, deep cleaning, or move-in/move-out services, we're here to help.",
      buttonText: "Get Your Free Estimate",
      badges: [
        {
          title: "Safe",
          description: "Non-Toxic & Pet-Friendly Cleaning Solutions"
        },
        {
          title: "Trusted",
          description: "Eco-Friendly & Family-Owned"
        },
        {
          title: "Reliable",
          description: "Fully Insured & Bonded for Your Peace of Mind"
        }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Eco-Friendly Cleaning, Trusted by Your Neighbors",
      whyChooseUs: {
        title: "Why Choose Us?",
        points: [
          "100% Eco-Friendly & Non-Toxic Products",
          "Safe for Kids & Pets",
          "Trusted Local Cleaning Professionals",
          "Flexible Scheduling & Competitive Pricing"
        ]
      },
      serviceCards: [
        {
          title: "Routine Cleaning",
          description: "Keep your home fresh with our weekly, bi-weekly, or monthly cleaning plans."
        },
        {
          title: "Deep Cleaning",
          description: "A top-to-bottom clean, perfect for seasonal refreshes."
        },
        {
          title: "Move In/Move Out",
          description: "Get your home ready for the next chapter."
        },
        {
          title: "Office Cleaning",
          description: "Maintain a healthy and spotless workspace."
        }
      ],
      buttonText: "Get a Free Quote Today!"
    }
  }
};

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiAvailable, setApiAvailable] = useState(true); // Default to true

  // Function to fetch content from the API
  const fetchContent = async (page = null, section = null, format = true) => {
    try {
      setIsLoading(true);
      
      let url = `${API_URL}/?route=content`;
      
      if (page) {
        url += `&page=${page}`;
        if (section) {
          url += `&section=${section}`;
        }
      }
      
      // Add formatting parameter
      if (format) {
        url += `&format=true`;
      }
      
      
      
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API request failed:', response.status, errorText);
        throw new Error(`API request failed: ${response.status} - ${errorText.substring(0, 100)}...`);
      }
      
      // If we get here, API is available
      setApiAvailable(true);
      
      // Get the response as text first for debugging
      const responseText = await response.text();
      
      // Try to parse the response as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        console.error('Response text:', responseText);
        throw new Error(`Invalid JSON response: ${parseError.message}`);
      }
      
      
      // Update state based on what was requested
      if (page) {
        setContent(prevContent => ({
          ...prevContent,
          [page]: section ? { 
            ...prevContent[page], 
            [section]: data 
          } : data
        }));
      } else {
        setContent(data);
      }
      
      setError(null);
      return data;
    } catch (err) {
      console.error('Error fetching content:', err);
      setError(err.message);
      
      // Only set API as unavailable for network errors, not data/parsing errors
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setApiAvailable(false);
      }
      
      // Return default content as fallback
      if (page) {
        return section ? DEFAULT_CONTENT[page]?.[section] : DEFAULT_CONTENT[page];
      }
      return DEFAULT_CONTENT;
    } finally {
      setIsLoading(false);
    }
  };

  // Function to update content through the API
  const updateContent = async (page, data, section = null) => {
    try {
      setIsLoading(true);
      
      let url = `${API_URL}/?route=content&page=${page}`;
      
      if (section) {
        url += `&section=${section}`;
      }
      
      console.log('Updating content at:', url, 'with data:', data);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      // If we get here, API is available
      setApiAvailable(true);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API update failed:', response.status, errorText);
        throw new Error(`API update failed: ${response.status} - ${errorText.substring(0, 100)}...`);
      }
      
      const result = await response.json();
      
      
      // Update local state with new content
      await fetchContent(page);
      
      setError(null);
      return result;
    } catch (err) {
      console.error('Error updating content:', err);
      setError(err.message);
      
      // Only set API as unavailable for network errors, not data/parsing errors
      if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setApiAvailable(false);
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial content
  useEffect(() => {
    const loadInitialContent = async () => {
      try {
        await fetchContent();
      } catch (err) {
        console.error('Failed to load initial content:', err);
        // Fallback to default content
        setContent(DEFAULT_CONTENT);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadInitialContent();
  }, []);

  return (
    <ContentContext.Provider 
      value={{ 
        content, 
        isLoading, 
        error, 
        apiAvailable,
        fetchContent, 
        updateContent 
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  
  return context;
};