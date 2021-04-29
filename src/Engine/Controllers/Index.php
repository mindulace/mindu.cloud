<?php

namespace Engine\Controllers;

use Slim\Container;
use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Views\Twig;

class Index {
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
        
        return $this->view->render($response, 'index/index.html.twig', [
            'name'  => $args['name']
        ]);
    }
}