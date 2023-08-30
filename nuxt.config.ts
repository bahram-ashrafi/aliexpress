// https://nuxt.com/docs/api/configuration/nuxt-config
import {persistedState} from "@pinia-plugin-persistedstate/nuxt/dist/runtime/storages";

export default defineNuxtConfig({
    pages: true,
    modules: [
        'nuxt-icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase'
    ],
    runtimeConfig: {
        public: {
            stripePK: process.env.STRIPE_PK_KEY
        }
    },
    app: {
        head: {
            script: [
                {src: 'https://js/stripe.com/v3/', defer: true}
            ]
        }
    }
})
