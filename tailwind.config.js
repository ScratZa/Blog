// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    plugins: [
        require('daisyui'),
      ],
      corePlugins: {
        preflight: false,
      },
      daisyui: {
        themes: [
            {
        'default': {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'primary': '#101F56',
          'secondary': '#6F2E6C',
          'tertiary': '#B8466C',
          'accent':'#F9F871'
        }
        }],
    },
}