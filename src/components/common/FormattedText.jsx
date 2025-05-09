// src/components/common/FormattedText.jsx
import React from 'react';

const FormattedText = ({ content, className = '' }) => {
  // Handle null, undefined, or empty content
  if (!content) {
    return null;
  }
  
  // Convert to string if it's a number
  if (typeof content === 'number') {
    return <span className={className}>{content}</span>;
  }
  
  // Process string content with green and pink tags
  if (typeof content === 'string') {
    // If no special tags, return as is
    if (!content.includes('<green>') && !content.includes('<pink>')) {
      return <span className={className}>{content}</span>;
    }
    
    // Process both types of tags
    const parts = [];
    let lastIndex = 0;
    let startTag, endTag, tagType;
    
    // Find and process all special tags
    while (true) {
      const greenStart = content.indexOf('<green>', lastIndex);
      const pinkStart = content.indexOf('<pink>', lastIndex);
      
      // Determine which tag comes first (if any)
      if (greenStart === -1 && pinkStart === -1) {
        break; // No more tags
      }
      
      if (greenStart !== -1 && (pinkStart === -1 || greenStart < pinkStart)) {
        // Process green tag
        startTag = greenStart;
        tagType = 'green';
        endTag = content.indexOf('</green>', startTag);
        if (endTag === -1) break; // No closing tag
      } else {
        // Process pink tag
        startTag = pinkStart;
        tagType = 'pink';
        endTag = content.indexOf('</pink>', startTag);
        if (endTag === -1) break; // No closing tag
      }
      
      // Add text before tag
      if (startTag > lastIndex) {
        parts.push(content.substring(lastIndex, startTag));
      }
      
      // Extract the tagged text
      const tagLength = tagType === 'green' ? '<green>'.length : '<pink>'.length;
      const taggedText = content.substring(startTag + tagLength, endTag);
      
      // Add styled text
      parts.push(
        <span 
          key={startTag} 
          className={tagType === 'green' 
            ? "text-[rgba(168,192,130,1)]" 
            : "text-[rgba(255,174,174,1)]"}
        >
          {taggedText}
        </span>
      );
      
      // Update position
      const closingTagLength = tagType === 'green' ? '</green>'.length : '</pink>'.length;
      lastIndex = endTag + closingTagLength;
    }
    
    // Add any remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }
    
    return <span className={className}>{parts}</span>;
  }
  
  // Handle array content
  if (Array.isArray(content)) {
    return (
      <span className={className}>
        {content.map((item, index) => {
          if (typeof item === 'string') {
            return <React.Fragment key={index}>{item}</React.Fragment>;
          }
          
          if (item && typeof item === 'object') {
            if (item.type === 'green' && 'text' in item) {
              return <span key={index} className="text-[rgba(168,192,130,1)]">{item.text}</span>;
            }
            
            if (item.type === 'pink' && 'text' in item) {
              return <span key={index} className="text-[rgba(255,174,174,1)]">{item.text}</span>;
            }
          }
          
          return null;
        })}
      </span>
    );
  }
  
  // Handle object with formatting
  if (typeof content === 'object' && content !== null) {
    // If it's a green formatted object
    if (content.type === 'green' && 'text' in content) {
      return <span className={`text-[rgba(168,192,130,1)] ${className}`}>{content.text}</span>;
    }
    
    // If it's a pink formatted object
    if (content.type === 'pink' && 'text' in content) {
      return <span className={`text-[rgba(255,174,174,1)] ${className}`}>{content.text}</span>;
    }
    
    // For other object types, stringify safely
    try {
      return <span className={className}>{String(content)}</span>;
    } catch (e) {
      return <span className={className}>(Content unavailable)</span>;
    }
  }
  
  // Final fallback
  return <span className={className}>{String(content)}</span>;
};

export default FormattedText;