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
            // Check if the string contains green or pink tags
            if ((strpos($value, '<green>') !== false && strpos($value, '</green>') !== false) ||
                (strpos($value, '<pink>') !== false && strpos($value, '</pink>') !== false)) {
                
                // Create arrays to store matches for both tag types
                $greenMatches = [];
                $pinkMatches = [];
                
                // Extract green-tagged content
                preg_match_all('/<green>(.*?)<\/green>/s', $value, $greenMatches);
                
                // Extract pink-tagged content
                preg_match_all('/<pink>(.*?)<\/pink>/s', $value, $pinkMatches);
                
                // Start with regular text parts split by both green and pink tags
                $parts = preg_split('/<green>.*?<\/green>|<pink>.*?<\/pink>/s', $value);
                $formatted = [];
                
                // Combine green matches
                $allTags = [];
                $allTypes = [];
                
                // Process green tags
                if (!empty($greenMatches[0])) {
                    foreach ($greenMatches[1] as $match) {
                        $allTags[] = $match;
                        $allTypes[] = 'green';
                    }
                }
                
                // Process pink tags
                if (!empty($pinkMatches[0])) {
                    foreach ($pinkMatches[1] as $match) {
                        $allTags[] = $match;
                        $allTypes[] = 'pink';
                    }
                }
                
                // If we have any formatted tags
                if (!empty($allTags)) {
                    // Find the original positions to sort them correctly
                    $positions = [];
                    $tagIndex = 0;
                    
                    // Find positions of green tags
                    foreach ($greenMatches[0] as $match) {
                        $pos = strpos($value, $match);
                        $positions[] = ['pos' => $pos, 'index' => $tagIndex++, 'type' => 'green'];
                    }
                    
                    // Find positions of pink tags
                    foreach ($pinkMatches[0] as $match) {
                        $pos = strpos($value, $match);
                        $positions[] = ['pos' => $pos, 'index' => $tagIndex++, 'type' => 'pink'];
                    }
                    
                    // Sort by position in the original string
                    usort($positions, function($a, $b) {
                        return $a['pos'] - $b['pos'];
                    });
                    
                    // Build the parts array alternating between regular text and formatted text
                    for ($i = 0; $i < count($parts); $i++) {
                        if (!empty($parts[$i])) {
                            $formatted[] = $parts[$i];
                        }
                        
                        if (isset($positions[$i])) {
                            $idx = $positions[$i]['index'];
                            $type = $positions[$i]['type'];
                            $formatted[] = [
                                'type' => $type,
                                'text' => $allTags[$idx]
                            ];
                        }
                    }
                    
                    $result[$key] = $formatted;
                } else {
                    $result[$key] = $value;
                }
            } else {
                $result[$key] = $value;
            }
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