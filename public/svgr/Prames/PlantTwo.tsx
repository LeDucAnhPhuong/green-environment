import React from 'react';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

const PlantTwo: React.FC<IconProps> = ({ color = 'currentColor', size, width = size, height = size }) => (
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width={width} height={height} viewBox="0 0 624.000000 900.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
fill="#569f58" stroke="none">
<path d="M170 8991 c0 -5 11 -34 25 -64 26 -61 63 -168 120 -352 21 -66 43
-138 50 -160 7 -22 21 -69 30 -105 10 -36 21 -78 27 -95 13 -43 87 -369 123
-545 41 -193 52 -251 86 -450 89 -521 166 -1213 209 -1875 61 -954 65 -2329
10 -3400 -29 -548 -37 -667 -61 -940 -6 -66 -15 -174 -19 -240 -4 -66 -12
-167 -19 -225 -9 -90 -29 -300 -46 -487 l-5 -53 2230 0 2230 0 -5 37 c-2 21
-7 83 -10 138 -3 55 -10 154 -15 220 -5 66 -17 224 -25 350 -9 127 -23 316
-31 420 -8 105 -14 233 -14 285 0 52 -7 178 -15 280 -8 102 -15 241 -15 310 0
69 -5 191 -10 272 -28 436 -41 2051 -21 2755 32 1159 146 2277 286 2823 8 30
26 102 41 160 25 103 82 282 124 390 11 30 33 89 47 130 14 41 48 129 75 195
27 66 54 134 59 152 5 18 14 35 19 38 6 4 10 15 10 26 0 19 -34 19 -2745 19
-1563 0 -2745 -4 -2745 -9z"/>
</g>
</svg>
);

export default PlantTwo;