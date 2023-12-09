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
      fontSize: {
        xs: ['12px', '1'],
        sm: ['12px', '1.2'],
        base: ['14px', '1.2'],
        lg: ['22px', '1.2'],
        xl: ['24px', '1.2'],
        xxl: ['26px', '1.2'],
      },
      // COLORS
      colors: {
        body: '#fafbff',
        black: '#000000',
        red: { DEFAULT: '#df0404', light: '#ffc5c5' },
        brown: { DEFAULT: '#757575', 100: '#838383', 200: '#7e7e7e' },
        white: {
          DEFAULT: '#ffffff',
          100: '#eeeeee',
          200: '#f5f5f5',
          300: '#f9fbff',
        },
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
      // BOX SHADOW
      boxShadow: {
        100: ' 0px 10px 60px 0px rgba(226, 236, 249, 0.50)',
        200: '0px 10px 60px rgba(226, 236, 249, 0.50)',
      },
    },
  },
  plugins: [],
};

export default config;
