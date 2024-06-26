// https://nuxt.com/docs/api/configuration/nuxt-config



export default  {

  buildDir: 'dist',


  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'fabdnc nuxt'
    }
  },

  ssr: false,
  pages: true,
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "./assets/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "./assets/css/style.scss"
      },
      {
        rel: "stylesheet",
        href:
          "./assets/css/menu.css"
      },
      {
        rel: "stylesheet",
        href:
          "./assets/scss/master.scss"
      },
      {
        rel: "stylesheet",
        href:
          "./assets/css/master.css"
      },

      {
        rel: "stylesheet",
        href:
          "./assets/css/master-dist.scss"
      },
      
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: './assets/js/main.js',
        type: 'text/javascript'
      },
      {
        src: './assets/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      }


    ],
    
  },

  css: [ '~/assets/css/all.min.css',
         '~/assets/css/locomotive-scroll.min.css', 
         '~/assets/css/main.scss',
         '~/assets/css/bootstrap.min.css',
         '~/assets/css/master.css',
         '~/assets/css/master-dist.scss',
         '~/assets/scss/master.scss',
         '~/assets/scss/utils/_animation.scss',
        //  '~/assets/scss/utils/_theme.scss',
         '~/assets/css/swiper-bundle.min.css',
         '~/assets/css/style.scss',


  ],
  // script: [
  //   { src: '~/bootstrap/dist/js/bootstrap.min.js', defer: true },
  //   { src: '~/assets/js/ScrollSmoother.min.js', defer: true },
  //   { src: '~/assets/js/jquery.meanmenu.min.js', defer: true },
  //   { src: '~/assets/js/jquery-3.6.0.min.js', defer: true },
  //   { src: '~/assets/js/vanilla-tilt.js', defer: true },
  //   { src: '~/assets/js/progressbar.js', defer: true },
  //   { src: '~/assets/js/main.js', defer: true },
  // ],
  typescript: {
      shim: false
    },
  build: {
    //   extractCSS: false,
      publicPath: '_nuxt/dist/',
      transpile: ["gsap"],
    },
  modules: ['nuxt-swiper', "@nuxt/image"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    serveStatic: true,
    
  },
  devServerHandlers: [],
  hooks: {
  },
  plugins: [
             '~/plugins/scroll.js',
             
  ],
  



}