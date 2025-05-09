<?php
// Disable displaying PHP errors to the browser
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Define configuration constants
define('DATA_DIR', __DIR__ . '/data');
define('CONTENT_FILE', DATA_DIR . '/content.json');
define('LOG_FILE', DATA_DIR . '/api.log');

// Enable CORS for development
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Simple logging function
function logMessage($message) {
    $timestamp = date('[Y-m-d H:i:s]');
    $logEntry = $timestamp . ' ' . $message . PHP_EOL;
    
    if (!is_dir(DATA_DIR)) {
        mkdir(DATA_DIR, 0755, true);
    }
    
    file_put_contents(LOG_FILE, $logEntry, FILE_APPEND);
}

// Log errors instead of displaying them
function errorHandler($errno, $errstr, $errfile, $errline) {
    $errorMessage = "PHP Error [$errno]: $errstr in $errfile on line $errline";
    logMessage($errorMessage);
    
    // Don't display the error
    return true;
}

// Set the custom error handler
set_error_handler('errorHandler');

// Handle fatal errors
register_shutdown_function(function() {
    $error = error_get_last();
    if ($error !== null && $error['type'] === E_ERROR) {
        logMessage("Fatal Error: {$error['message']} in {$error['file']} on line {$error['line']}");
        
        // Send a proper JSON error response
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Internal server error']);
        exit;
    }
});

// Make sure data directory exists
if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}

// Create content.json if it doesn't exist
if (!file_exists(CONTENT_FILE)) {
    $defaultContent = [
        'home' => [
            'hero' => [
                'mainTitle' => "Eco-Friendly Cleaning Services in Arizona West Valley",
                'description' => "Welcome to <green>Heart & Home Green Clean</green>, your trusted provider of eco-friendly house cleaning services in Arizona West Valley. We specialize in non-toxic, sustainable cleaning solutions that keep your home fresh, safe, and spotless. Whether you need routine cleaning, deep cleaning, or move-in/move-out services, we're here to help.",
                'buttonText' => "Get Your Free Estimate",
                'badges' => [
                    [
                        'title' => "Safe",
                        'description' => "Non-Toxic & Pet-Friendly Cleaning Solutions"
                    ],
                    [
                        'title' => "Trusted",
                        'description' => "Eco-Friendly & Family-Owned"
                    ],
                    [
                        'title' => "Reliable",
                        'description' => "Fully Insured & Bonded for Your Peace of Mind"
                    ]
                ]
            ]
        ]
    ];
    
    file_put_contents(CONTENT_FILE, json_encode($defaultContent, JSON_PRETTY_PRINT));
    logMessage("Created default content.json file");
}