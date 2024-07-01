import React, { useEffect } from 'react';

const VerloopBotComponent = () => {
  useEffect(() => {
    (function (w, d, s, u) {
      w.Verloop = function (c) {
        w.Verloop._.push(c);
      };
      w.Verloop._ = [];
      w.Verloop.url = u;

      const h = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      j.async = true;
      j.src = "https://nautilusshippingind.verloop.io/livechat/script.min.js";
      h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://nautilusshippingind.verloop.io/livechat");

    Verloop(function () {
      this.setRecipe("QwhjXapiH6Rdrifk9");
    });
  }, []);

  return null; // Assuming you don't want to render anything for the VerloopBotComponent
};

export default VerloopBotComponent;