import { 
  Smartphone, PlugZap, Headphones, ShieldCheck, Car, Watch, BatteryFull, Usb 
} from 'lucide-react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, name: "iPhone 15 Pro Max uchun Silikon Chexol", category: "G'iloflar", price: 120000, oldPrice: 150000, icon: Smartphone, color: "bg-blue-100 text-blue-600", isNew: true, rating: 4.8 },
  { id: 2, name: "20W Type-C Tezkor Quvvatlagich", category: "Quvvatlagichlar", price: 185000, oldPrice: null, icon: PlugZap, color: "bg-green-100 text-green-600", isNew: false, rating: 4.9 },
  { id: 3, name: "AirPods Pro 2 uchun Himoya G'ilofi", category: "Quloqchinlar", price: 45000, oldPrice: 60000, icon: Headphones, color: "bg-purple-100 text-purple-600", isNew: false, rating: 4.5 },
  { id: 4, name: "Samsung S24 Ultra - 9D Himoya Oynasi", category: "Himoya oynalari", price: 85000, oldPrice: null, icon: ShieldCheck, color: "bg-slate-100 text-slate-600", isNew: true, rating: 4.7 },
  { id: 5, name: "Avtomobil uchun Magnitli Telefon Tutqichi", category: "Avto aksesuarlar", price: 75000, oldPrice: 95000, icon: Car, color: "bg-red-100 text-red-600", isNew: false, rating: 4.6 },
  { id: 6, name: "Apple Watch Series 9 uchun Metal Tasmalar", category: "Smart soatlar", price: 210000, oldPrice: 250000, icon: Watch, color: "bg-orange-100 text-orange-600", isNew: true, rating: 4.9 },
  { id: 7, name: "10000mAh Powerbank (Tashqi batareya)", category: "Quvvatlagichlar", price: 245000, oldPrice: null, icon: BatteryFull, color: "bg-emerald-100 text-emerald-600", isNew: false, rating: 4.8 },
  { id: 8, name: "Type-C dan Type-C ga Kabel (2 metr)", category: "Kabellar", price: 55000, oldPrice: null, icon: Usb, color: "bg-indigo-100 text-indigo-600", isNew: false, rating: 4.4 }
];

export const CATEGORIES = [
  { icon: Smartphone, name: "G'iloflar" },
  { icon: ShieldCheck, name: "Himoya oynalari" },
  { icon: PlugZap, name: "Quvvatlagichlar" },
  { icon: Headphones, name: "Quloqchinlar" },
  { icon: Watch, name: "Smart soatlar" },
  { icon: Car, name: "Avto aksesuarlar" }
];
