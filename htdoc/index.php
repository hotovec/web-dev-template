<?php
/**
 * Basic bootstrap file, for twig templating
 *
 * Created by PhpStorm.
 * User: hotovec
 * Date: 16.2.2015
 * Time: 11:31
 *
 */
if (isset($argv)) {
    $x = parse_str(implode('&', array_slice($argv, 1)), $_GET);
}

require_once '../config/config.php'; // load test data file
require_once '../vendor/autoload.php';

$bakeStaticFiles = false;
$debugTwig = false;

$loader = new Twig_Loader_Filesystem('./templates');
$twig = new Twig_Environment($loader, array(
    //'cache' => '../.twig-cache',
    'cache' => false,
    'debug' => $debugTwig,
));

$twig->addExtension(new Twig_Extension_Debug());

$renderOutput = '';

if (isset($_GET['tpl'])) {
    $renderOutput = $twig->render($_GET['tpl'] . '.twig', $data);
    if ($bakeStaticFiles) {
        $filename = './../dist/tpl' . $_GET['tpl'] . '.html';
        file_put_contents($filename, $renderOutput);
    }
} else {
    $renderOutput = $twig->render('index.twig', $data);
}

echo $renderOutput;
