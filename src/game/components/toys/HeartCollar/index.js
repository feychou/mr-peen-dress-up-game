import React from 'react';

import './style.css';

const HeartCollar = ({fill = '#7ACED6', stroke = '#12AEBC', metalFill = '#DBDADA', metalStroke = '#666'}) => (
  <svg className="HeartCollar" xmlns='http://www.w3.org/2000/svg' viewBox='0 -300.375 1169.547 1092.375'>
    <g id='Heart_Collar'>
      <path fill={metalFill} stroke={metalStroke} strokeWidth='2' strokeMiterlimit='10' d='M356.601,393.575 c-13.335-6.042-30.902,1.087-44.513,16.407c-15.875-12.958-34.353-17.201-46.548-9.114c-30.975,22.034-18.373,77.018,2.544,83.967 l51.885,23.56l47.474-31.518C386.998,466.687,390.679,410.399,356.601,393.575z M359.18,473.676l-39.871,26.465l-43.566-19.782 c-17.572-5.839-28.144-52.007-2.137-70.505c10.24-6.788,25.761-3.233,39.085,7.653c11.43-12.869,26.179-18.848,37.377-13.777 C378.688,417.852,375.59,465.115,359.18,473.676z' />
      <polygon fill={fill} stroke={stroke} strokeWidth='3' strokeMiterlimit='10' points='271.33,469.67 271.66,474.43 92.5,486.94 93.03,482.46 98.28,437.64 98.96,431.86 267.9,420.05 268.3,425.88' />
      <path fill={fill} stroke={stroke} strokeWidth='3' strokeMiterlimit='10' d='M540.5,455.64l-127.28,8.9h-0.01l-14.47,1.01 l-36.77,2.57l-0.34-4.93l-3.01-43.55l-0.41-5.9l167.78-11.73c0.57,1.98,1.14,3.96,1.7,5.94c4.11,14.44,7.96,28.62,11.5,42.5 C539.63,452.18,540.07,453.91,540.5,455.64z' />
      <line fill='none' stroke={stroke} strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' x1='527.69' y1='407.95' x2='358.62' y2='419.64' />
      <line fill='none' stroke={stroke} strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' x1='268.3' y1='425.88' x2='98.28' y2='437.64' />
      <line fill='none' stroke={stroke} strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' x1='539.19' y1='450.45' x2='361.63' y2='463.19' />
      <polyline fill='none' stroke={stroke} strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' points='271.33,469.67 93.03,482.46 92.5,482.5' />
      <ellipse transform='rotate(-3.279 398.792 437.39)' fill={metalFill} cx='399.033' cy='437.64' rx='6.895' ry='6.895' />
      <ellipse transform='rotate(-3.279 229.891 450.774)' fill={metalFill} cx='230.033' cy='451.036' rx='6.895' ry='6.895' />
    </g>
  </svg>
);

export default HeartCollar;