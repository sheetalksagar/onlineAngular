//import { MobParts } from './mob-parts';
import { MobParts } from './../products/mob-part/mob-parts';

export const DBMOBPARTS: MobParts[] = [
  {
    id: 6001,
    name: 'screen 5.5',
    description: '5.5 Screen for Motorola g',
    inStock: 50,
    prodColor: 'red',
    canPurch: true,
    clsVar: true,
    country: 'Australia',
    price: 1200,
    prodImg: 'mob1.png',
    quantity: 0,
    tmPrice:0,
    mBrand:'moto'
  },
  {
    id: 1002,
    name: 'SCREEN 5',
    description: '5 Screen for Samsung',
    inStock: 80,
    prodColor: 'green',
    canPurch: false,
    clsVar: false,
    country: 'India',
    price: 1200,
    prodImg: 'mob2.png',
    quantity: 0,
    tmPrice:0,
    mBrand:'samsung'
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
    prodImg: 'mob3.png',
    quantity: 0,
    tmPrice:0,
    mBrand:'nokia',
  },
];
