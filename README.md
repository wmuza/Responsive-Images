# Responsive Images: final version #
This is project that I made during my Udacity's Responsive Images [course](https://www.udacity.com/course/responsive-images--ud882). Initially the blog looked like [this](http://udacity.github.io/responsive-images/downloads/RI-Project-Part-1-Start.zip).
Course journey involves understading responsive images, using grunt to optimize images and automate workflow, I also helped me to go deep in world of  source set `srcset` attribute and `<picture>` element :)

##Getting Started

Make sure imagemagick and graphicsmagick are installed on your machine

First you'll to need make sure you have all `node_modules` and optimized images in <mark>images/</mark> directory.  
`cd` to project's root directory and run the following command:  
```
npm install
```  
There is one dependency that is not listed in package.json (webp-bin); remember to add that in with  
```
npm install webp-bin
```  
or just add this line `npm i -D webp-bin` to your `package.json`  
It's time to run Grunt:  
```
grunt
```
  
Please note that the project is configured to use ImageMagick (as opposed to GraphicsMagick) and requires that to be installed.




##Notes
I used [this](https://github.com/somerandomdude/grunt-webp) grunt plugin to convert all images in images/ folder to [webp](https://developers.google.com/speed/webp/).  
This plugin depends on WebP's cwebp encoder. You'll need to install the [WebP Package](https://developers.google.com/speed/webp/download) or use [webp-bin](https://github.com/yuanyan/node-webp-bin).

--> this can be also done with imagemagick command line tools. Simply used the command in terminal
>mogrify -format jpg *.png

You can read more over [here](http://www.imagemagick.org/script/mogrify.php)

<hr>

`<picture>`  general practices:  
  
  
* Only use `<picture>` element when you want to server files with diffrent format (here jpeg and webp) or you are dealing with art direction case.  
* Only use `media` attribute for resolution switching case
* Now for resolution-switching case we can simply use `srcset` with `img` with either using <mark>1x, 2x</mark> descriptor or <mark>Width</mark> descriptors. Now again there is a limitaion with 1x, 2x.. descriptors you can only have two images (say 2560px wide and 1280px wide) now It would be complete waste on a 320px wide viewport. This can be handle in two ways:  
	* We use use `media` attribure in `<picture>` to provide different images for diffrent viewport width. For our responsive blog I have used this technique. Providing large 1x, 2x images for larger viewport, medium 1x, 2x for medium sized viewport and small 1x, 2x smaller viewports. Okay I know it's not going good :( but trust me It'll get better :P . Now way we are doing it here is not recommened because we are forcing browser to choose images instead of letting browser decide what is best. So bottom line - *avoid using `media` attribute for resolution switching case*  
	* Now other way would be much simpler - Use <mark>Width</mark> descripots. Simply use `srcset` with `img` and provide images with different resolution. This is much easier and here we are letting browser decide what is best for user. In our responsive images blog it can done for resolution-switching case as: `<img src="images/default,jpg srcset="large2x.jpg 1600w, large1x.jpg 800, medium2x.jpg 1024w, medium1x.jpg 640px, small.jpg 320px" alt=""` See I told you naa.. I gets better :B. Now a simple question would "what if I want to provide webp support?" Well it's simply use `<picture>` element and there will be no requirment for `media` attribute. Simply use `<source>` with `type` specified as `image/webp` and `image/jpeg`  
——

