import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
    ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    publicRuntimeConfig: {
        SITE_URL: process.env.SITE_URL,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: `${process.env.PROJECT_ID}.firebaseapp.com`,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: `${process.env.PROJECT_ID}.appspot.com`,
        MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
        APP_ID: process.env.APP_ID,
        COOKIE_NAME: process.env.COOKIE_NAME,
    }
})
