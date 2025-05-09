// src/components/Admin/ContentEditor.jsx
import React, { useState, useEffect } from 'react';
import { useContent } from '../../contexts/ContentContext';

const ContentEditor = ({ page, section = null, onSave = null }) => {
  const { content, fetchContent, updateContent, isLoading } = useContent();
  const [editableContent, setEditableContent] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch content when component mounts
  useEffect(() => {
    const loadContent = async () => {
      // Fetch without formatting to get raw content with tags
      const data = await fetchContent(page, section, false);
      if (data) {
        setEditableContent(data);
      }
    };
    
    loadContent();
  }, [page, section]);

  // Helper function to create form inputs based on data type
  const renderFormField = (value, path = []) => {
    if (value === null || value === undefined) {
      return null;
    }

    // Render appropriate input based on value type
    if (typeof value === 'string') {
      // Check if the string is multi-line
      const isMultiLine = value.includes('\n') || value.length > 100;
      
      return isMultiLine ? (
        <textarea
          value={value}
          onChange={(e) => handleChange(e.target.value, path)}
          className="w-full p-2 border border-gray-300 rounded resize-y"
          rows={Math.min(10, value.split('\n').length + 2)}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value, path)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      );
    }

    if (typeof value === 'number') {
      return (
        <input
          type="number"
          value={value}
          onChange={(e) => handleChange(parseFloat(e.target.value), path)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      );
    }

    if (typeof value === 'boolean') {
      return (
        <select
          value={value.toString()}
          onChange={(e) => handleChange(e.target.value === 'true', path)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      );
    }

    // if (Array.isArray(value)) {
    //   return (
    //     <div className="ml-4 mt-2 border-l-2 border-gray-200 pl-2">
    //       {value.map((item, index) => (
    //         <div key={index} className="mb-4 pb-4 border-b border-gray-100">
    //           <div className="flex justify-between items-center mb-2">
    //             <h4 className="text-lg font-medium">Item {index + 1}</h4>
    //             <button
    //               onClick={() => handleRemoveArrayItem(path, index)}
    //               className="px-2 py-1 bg-red-500 text-white rounded text-xs"
    //             >
    //               Remove
    //             </button>
    //           </div>
    //           {renderFormField(item, [...path, index])}
    //         </div>
    //       ))}
    //       <button
    //         onClick={() => handleAddArrayItem(path, value)}
    //         className="px-3 py-1 bg-green-500 text-white rounded mt-2 text-sm"
    //       >
    //         Add Item
    //       </button>
    //     </div>
    //   );
    // }

    if (typeof value === 'object') {
      return (
        <div className="ml-4 mt-2">
          {Object.entries(value).map(([key, val]) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formatLabel(key)}
                {typeof val === 'string' && (
                <span className="ml-2 text-xs text-gray-500">
                    (You can use &lt;green&gt;text&lt;/green&gt; to highlight text in green or &lt;pink&gt;text&lt;/pink&gt; to highlight text in pink)
                </span>
                )}
              </label>
              {renderFormField(val, [...path, key])}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  // Format a camelCase key to Title Case with spaces
  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  // Helper function to set a nested value in the content object
  const setNestedValue = (obj, path, value) => {
    if (path.length === 0) return value;
    
    const result = Array.isArray(obj) ? [...obj] : { ...obj };
    let current = result;
    
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      current[key] = Array.isArray(current[key]) 
        ? [...current[key]] 
        : { ...current[key] };
      current = current[key];
    }
    
    current[path[path.length - 1]] = value;
    return result;
  };

  // Handle form field changes
  const handleChange = (value, path) => {
    setEditableContent((prev) => setNestedValue(prev, path, value));
  };

//   // Handle array item removal
//   const handleRemoveArrayItem = (path, index) => {
//     setEditableContent((prev) => {
//       const arrayPath = [...path];
//       const newContent = { ...prev };
      
//       // Get reference to the array
//       let current = newContent;
//       for (const key of arrayPath) {
//         current = current[key];
//       }
      
//       // Filter out the item at index
//       const newArray = current.filter((_, i) => i !== index);
      
//       // Set the updated array back in the content object
//       return setNestedValue(prev, arrayPath, newArray);
//     });
//   };

//   // Handle array item addition
//   const handleAddArrayItem = (path, currentArray) => {
//     const lastItem = currentArray[currentArray.length - 1];
//     let newItem;
    
//     if (typeof lastItem === 'string') {
//       newItem = '';
//     } else if (typeof lastItem === 'number') {
//       newItem = 0;
//     } else if (typeof lastItem === 'boolean') {
//       newItem = false;
//     } else if (typeof lastItem === 'object') {
//       // Create a new object with same structure but empty values
//       newItem = {};
//       Object.keys(lastItem).forEach(key => {
//         if (typeof lastItem[key] === 'string') {
//           newItem[key] = '';
//         } else if (typeof lastItem[key] === 'number') {
//           newItem[key] = 0;
//         } else if (typeof lastItem[key] === 'boolean') {
//           newItem[key] = false;
//         } else if (Array.isArray(lastItem[key])) {
//           newItem[key] = [];
//         } else if (typeof lastItem[key] === 'object') {
//           newItem[key] = {};
//         }
//       });
//     } else {
//       // Fallback for empty arrays or unknown types
//       newItem = '';
//     }
    
//     setEditableContent((prev) => {
//       const newArray = [...(prev[path] || []), newItem];
//       return setNestedValue(prev, path, newArray);
//     });
//   };

  // Save content changes
  const handleSave = async () => {
    try {
      setError(null);
      setSaving(true);
      setSuccess(false);
      
      const result = await updateContent(page, editableContent, section);
      
      if (result) {
        setSuccess(true);
        if (onSave) {
          onSave(editableContent);
        }
      }
    } catch (err) {
      console.error('Error saving content:', err);
      setError(err.message || 'Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  if (isLoading && !editableContent) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading content...</p>
      </div>
    );
  }

  if (!editableContent) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Failed to load content</p>
        <button
          onClick={() => fetchContent(page, section, false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-1">
        Edit {section ? `${page} - ${section}` : page} Content
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Changes will be visible on the website immediately after saving.
      </p>
      
      <div className="mb-4">
        {renderFormField(editableContent)}
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Content saved successfully!
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

export default ContentEditor;