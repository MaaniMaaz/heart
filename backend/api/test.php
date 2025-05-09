<?php
require_once __DIR__ . '/../config.php';
require_once __DIR__ . '/utils.php';

// Simple test endpoint to verify API functionality
$response = [
    'status' => 'success',
    'message' => 'API is working correctly',
    'timestamp' => time(),
    'php_version' => phpversion()
];

sendJsonResponse($response);