//Buralarda servislerin portları gelecek
//Muhtemelen Backend_URL kısmı IP olacak
//Daha sonrasında da her servis için portları farklı farklı değişkenlere atayacağız

export const BACKEND_URL = process.env.BACKEND_API_URL || ""; // SpringBoot
export const APP_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || ""; // Next.js Server (BFF)

//backend response nasıl ona bakmak lazım
export const AUTH_KEYS = {
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken",
};