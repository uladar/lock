import React from 'react';

const svgTag = '<svg width="152px" height="168px" viewBox="0 0 152 168" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="badge" sketch:type="MSLayerGroup" transform="translate(1.000000, 0.000000)" fill="#EB5424"> <g id="Clipped" sketch:type="MSShapeGroup"> <path d="M119.127,135.861 L102.277,83.997 L146.384,51.952 L91.863,51.952 L75.011,0.09 L75.006,0.076 L129.536,0.076 L146.391,51.947 L146.391,51.946 L146.405,51.938 C156.195,82.03 146.113,116.256 119.127,135.861 L119.127,135.861 Z M30.893,135.861 L30.879,135.871 L74.998,167.924 L119.127,135.862 L75.012,103.808 L30.893,135.861 L30.893,135.861 Z M3.624,51.939 L3.624,51.939 C-6.68,83.66 5.281,117.272 30.884,135.867 L30.888,135.851 L47.74,83.99 L3.642,51.951 L58.15,51.951 L75.003,0.089 L75.007,0.075 L20.474,0.075 L3.624,51.939 L3.624,51.939 Z" id="Shape"></path> </g> </g> </g> </svg>';

export default class Auth0Icon extends React.Component {
  render() {
    return <span dangerouslySetInnerHTML={{__html: svgTag}} />;
  }
}

Auth0Icon.url = `data:image/svg+xml;utf8,${svgTag}`;
