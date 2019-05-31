import React from "react";

function iFrame() {
  return {
    __html:
      '<iframe scrolling="no" frameborder="0" style="max-height:100%; height:500px; max-width:100%; width:580px; overflow:hidden" src="https://app.stitcher.com/splayer/f/387630?el=1&refid=stpr"></iframe>'
  };
}

function Podframe() {
  return <div style={{height:'40vh', border:'5px solid white'}} dangerouslySetInnerHTML={iFrame()} />;
}

export default Podframe;
