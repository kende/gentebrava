module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Gente Brava',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'In the dark you can\'t see the flag, but you can hear the racing beat of our hearts.' },
      { property: 'og:title', content: 'Gente Brava' },
      { property: 'og:description', content: 'In the dark you can\'t see the flag, but you can hear the racing beat of our hearts.' },
      // { property: 'og:image', content: 'https://isla.network/_nuxt/img/isla-fbimage.7372f13.png' }, // change this url when you have an image for social sharing
      { property: 'og:url', content: 'https://gentebrava.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/gentebrava-favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Archivo+Black', rel: 'stylesheet'} // change this to a newly chosen font
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }, // change this to a newly chosen default color
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
