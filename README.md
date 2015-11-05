# FA Banner Rotator

This small plugin takes the banner on your Forumotion forum and turns it into a slide show which allows you to display a plethora of banners !

![preview](http://i21.servimg.com/u/f21/18/21/41/30/captur12.gif)

**Jump to :**

- [Installation](#installation)
- [Modifications](#modifications)

## Installation

To install this plugin go to your Admin Panel and then Modules > JavaScript codes management, and create a new script with the following settings.

**Title :** Banner Rotator

**Placement :** In all the pages

Paste the [raw source](https://raw.githubusercontent.com/SethClydesdale/fa-banner-rotator/master/banner_rotator.js) into the text area and click submit

Read the next section for information on the configuration settings.

## Modifications

This plugin contains various settings at the top of the script which you can modify. Each setting will be listed below along with a description.

**images :** At the top of the script is an array of images that are displayed after a set amount of time. You can include as many images as you want, so long as each image URL is separated by a comma.

**start_delay :** Defines the start up delay in miliseconds (ms) before the default banner is rotated.

**duration :** Defines the duration in miliseconds (ms) that each rotated banner is displayed.

**height :** Defines a default height for all images in the rotation. The measurement used can be px, em, %, etc.. By default, the value is set to [b]auto[/b] which is the default height of each image. It's recommend to use images of the same dimensions, as images of different sizes can cause jumping, stretching, etc.. Use this option to set a default height if you experience anything of the like.

**fade_image :** When set to ``true`` the images will fade in and out. Setting this option to ``false`` will disable fading.

**fade_duration :** Defines how fast the fading should be in miliseconds (ms).

**keep_initial :** When set to ``true`` this option will keep your default banner, and add it to the rotation as well. Set this option to ``false`` if you want to remove the default banner from the rotation.

**remember_position :** When set to ``true`` this option will remember the last banner it was on, so when you change the page it'll start up where it left off. Set this option to ``false`` if you want the banner slide show to start over each time.

**preload :** When this option is set to ``true`` all images in the script will be preloaded. This can help prevent jumping and partially loaded images. If you don't want the images to be preloaded simply turn this option to ``false``.
