<?php

$container = $app->getContainer();

// View renderer
$container['view'] = function ($c) {
    $view = new Slim\Views\Twig('../templates', [
        'cache' => true
    ]);

    // Instantiate and add Slim specific extension
    $router = $c->get('router');
    $uri    = \Slim\Http\Uri::createFromEnvironment(new \Slim\Http\Environment($_SERVER));

    $view->addExtension(new Slim\Views\TwigExtension($router, $uri));

    return $view;
};