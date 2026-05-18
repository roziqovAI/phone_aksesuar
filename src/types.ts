import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  icon: LucideIcon;
  color: string;
  isNew: boolean;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
