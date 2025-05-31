<?php
/**
 * Read content from the JSON file
 * 
 * @return array The content data
 */
function readContentData() {
    if (!file_exists(CONTENT_FILE)) {
        // Create default content structure if file doesn't exist
        $defaultContentJson = file_get_contents(__DIR__ . '/../data/content.json');
        
        if ($defaultContentJson === false) {
            logMessage("ERROR: Could not read default content template");
            return [];
        }
        
        $defaultContent = json_decode($defaultContentJson, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            logMessage("ERROR: Invalid JSON in default content template: " . json_last_error_msg());
            return [];
        }
        
        // Make sure the data directory exists
        if (!is_dir(DATA_DIR)) {
            mkdir(DATA_DIR, 0755, true);
        }
        
        // Save default content to file
        file_put_contents(CONTENT_FILE, $defaultContentJson);
        return $defaultContent;
    }
    
    // Read the content file
    $contentJson = file_get_contents(CONTENT_FILE);
    
    if ($contentJson === false) {
        logMessage("ERROR: Could not read content file: " . CONTENT_FILE);
        return [];
    }
    
    $content = json_decode($contentJson, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        logMessage("ERROR: Invalid JSON in content file: " . json_last_error_msg());
        return [];
    }
    
    return $content;
}

/**
 * Save content to the JSON file
 * 
 * @param array $data The content data to save
 * @return bool True if successful, false otherwise
 */
function saveContentData($data) {
    // Create data directory if it doesn't exist
    if (!is_dir(DATA_DIR)) {
        mkdir(DATA_DIR, 0755, true);
    }
    
    $result = file_put_contents(CONTENT_FILE, json_encode($data, JSON_PRETTY_PRINT));
    
    if ($result === false) {
        logMessage("ERROR: Failed to write content to file: " . CONTENT_FILE);
        return false;
    }
    
    logMessage("SUCCESS: Content updated successfully");
    return true;
}

/**
 * Get content for a specific page and section
 * 
 * @param string $page The page name
 * @param string|null $section The section name (optional)
 * @return array|null The content or null if not found
 */
function getContent($page, $section = null) {
    $content = readContentData();
    
    if (!isset($content[$page])) {
        return null;
    }
    
    if ($section !== null) {
        return isset($content[$page][$section]) ? $content[$page][$section] : null;
    }
    
    return $content[$page];
}

/**
 * Update content for a specific page and section
 * 
 * @param string $page The page name
 * @param array $data The data to update
 * @param string|null $section The section name (optional)
 * @return bool True if successful, false otherwise
 */
function updateContent($page, $data, $section = null) {
    $content = readContentData();
    
    if (!isset($content[$page]) && $section !== null) {
        $content[$page] = [];
    }
    
    if ($section !== null) {
        $content[$page][$section] = $data;
    } else {
        $content[$page] = $data;
    }
    
    return saveContentData($content);
}

/**
 * Process a single string for formatting tags
 * 
 * @param string $text The text to process
 * @return array|string The processed content
 */
function processStringFormatting($text) {
    // If no special tags, return as is
    if (strpos($text, '<green>') === false && 
        strpos($text, '<pink>') === false && 
        strpos($text, '<strong>') === false) {
        return $text;
    }
    
    $result = [];
    $currentPos = 0;
    $textLength = strlen($text);
    
    while ($currentPos < $textLength) {
        // Find the next tag
        $nextGreen = strpos($text, '<green>', $currentPos);
        $nextPink = strpos($text, '<pink>', $currentPos);
        $nextStrong = strpos($text, '<strong>', $currentPos);
        
        // Find the earliest tag
        $nextTag = null;
        $nextPos = $textLength;
        $tagType = null;
        
        if ($nextGreen !== false && $nextGreen < $nextPos) {
            $nextPos = $nextGreen;
            $tagType = 'green';
            $nextTag = '<green>';
        }
        
        if ($nextPink !== false && $nextPink < $nextPos) {
            $nextPos = $nextPink;
            $tagType = 'pink';
            $nextTag = '<pink>';
        }
        
        if ($nextStrong !== false && $nextStrong < $nextPos) {
            $nextPos = $nextStrong;
            $tagType = 'strong';
            $nextTag = '<strong>';
        }
        
        // Add text before the tag
        if ($nextPos > $currentPos) {
            $beforeText = substr($text, $currentPos, $nextPos - $currentPos);
            if (!empty($beforeText)) {
                $result[] = $beforeText;
            }
        }
        
        // If no more tags, break
        if ($tagType === null) {
            break;
        }
        
        // Find the closing tag
        $closeTag = '</' . $tagType . '>';
        $closePos = strpos($text, $closeTag, $nextPos);
        
        if ($closePos === false) {
            // No closing tag found, treat as regular text
            $result[] = substr($text, $nextPos);
            break;
        }
        
        // Extract content between tags
        $tagContent = substr($text, $nextPos + strlen($nextTag), $closePos - $nextPos - strlen($nextTag));
        
        // Recursively process the content inside the tags
        $processedContent = processStringFormatting($tagContent);
        
        // Add the formatted content
        $result[] = [
            'type' => $tagType,
            'text' => $processedContent
        ];
        
        // Move past the closing tag
        $currentPos = $closePos + strlen($closeTag);
    }
    
    // If we only have one plain text element, return it as string
    if (count($result) === 1 && is_string($result[0])) {
        return $result[0];
    }
    
    return $result;
}

/**
 * Process special formatting tags in content
 * 
 * @param array $content The content to process
 * @return array The processed content
 */
function processContentFormatting($content) {
    if (!is_array($content)) {
        return $content;
    }
    
    $result = [];
    
    foreach ($content as $key => $value) {
        if (is_array($value)) {
            $result[$key] = processContentFormatting($value);
        } else if (is_string($value)) {
            $result[$key] = processStringFormatting($value);
        } else {
            $result[$key] = $value;
        }
    }
    
    return $result;
}

/**
 * Send JSON response
 * 
 * @param mixed $data The data to send
 * @param int $statusCode HTTP status code
 */
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data);
    exit;
}

/**
 * Send error response
 * 
 * @param string $message Error message
 * @param int $statusCode HTTP status code
 */
function sendErrorResponse($message, $statusCode = 400) {
    logMessage("ERROR: " . $message);
    sendJsonResponse(['error' => $message], $statusCode);
}