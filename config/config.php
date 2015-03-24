<?php
/**
 * Created by PhpStorm.
 * User: hotovec
 * Date: 16.2.2015
 * Time: 22:08
 */


$siteData = array(

    'dump' => true, // tmp dumping block on/off

    'name' => 'My Site Name',
    'copyright' => '@laPixla.com'
);

$pageData = array(
    'title' => 'My Page',

    'facebook' => array(
        'image' => '/assets/facebook-default-share-image.png'
    ),

    'meta' => array(
        'keywords' => 'page keywords',
        'description' => 'page description'
    ),

    'url' => 'My Page',
    'keywords' => 'My Page',
    'description' => 'My Page'
);


$navbarData = array(
    'hasBgImage' => false,
    'isBoxed' => false,
    'isSticky' => false,

    'logo' => array(
        'has-svg' => false,
        'url' => '/assets/site-logo.png',
        'url-inverted' => '/assets/site-logo-inverted.png',
        'alt' => 'Site logo alt',
        'link' => '/'
    ),

    'menuPrimary' => array(
        array(
            'url' => '/link-url.html',
            'title' => 'link1',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'link2',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'link3',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'link4',
            'target' => '',
            'active' => false
        ),
    ),

    'menuSecondary' => array(
        array(
            'url' => '/link-url.html',
            'title' => 'Kontakt',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'Firma a lidé',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'Reference',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'Objekty dle účelu',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'produkty a služby',
            'target' => '',
            'active' => false
        ),
    ),

    'menuSocial' => array(
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link1',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link2',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link3',
            'target' => '',
            'active' => false
        ),
    ),
);

$footerData = array(
    'hasBgImage' => false,
    'isBoxed' => false,
    'isSticky' => false,

    'logo' => array(
        'has-svg' => false,
        'url' => '/assets/site-logo.png',
        'url-inverted' => '/assets/site-logo-inverted.png',
        'alt' => 'Site logo alt',
        'link' => '/'
    ),

    'menuPrimary' => array(
        array(
            'url' => '/link-url.html',
            'title' => 'link1',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'link2',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'link3',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'link4',
            'target' => '',
            'active' => false
        ),
    ),

    'menuSecondary' => array(
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link1',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link2',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link3',
            'target' => '',
            'active' => false
        ),
    ),

    'menuSocial' => array(
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link1',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link2',
            'target' => '',
            'active' => false
        ),
        array(
            'url' => '/link-url.html',
            'title' => 'sec-link3',
            'target' => '',
            'active' => false
        ),
    ),
);

$articleData = array(
    'title' => 'My Page',

    'facebook' => array(
        'image' => '/assets/facebook-default-share-image.png'
    ),

    'meta' => array(
        'keywords' => 'page keywords',
        'description' => 'page description'
    ),

    'author' => array(
        'name' => 'Jon Doe',
        'profile' => '/profile/jon-doe.html',
        'twitter' => '@jonDoe',
        'facebook' => '@jonDoe',
        'instagram' => '@jonDoe'
    ),

    'image' => array(
        'alt' => 'ArticleImage alt',
        'url' => '/assets/default-article-image.jpg'
    ),

    'teaser' => '<p>article teaser</p>',
    'body' => '<p>article body</p>',

    'keywords' => 'My Page',
    'description' => 'My Page'
);


// pass data to twig
$data = array(
    'navbar' => $navbarData,
    'footer' => $footerData,
    'page' => $pageData,
    'site' => $siteData,
);
