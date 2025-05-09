<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/utils.php';

// Handle content API requests
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Get all content or specific page content
        $page = isset($_GET['page']) ? $_GET['page'] : null;
        $section = isset($_GET['section']) ? $_GET['section'] : null;
        $format = isset($_GET['format']) && $_GET['format'] === 'true';
        
        if ($page) {
            $content = getContent($page, $section);
            
            if ($content === null) {
                sendErrorResponse("Content not found", 404);
            }
            
            // Process content formatting if requested
            if ($format) {
                $content = processContentFormatting($content);
            }
            
            sendJsonResponse($content);
        }
        
        // Return all content
        $content = readContentData();
        
        // Process content formatting if requested
        if ($format) {
            $content = processContentFormatting($content);
        }
        
        sendJsonResponse($content);
        break;
        
    case 'POST':
    case 'PUT':
        // Update content
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            sendErrorResponse('Invalid JSON data provided');
        }
        
        $page = isset($_GET['page']) ? $_GET['page'] : null;
        $section = isset($_GET['section']) ? $_GET['section'] : null;
        
        if (!$page) {
            sendErrorResponse('Page parameter is required');
        }
        
        // Update content
        $success = updateContent($page, $input, $section);
        
        if ($success) {
            sendJsonResponse([
                'message' => 'Content updated successfully',
                'page' => $page,
                'section' => $section
            ]);
        } else {
            sendErrorResponse('Failed to save content', 500);
        }
        break;
        
    default:
        sendErrorResponse('Method not allowed', 405);
}