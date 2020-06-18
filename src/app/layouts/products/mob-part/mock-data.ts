import { MobParts } from './mob-parts';
//import { MobParts } from 'src/app/layouts/products/mob-part/mob-part.component';
//import {MobParts}
export const MOBPARTS : MobParts[]=[
    { 
      id: 1001,
      name: 'screen 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
      prodColor: 'red',
      canPurch: true,
      clsVar: true,
      country: 'Australia',
      price: 1200,
    },
    {
      id: 1002,
      name: 'SCREEN 5',
      description: '5 Screen for Samsung',
      inStock: 8,
      prodColor: 'green',
      canPurch: false,
      clsVar: true,
      country: 'India',
      price: 1200,
    },
    {
      id: 1003,
      name: 'Key Panel',
      description: 'Key panel for Nokia',
      inStock: 0,
      prodColor: 'blue',
      canPurch: true,
      clsVar: true,
      country: 'Germany',
      price: 1200,
    },
  ];