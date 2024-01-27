export type RootStackParamList = {
  Home: undefined;
  Basket: undefined;
  Detail: {itemId: number | undefined};
  Success: undefined;
};

export type CoffeData = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  shortDescription: string;
  rating: number;
};
