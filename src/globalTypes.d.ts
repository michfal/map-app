export {};

declare module '*.scss';

declare global {
  interface IAdressFormat {
    adress1: string;
    adress1LatLng: { lat: number; lng: number };
    adress2: string;
    adress2LatLng: { lat: number; lng: number };
  }

  interface IProps {
    intro?: string;
  }
  module '*.scss';
}
