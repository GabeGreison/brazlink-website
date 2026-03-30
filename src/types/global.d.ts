import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": any;
    }
  }
}

declare module "lite-youtube-embed";