import React from 'react';

import { Condom } from '../components/extras';
import FacelessPeen from '../components/FacelessPeen';
import { Blush } from '../components/makeUp';
import {
  Handcuffs,
  Ballgag,
  EyeMask,
  MiniPeenIcon,
  SlutPaddleIcon,
  Collar,
  LatexMask,
  HeartCollar,
  WandIcon,
  Karada,
  AnkleCuffs,
  RopeCuffs,
  PeenPaddleIcon,
  DildoIcon,
  ButtPlugIcon,
  GlassDildoIcon,
  CandyCaneIcon
} from '../components/toys';

import thoughtBubble from './icons/thought-bubble.png';
import lashes from './icons/lashes.png';
import room from './icons/room.png';
import room2 from './icons/room2.png';
import Clouds from './icons/clouds.png';
import Galaxy3 from './icons/galaxy3.jpg';
import Sharks from './icons/sharks.jpg';
import Sparkle from './icons/sparkle.png';
import heartPattern from './icons/heart-pattern.png';
import CloudsBg from './backgrounds/clouds.png';
import Galaxy3Bg from './backgrounds/galaxy3.jpg';
import SharksBg from './backgrounds/sharks.jpg';
import SparkleBg from './backgrounds/sparkle.png';
import roomBg from './backgrounds/room.png';
import heartPatternBg from './backgrounds/heart-pattern.png';
import dungeon from './backgrounds/dungeon.png';
import plaid from './backgrounds/plaid.jpg';
import plaidAlt from './backgrounds/plaid-variant.jpg';
import condomsBg from './backgrounds/condoms-bg.png';
import yumyumsBg from './backgrounds/yumyums.png';
import gamingBg from './backgrounds/gaming.png';
import christmasRoom from './backgrounds/christmas-room.png';
import condomsBgIcon from './icons/condoms.png';
import christmasRoomIcon from './icons/christmas-room.png';

