<?php
// File: save-scores.php

// Read the JSON data sent from the client
$jsonData = file_get_contents('php://input');

// Decode the JSON data into an associative array
$scores = json_decode($jsonData, true);

// Validate the scores data
if (is_array($scores)) {
    // Path to the JSON file where scores will be saved
    $jsonFile = 'scores.json';

    // Encode the scores data back to JSON format
    $jsonEncoded = json_encode($scores, JSON_PRETTY_PRINT);

    // Save the JSON data to the file
    file_put_contents($jsonFile, $jsonEncoded);

    // Send a response to the client
    http_response_code(200);
    echo 'Scores saved successfully.';
} else {
    // Invalid data received
    http_response_code(400);
    echo 'Invalid data received.';
}
?>