const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,pug,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px', // mobile
      md: '768px', // tablet
      xl: '1024px', // labtop
      xxl: '1440px', // desktop

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1023.98px' },
      xlOnly: { min: '1023.98px', max: '1439.98px' },
      notXxl: { max: '1439.98px' },
    },
    // THEME
    extend: {
      // FONTS
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // COLORS
      colors: {
        body: '#fafbff',
        black: '#000000',
        white: { DEFAULT: '#ffffff', cream: '#eeeeee' },
        brown: { DEFAULT: '#757575', light: '#838383' },
        red: { DEFAULT: '#df0404', light: '#ffc5c5' },
        blue: {
          DEFAULT: '#5932ea',
          100: '#b5b7c0',
          200: '#9197b3',
          300: '#404b52',
          400: '#292d32',
        },
        green: {
          DEFAULT: '#16c098',
          100: '#00b087',
          200: '#16c09861',
          300: '#008767',
        },
      },
    },
  },
  plugins: [],
};

export default config;
