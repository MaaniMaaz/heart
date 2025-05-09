// src/components/Admin/ContactEditor.jsx
import React, { useState } from 'react';
import ContentEditor from './ContentEditor';

const ContactEditor = () => {
  const [selectedSection, setSelectedSection] = useState('header');
  
  const sections = [
    { id: 'header', name: 'Page Header' },
    { id: 'contactInfo', name: 'Contact Information' },
    { id: 'locationSection', name: 'Location Section' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold font-['Raleway'] mb-6">Edit Request Quote Page Content</h2>
      
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
          page="contact" 
          section={selectedSection} 
        />
      </div>
      
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Editing Tips:</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>Use &lt;green&gt;text&lt;/green&gt; tags to highlight text in green</li>
          <li>Use &lt;pink&gt;text&lt;/pink&gt; tags to highlight text in pink</li>
          <li>Note: The form itself is not editable through the CMS</li>
          <li>Changes will be reflected immediately on the website after saving</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactEditor;