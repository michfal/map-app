export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface IAdressFormat {
    adress1: string;
    adress1LatLng: { lat: number; lng: number };
    adress2: string;
    adress2LatLng: { lat: number; lng: number };
  }
}
