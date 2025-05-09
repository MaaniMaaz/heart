// src/components/Admin/ServicesEditor.jsx
import React, { useState } from 'react';
import ContentEditor from './ContentEditor';

const ServicesEditor = () => {
  const [selectedSection, setSelectedSection] = useState('header');
  
  const sections = [
    { id: 'header', name: 'Page Header' },
    { id: 'subheader', name: 'Subheader' },
    { id: 'experienceSection', name: 'Experience Section' },
    { id: 'servicesSection', name: 'Services Cards' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold font-['Raleway'] mb-6">Edit Services Page Content</h2>
      
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
      
      <div className="mb-8">
        <ContentEditor 
          page="services" 
          section={selectedSection} 
        />
      </div>
      
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Editing Tips:</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Use &lt;green&gt;text&lt;/green&gt; tags to highlight text in green</li>
          <li>Use &lt;pink&gt;text&lt;/pink&gt; tags to highlight text in pink</li>
          <li>For service cards, you can edit titles, descriptions, and detailed content</li>
          <li>Each service has a "details" section with lists of included items</li>
          <li>The popups that appear when clicking "View More" are editable through the Services Cards section</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesEditor;