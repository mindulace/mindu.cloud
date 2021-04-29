<?php

use Engine\Controllers\Index;
use Engine\Controllers\Github;
use Engine\Controllers\NotFound;

/** @var Slim\App $app */
$app->get('/', Index::class . ':index')->setName('index.index');
$app->get('/github', Github::class . ':index')->setName('github.index');

$container['notFoundHandler'] = [(new NotFound($container)), 'index'];

// $app->get('/register', Register::class . ':index')->setName('register.index');

// $app->get('/uptime/{id}', function($request, $response, $args) {
//     $id = $request->getAttribute('id');
    
//     return $response->withJSON(
//         ['id' => $id],
//         200,
//         JSON_UNESCAPED_UNICODE
//     );
// });