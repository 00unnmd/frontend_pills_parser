export enum ParsedPharmacies {
  zdravcity = "Здравсити",
  aptekaru = "Аптекару",
  eapteka = "Еаптека",
}

export type ParsedItem = {
  id: string;
  pharmacy: keyof typeof ParsedPharmacies;
  region: string;
  name: string;
  mnn: string;
  price: number;
  discount: number;
  discountPercent: number;
  producer: string;
  rating: number;
  reviewsCount: number;
  searchValue: string;
  createdAt: string;
  error: string;
};
