<?php
/**
 * ACME Bricks & Blocks - SPA Server Router
 * Handles SPA routes and returns real HTTP 404 status for invalid / nonexistent URLs.
 */

$rawUri = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($rawUri, PHP_URL_PATH);
$decodedPath = urldecode($path);
$trimmed = trim(strtolower($decodedPath), '/');

// Valid static core pages & clean URL slugs
$validRoutes = [
    '',
    'home',
    'about',
    'about-us',
    'products',
    'gallery',
    'contact',
    'contact-us',
    'calculator',
    'sitemap',
    'terms',
    'terms-and-conditions',
    'terms-conditions',
    'terms-of-service',
    'privacy',
    'privacy-policy',
    'product',
    // Product catalog slugs
    'fly-ash-bricks',
    'fly-ash-bricks-manufacturer-coimbatore',
    'fly-ash-blocks',
    'fly-ash-blocks-manufacturer-coimbatore',
    'paver-blocks',
    'paver-blocks-manufacturer-coimbatore',
    'interlock-bricks',
    'interlock-bricks-manufacturer-coimbatore',
    'solid-blocks',
    'solid-blocks-manufacturer-coimbatore',
    'aac-blocks',
    'aac-blocks-manufacturer-coimbatore'
];

$isValid = in_array($trimmed, $validRoutes, true);

// Set proper HTTP status header: 200 for valid routes, 404 for invalid URLs
if ($isValid) {
    http_response_code(200);
} else {
    http_response_code(404);
}

header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

$targetHtml = __DIR__ . '/index.html';
if (file_exists($targetHtml)) {
    readfile($targetHtml);
} else {
    echo '<!doctype html><html><head><meta charset="UTF-8"><title>404 Not Found</title></head><body><h1>404 - Page Not Found</h1></body></html>';
}
exit();
