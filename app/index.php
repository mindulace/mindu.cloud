<?php

require '../vendor/autoload.php';

$settings = require __DIR__ . '/../src/settings.php';

$container = new Slim\Container($settings);
$app       = new Slim\App($container);

// Dependencies
require __DIR__ . '/../src/dependencies.php';

// Middleware
require __DIR__ . '/../src/middleware.php';

// Routes
require __DIR__ . '/../src/routes.php';

$app->run();