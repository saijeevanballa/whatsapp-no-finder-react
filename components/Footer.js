import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        id="sticky-footer"
        className="py-4 bg-dark fixed-bottom text-white"
        style={{
          flexShrink: "none",
          marginTop: "110%",
          position: "relative",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <div className="container text-center ">
          <p><a className="text-white" href="https://github.com/saijeevanballa" target="_blank">Follow me on Github</a></p>
        </div>
      </footer>
    </div>
  );
}
