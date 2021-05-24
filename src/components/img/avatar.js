import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const stylesAvatar = {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
}
export function AvatarImg() {
  return <StaticImage src="./avatar.png" alt="A avatar"
  style={stylesAvatar}
  layout="fixed"
   />
}