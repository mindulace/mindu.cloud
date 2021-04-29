<?php

use Engine\Controllers\Index;

$app->get('/', Index::class . ':index')->setName('index.index');

// $app->get('/register', Register::class . ':index')->setName('register.index');

// $app->get('/uptime/{id}', function($request, $response, $args) {
//     $id = $request->getAttribute('id');
    
//     return $response->withJSON(
//         ['id' => $id],
//         200,
//         JSON_UNESCAPED_UNICODE
//     );
// });