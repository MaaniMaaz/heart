import React, { useRef, useEffect } from 'react';

const EmbeddedForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Create the HTML content for the iframe
    const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Embedded Form</title>
        <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen">
        <style>
          body { margin: 0; padding: 0; font-family: 'Raleway', sans-serif; }
          #form-container { padding: 0; width: 100%; }
        </style>
      </head>
      <body>
        <div id="form-container">
          <div id="7b739120-e93f-46d4-9756-92b21485ac33"></div>
        </div>
        
        <script>
          // Handle any errors inside the iframe
          window.onerror = function(message, source, lineno, colno, error) {
            console.log("Caught error inside iframe:", message);
            return true; // Prevents the error from bubbling up
          };
        </script>
        
        <script 
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" 
          clienthub_id="7b739120-e93f-46d4-9756-92b21485ac33" 
          form_url="https://clienthub.getjobber.com/client_hubs/7b739120-e93f-46d4-9756-92b21485ac33/public/work_request/embedded_work_request_form">
        </script>
      </body>
      </html>
    `;

    // Set the iframe content when the component mounts
    if (iframeRef.current) {
      // Set the content for the iframe
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(iframeContent);
      doc.close();
    }
  }, []);

  return (
    <div className="iframe-container" style={{ width: '100%', height: '800px' }}>
      <iframe
        ref={iframeRef}
        title="Contact Form"
        style={{
          border: 'none',
          width: '100%',
          height: '800px',
          overflow: 'visible'
        }}
        sandbox="allow-scripts allow-forms allow-same-origin"
      />
    </div>
  );
};

export default EmbeddedForm;