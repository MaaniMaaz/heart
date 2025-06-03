// src/components/common/FormattedText.jsx (Updated with newline support)
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
  
  // Process string content with green, pink, strong tags, and newlines
  if (typeof content === 'string') {
    // First, split by newlines and process each part
    const processWithNewlines = (text) => {
      const lines = text.split('\n');
      return lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ));
    };
    
    // If no special tags, just handle newlines
    if (!content.includes('<green>') && !content.includes('<pink>') && !content.includes('<strong>')) {
      return <span className={className}>{processWithNewlines(content)}</span>;
    }
    
    // Define tag configurations
    const tagConfigs = [
      {
        openTag: '<green>',
        closeTag: '</green>',
        type: 'green',
        className: 'text-[rgba(168,192,130,1)]'
      },
      {
        openTag: '<pink>',
        closeTag: '</pink>',
        type: 'pink',
        className: 'text-[rgba(255,174,174,1)]'
      },
      {
        openTag: '<strong>',
        closeTag: '</strong>',
        type: 'strong',
        className: 'font-bold'
      }
    ];
    
    const parts = [];
    let lastIndex = 0;
    
    // Find and process all special tags
    while (true) {
      let earliestTag = null;
      let earliestIndex = content.length;
      
      // Find the earliest occurring tag
      tagConfigs.forEach(config => {
        const index = content.indexOf(config.openTag, lastIndex);
        if (index !== -1 && index < earliestIndex) {
          earliestIndex = index;
          earliestTag = config;
        }
      });
      
      // If no more tags found, break
      if (!earliestTag) {
        break;
      }
      
      // Find the closing tag
      const closeIndex = content.indexOf(earliestTag.closeTag, earliestIndex);
      if (closeIndex === -1) {
        break; // No closing tag found
      }
      
      // Add text before the tag (with newline processing)
      if (earliestIndex > lastIndex) {
        const beforeText = content.substring(lastIndex, earliestIndex);
        parts.push(processWithNewlines(beforeText));
      }
      
      // Extract the tagged text
      const taggedText = content.substring(
        earliestIndex + earliestTag.openTag.length, 
        closeIndex
      );
      
      // Add styled text - handle nested tags by recursively processing
      parts.push(
        <span 
          key={earliestIndex} 
          className={earliestTag.className}
        >
          <FormattedText content={taggedText} />
        </span>
      );
      
      // Update position
      lastIndex = closeIndex + earliestTag.closeTag.length;
    }
    
    // Add any remaining text (with newline processing)
    if (lastIndex < content.length) {
      const remainingText = content.substring(lastIndex);
      parts.push(processWithNewlines(remainingText));
    }
    
    return <span className={className}>{parts}</span>;
  }
  
  // Handle array content
  if (Array.isArray(content)) {
    return (
      <span className={className}>
        {content.map((item, index) => {
          if (typeof item === 'string') {
            return <FormattedText key={index} content={item} />;
          }
          
          if (item && typeof item === 'object') {
            if (item.type === 'green' && 'text' in item) {
              return (
                <span key={index} className="text-[rgba(168,192,130,1)]">
                  <FormattedText content={item.text} />
                </span>
              );
            }
            
            if (item.type === 'pink' && 'text' in item) {
              return (
                <span key={index} className="text-[rgba(255,174,174,1)]">
                  <FormattedText content={item.text} />
                </span>
              );
            }
            
            if (item.type === 'strong' && 'text' in item) {
              return (
                <span key={index} className="font-bold">
                  <FormattedText content={item.text} />
                </span>
              );
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
      return (
        <span className={`text-[rgba(168,192,130,1)] ${className}`}>
          <FormattedText content={content.text} />
        </span>
      );
    }
    
    // If it's a pink formatted object
    if (content.type === 'pink' && 'text' in content) {
      return (
        <span className={`text-[rgba(255,174,174,1)] ${className}`}>
          <FormattedText content={content.text} />
        </span>
      );
    }
    
    // If it's a strong formatted object
    if (content.type === 'strong' && 'text' in content) {
      return (
        <span className={`font-bold ${className}`}>
          <FormattedText content={content.text} />
        </span>
      );
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