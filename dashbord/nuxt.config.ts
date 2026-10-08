// https://nuxt.com/docs/api/configuration/nuxt-config
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dashbord',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [

      ],
      script: [
        {
          src: 'libs/choices.js/public/assets/scripts/choices.min.js',
          defer: true
        },
        {
          src: 'js/main.js',
          defer: true
        },
        {
          src: 'libs/@popperjs/core/umd/popper.min.js',
          defer: true
        },
        {
          src: 'libs/bootstrap/js/bootstrap.bundle.min.js',
          defer: true
        },
        {
          src: 'libs/node-waves/waves.min.js',
          defer: true
        },
        {
          src: 'libs/simplebar/simplebar.min.js',
          defer: true
        },

        {
          src: 'libs/@tarekraafat/autocomplete.js/autoComplete.min.js',
          defer: true
        },
        {
          src: 'libs/@simonwep/pickr/pickr.es5.min.js',
          defer: true
        },
        {
          src: 'libs/flatpickr/flatpickr.min.js',
          defer: true
        },
        {
          src: 'libs/apexcharts/apexcharts.min.js',
          defer: true
        },
        {
          src: 'js/sales-dashboard.js',
          defer: true
        },
        {
          src: 'js/sticky.js',
          defer: true
        },
        {
          src: 'js/defaultmenu.min.js',
          defer: true
        },
        {
          src: 'js/custom.js',
          defer: true
        },
        {
          src: 'js/custom-switcher.min.js',
          defer: true
        },
        {
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
          integrity: 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=',
          crossorigin: 'anonymous'
        },

        {
          src: 'libs/quill/quill.js',
          defer: true
        },
        {
          src: 'libs/filepond/filepond.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-image-exif-orientation/filepond-plugin-image-exif-orientation.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-file-validate-size/filepond-plugin-file-validate-size.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-file-encode/filepond-plugin-file-encode.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-image-edit/filepond-plugin-image-edit.min.j',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-image-crop/filepond-plugin-image-crop.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-image-resize/filepond-plugin-image-resize.min.js',
          defer: true
        },
        {
          src: 'libs/filepond-plugin-image-transform/filepond-plugin-image-transform.min.js',
          defer: true
        },

      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/style.css'
  ],
  modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt", 'nuxt-auth-utils'],
  pinia: {
    storesDirs: ['./stores/**'],
  },






})