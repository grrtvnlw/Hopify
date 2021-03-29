import { combineReducers } from "redux";

import favoriteBeersReducer from "../redux/reducers/favoriteBeers";
import favoriteBreweriesReducer from "../redux/reducers/favoriteBreweries";
import wishlistBeersReducer from "../redux/reducers/wishlistBeers";
import wishlistBreweriesReducer from "../redux/reducers/wishlistBreweries";

export const rootReducer = combineReducers({
  favoriteBeers: favoriteBeersReducer,
  wishlistBeers: wishlistBeersReducer,
  favoriteBreweries: favoriteBreweriesReducer,
  wishlistBreweries: wishlistBreweriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export interface BeerData {
  name: string;
  description: string;
  link: string;
  image: string;
  brewery: string;
  breweryLink: string;
  city: string;
  abv: string;
  ibu: string;
  style: string;
  wishlist: boolean;
  favorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RandomBeerData {
  abv?: string;
  createDate: string;
  ibu?: string;
  id: string;
  isRetired: string;
  name: string;
  nameDisplay: string;
  status: string;
  statusDisplay: string;
  style: any;
  styleId: number;
  updateDate: string;
}

export interface BreweryData {
  address_2: string | null;
  address_3: string | null;
  brewery_type: string;
  city: string;
  country: string;
  county_province: string | null;
  created_at: string;
  id: number;
  latitude: string | null;
  longitude: string | null;
  name: string;
  phone: string | null;
  postal_code: string | null;
  state: string | null;
  street: string | null;
  updated_at: string | null;
  website_url: string | null;
}
