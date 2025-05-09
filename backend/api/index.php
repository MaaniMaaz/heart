<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/utils.php';

// Simple API router
$route = isset($_GET['route']) ? $_GET['route'] : '';

switch ($route) {
    case 'content':
    case 'content/':
        include __DIR__ . '/content.php';
        break;
        
    case 'test':
    case 'test/':
        include __DIR__ . '/test.php';
        break;
        
    default:
        // API home or invalid route
        sendJsonResponse([
            'name' => 'Heart & Home Green Clean CMS API',
            'version' => '1.0.0',
            'endpoints' => [
                '/api/' => 'API information',
                '/api/?route=test' => 'Test API functionality',
                '/api/?route=content' => 'Get all content',
                '/api/?route=content&page=home' => 'Get home page content',
                '/api/?route=content&page=home&section=hero' => 'Get home page hero section',
                '/api/?route=content&page=home&format=true' => 'Get home page content with formatting processed'
            ],
            'timestamp' => time()
        ]);
}