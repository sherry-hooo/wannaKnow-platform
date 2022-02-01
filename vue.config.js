module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/WannaKnowPlatform/" : "./",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/assets/sass/utils/_breakpoint.scss";
        @use "@/assets/sass/base/_color.scss";
        @use "@/assets/sass/base/_typography.scss";
        `,
      },
    },
  },
};
