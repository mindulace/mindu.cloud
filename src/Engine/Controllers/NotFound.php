<?php

namespace Engine\Controllers;

use Slim\Container;
use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Views\Twig;

class NotFound {
    const HTTP_NOT_FOUND = '404';

    /**
     * @var Twig
     */
    private $view;

    /**
     * @param Container $container
     */
    public function __construct(Container $container) {
        $this->view = $container->get('view');
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @param Response $response
     * @return void
     */
    public function index(Request $request, Response $response) {
        $args['name'] = "test";
        
        return $this->view->render($response, 'not_found/index.html.twig', [
            'name'  => $args['name']
        ]);
    }
}