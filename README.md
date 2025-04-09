# rive-on-webflow
Code and info for enhancing Rive integrations with Webflow sites

Webflow's native Rive integration is a great way to start adding simple animations and interactions to your site, but you may soon run into some of its limitations. This repo contains code to help you level up your Webflow+Rive integrations by taking advantage of Rive's web runtime. 

## Getting Started
To use the code provided here, you'll need to add an ID to the Rive element(s) in your Webflow project. The sample code uses `rive-canvas`, but you can change it to whatever you want. Just be sure to update the code so that the ID in Webflow and the ID in the code match. 


## resize-with-window
Rive provides a way to redraw the artwork at the optimized resolution for the size of its canvas. In Webflow, the canvas size is set when the page loads and doesn't update if the window is resized. That means if the user loads the page at a small size and then makes the window bigger, the artwork will become pixelated. Gross. This code lets you use Rive's `resizeDrawingSurfaceToCanvas()` api to keep your artwork looking sharp.


### That's all for now...
I plan to add files to help with other common issues or unlock Rive's other powerful features. 

Such as:
- Using Rive's incredible Layout features to make responsive designs
- Subscribing to Rive Events to trigger updates or log actions
- Updating text within Rive animations
- Asset swapping for images, sounds, and fonts
- Using CMS data in Rive animations
- and more... What else would you like to see? 
