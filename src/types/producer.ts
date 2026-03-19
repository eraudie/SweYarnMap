export type OrderType = 'webshop' | 'other' | null

export interface Producer {
  id: number;
  name: string;
  location: string;
  region: string;
  website: string;
  description: string;
  fiberTypes: string[];
  logo: string | null;
  lat: number;
  lng: number;
  orderType: OrderType;
  orderDetails: string | null;
}
