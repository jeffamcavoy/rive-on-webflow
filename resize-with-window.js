<script >
// Paste into the "Before </body> Tag" section of your Webflow page or site
// Be sure to update the ID of your Rive element to match the ID on line 19 below

  window.onload = function () {
    // Ensure Webflow and Rive module are available
    if (!window.Webflow || !window.Webflow.require) {
      console.error("Webflow or require function not available");
      return;
    }

    const RiveModule = window.Webflow.require('rive');

    if (!RiveModule) {
      console.error("Rive module not found");
      return;
    }

    const myAnimation = document.getElementById('rive-canvas'); //Update to the ID of your Rive element in Webflow

    if (!myAnimation) {
      console.error("Rive canvas element not found");
      return;
    }

    const instance = RiveModule.getInstance(myAnimation);

    if (!instance) {
      console.error("Rive instance not found");
      return;
    }

    const r = instance.rive;

    function handleLoaded() {
      //  console.log("Rive animation loaded");

      function computeSize() {
        r.resizeDrawingSurfaceToCanvas();
      }
      window.onresize = computeSize;

    }

    if (instance.riveInstanceSuccessLoaded) {
      handleLoaded();
    } else {
      r.on('load', handleLoaded);
    }
  }; </script>
