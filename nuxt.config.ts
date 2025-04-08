// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Quick Pay",
            meta: [
                {name: "description", content: "Quick Pay application"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
            ],
            link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
        },
    },
    compatibilityDate: "2025-04-05",
    devtools: {enabled: true},
    css: ["~/assets/css/main.css"],
    // image: {
    //   dir: "public/images",
    // },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image"],
});