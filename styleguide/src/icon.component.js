import React from "react";

export default function Icon(props) {
  return (
    <img src={props.src} style={{display: 'inline', padding: props.padding, height: props.height}}/>                   
  );
}