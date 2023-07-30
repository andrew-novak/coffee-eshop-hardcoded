const NODE_ENV = process.env.NODE_ENV;
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_MEDIA_URL = process.env.REACT_APP_MEDIA_URL;

export const BASE_URL = process.env.PUBLIC_URL || "";

export const API_URL =
  NODE_ENV === "production" ? REACT_APP_API_URL : "http://localhost:3001";

export const MEDIA_URL =
  NODE_ENV === "production"
    ? REACT_APP_MEDIA_URL
    : "http://localhost:3001/media";
