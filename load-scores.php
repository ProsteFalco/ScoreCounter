<?php
// File: load-scores.php

// Path to the JSON file where scores are stored
$jsonFile = 'scores.json';

// Check if the JSON file exists
if (file_exists($jsonFile)) {
    // Read the JSON data from the file
    $jsonData = file_get_contents($jsonFile);

    // Send the JSON data as the response
    header('Content-Type: application/json');
    echo $jsonData;
} else {
    // JSON file not found
    http_response_code(404);
    echo 'Scores not found.';
}
?>