export default [
  {
    id: 1,
    name: 'skintone',
    component: <FacelessPeen />,
    isSelected: true,
    items: [
      {
        id: 1,
        fill: '#FFC9EF',
        stroke: '#FFABE6'
      },
      {
        id: 2,
        fill: '#a6fcfc',
        stroke: '#71e5f2'
      },
      {
        id: 3,
        fill: '#dfabf2',
        stroke: '#d06bf4'
      },
      {
        id: 4,
        fill: '#9de295',
        stroke: '#5ecc51'
      },
      {
        id: 5,
        fill: '#f7f25d',
        stroke: '#e8d90b'
      },
      {
        id: 6,
        fill: '#c8c6ef',
        stroke: '#ada9f2'
      },      
      {
        id: 7,
        fill: '#f9b672',
        stroke: '#f78f25'
      },
      {
        id: 8,
        fill: '#eaceef',
        stroke: '#e2a8ed'
      },
      {
        id: 9,
        fill: '#f4abf3',
        stroke: '#ef83ee'
      },
      {
        id: 10,
        fill: '#90f9e8',
        stroke: '#4de2ca'
      },
      {
        id: 11,
        fill: '#b2e2f7',
        stroke: '#83ceef'
      }
    ]
  },
  {
    id: 2,
    name: 'makeUp',
    component: <Blush type="control" color="#ff81d2" />,
    isSelected: false,
    items: [
      {
        id: 1,
        fill: '#ff81d2',
        type: 'blush',
        clears: [2, 3, 4, 5, 6, 7, 8]
      },
      {
        id: 2,
        fill: '#FFC9EF',
        type: 'blush',
        clears: [1, 3, 4, 5, 6, 7, 8]
      },
      {
        id: 3,
        fill: '#ea8f8f',
        type: 'blush',
        clears: [1, 2, 4, 5, 6, 7, 8]
      },
      {
        id: 4,
        fill: '#f4c6ce',
        type: 'blush',
        clears: [1, 2, 3, 5, 6, 7, 8]
      },
      {
        id: 6,
        fill: '#fcd4ed',
        type: 'blush',
        clears: [1, 2, 3, 4, 5, 7, 8]
      },
      {
        id: 7,
        fill: '#ed7bb2',
        type: 'blush',
        clears: [1, 2, 3, 4, 5, 6, 8]
      },
      {
        id: 8,
        fill: '#f28ef2',
        type: 'blush',
        clears: [1, 2, 3, 4, 5, 6, 7]
      },
      {
        id: 9,
        type: 'lashes',
        icon: lashes,
        clears: []
      },
      {
        id: 10,
        fill: '#c2c0f1',
        type: 'eyeshadow',
        clears: [11, 12, 13]
      },
      {
        id: 11,
        fill: '#aff6f7',
        type: 'eyeshadow',
        clears: [10, 12, 13]
      },
      {
        id: 12,
        fill: '#f5cdf7',
        type: 'eyeshadow',
        clears: [10, 11, 13]
      },
      {
        id: 13,
        fill: '#b5fccd',
        type: 'eyeshadow',
        clears: [10, 11, 12]
      }
    ]
  },
  {
    id: 3,
    name: 'toys',
    component: <Handcuffs type="control" />,
    isSelected: false,
    items: [
      {
        id: 1,
        name: 'handcuffs',
        component: <Handcuffs type='icon' />,
        clears: [13]
      },
      {
        id: 2,
        name: 'ballgag',
        component: <Ballgag type='icon' />,
        clears: []
      },
      {
        id: 3,
        name: 'eyeMask',
        component: <EyeMask type='icon' />,
        clears: []
      },
      {
        id: 15,
        name: 'slutPaddle',
        component: <SlutPaddleIcon />,
        clears: [16]
      },
      {
        id: 14,
        name: 'miniPeen',
        component: <MiniPeenIcon />,
        clears: [11, 17, 18, 19, 20]
      },
      {
        id: 4,
        name: 'collar',
        component: <Collar type="icon" />,
        clears: [5, 8, 9]
      },
      {
        id: 5,
        name: 'collarRed',
        component: <Collar
          type="icon"
          fill="#e51b04"
          stroke="#b71603" />,
        clears: [4, 8, 9]
      },
      {
        id: 6,
        name: 'latexMask',
        component: <LatexMask type="icon" />,
        clears: [7]
      },
      {
        id: 7,
        name: 'latexMaskPink',
        component: <LatexMask
          type="icon"
          fill="#f4abf3"
          stroke="#ef83ee" />,
        clears: [6]
      },
      {
        id: 8,
        name: 'heartCollar',
        component: <HeartCollar type="icon" />,
        clears: [4, 5, 9]
      },
      {
        id: 9,
        name: 'heartCollarPink',
        component: <HeartCollar
          type="icon"
          fill="#FFC9EF"
          stroke="#FFABE6"
          metalFill="#FFD700"
          metalStroke="#D4AF37" />,
        clears: [4, 5, 8]
      },
      {
        id: 11,
        name: 'wand',
        component: <WandIcon />,
        clears: [14, 17, 18, 19, 20]
      },
      {
        id: 10,
        name: 'hishiKarada',
        component: <Karada type="icon" />,
        clears: []
      },
      {
        id: 12,
        name: 'ankleCuffs',
        component: <AnkleCuffs type="icon" />,
        clears: []
      },
      {
        id: 13,
        name: 'ropeCuffs',
        component: <RopeCuffs type="icon" />,
        clears: [1]
      },
      {
        id: 16,
        name: 'peenPaddle',
        component: <PeenPaddleIcon />,
        clears: [15]
      },
      {
        id: 17,
        name: 'dildo',
        component: <DildoIcon />,
        clears: [14, 11, 18, 19, 20]
      },
      {
        id: 18,
        name: 'buttPlug',
        component: <ButtPlugIcon />,
        clears: [14, 11, 17, 19, 20]
      },
      {
        id: 19,
        name: 'glassDildo',
        component: <GlassDildoIcon />,
        clears: [14, 11, 17, 18, 20]
      },
      {
        id: 20,
        name: 'candyCane',
        component: <CandyCaneIcon />,
        clears: [11, 17, 18, 19, 14]
      }
    ]
  },
  {
    id: 4,
    name: 'extras',
    component: <Condom color='#f78f25' type="control" />,
    isSelected: false,
    items: [
      {
        id: 1,
        fill: '#FFABE6',
        type: 'condom',
        clears: [2, 3, 4, 5, 6, 7]
      },
      {
        id: 2,
        fill: '#71e5f2',
        type: 'condom',
        clears: [1, 3, 4, 5, 6, 7]
      },
      {
        id: 3,
        fill: '#ada9f2',
        type: 'condom',
        clears: [1, 2, 4, 5, 6, 7]
      },
      {
        id: 4,
        fill: '#e8d90b',
        type: 'condom',
        clears: [1, 2, 3, 5, 6, 7]
      },
      {
        id: 5,
        fill: '#82edde',
        type: 'condom',
        clears: [1, 2, 3, 4, 6, 7]
      },
      {
        id: 6,
        fill: '#f78f25',
        type: 'condom',
        clears: [1, 2, 3, 4, 5, 7]
      },
      {
        id: 7,
        fill: '#edf3fc',
        type: 'condom',
        clears: [1, 2, 3, 4, 5, 6]
      },
      {
        id: 8,
        fill: '#FFC9EF',
        stroke: '#FFABE6',
        type: 'peen',
        clears: [9, 10]
      },
      {
        id: 9,
        fill: '#a6fcfc',
        stroke: '#71e5f2',
        type: 'peen',
        clears: [8, 10]
      },
      {
        id: 10,
        fill: '#f7f25d',
        stroke: '#e8d90b',
        type: 'peen',
        clears: [8, 9]
      },
      {
        id: 11,
        type: 'thoughtBubble',
        icon: thoughtBubble,
        clears: []
      },
      {
        id: 12,
        type: 'antlers',
        clears: [13]
      },
      {
        id: 13,
        type: 'christmasHat',
        clears: [12]
      }
    ]
  },
  {
    id: 5,
    name: 'background',
    icon: room2,
    isSelected: false,
    items: [
      {
        id: 1,
        fill: '#c3f7f1'
      },
      {
        id: 2,
        fill: '#fcdbfa'
      },
      {
        id: 3,
        fill: '#000'
      },
      {
        id: 4,
        fill: '#cce8ae'
      },
      {
        id: 5,
        image: CloudsBg,
        icon: Clouds,
        type: 'cover'
      },
      {
        id: 6,
        image: Galaxy3Bg,
        icon: Galaxy3,
        type: 'cover'
      },
      {
        id: 7,
        image: SharksBg,
        icon: Sharks,
        type: 'cover'
      },
      {
        id: 8,
        image: SparkleBg,
        icon: Sparkle,
        type: 'cover'
      },
      {
        id: 9,
        image: roomBg,
        icon: room,
        type: 'cover'
      },
      {
        id: 10,
        image: heartPatternBg,
        icon: heartPattern,
        type: 'pattern'
      },
      {
        id: 11,
        image: dungeon,
        icon: dungeon,
        type: 'cover'
      },
      {
        id: 12,
        image: plaid,
        icon: plaid,
        type: 'pattern'
      },
      {
        id: 13,
        image: plaidAlt,
        icon: plaidAlt,
        type: 'pattern'
      },
      {
        id: 14,
        image: condomsBg,
        icon: condomsBgIcon,
        type: 'pattern'
      },
      {
        id: 15,
        image: yumyumsBg,
        icon: yumyumsBg,
        type: 'pattern'
      },
      {
        id: 16,
        image: gamingBg,
        icon: gamingBg,
        type: 'pattern'
      },
      {
        id: 17,
        image: christmasRoom,
        icon: christmasRoomIcon,
        type: 'cover'
      }
    ]
  }
]
