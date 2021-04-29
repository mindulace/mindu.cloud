<?php

namespace Engine\Controllers;

use Slim\Container;
use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Views\Twig;

class Github {
    const GITHUB_URL = "https://github.com/Mindulace";

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
        return $response->withRedirect(self::GITHUB_URL);
    }
}