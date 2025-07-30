export const API_URL: string = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL_DEV;

export const APP_VERSION: string = "v1.3";
