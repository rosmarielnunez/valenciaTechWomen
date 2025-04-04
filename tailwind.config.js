/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        maxWidth: {
          '7xl': '1280px', 
        },
        colors: {
          primary: '#FB66B5',
          secondary: '#FBD550',
          tertiary: '#1B489C',
          quaternary: '#9C9C9C',
          quinary: '#E0DCD6',
          senary: '#F7F7F7',
          septenary: '#505051',
          octonary: '#ADA4FF',
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(77deg, #FFF 57.95%, rgba(251, 213, 80, 0.43) 149.98%, #FBD550 153.53%)',
                    //background: var(--Yellow-gradient, linear-gradient(77deg, #FFF 57.95%, rgba(251, 213, 80, 0.43) 149.98%, #FBD550 153.53%));
          'gradient-secondary': 'linear-gradient(304deg, #FFF 51.59%, rgba(251, 213, 80, 0.43) 194.04%, #FBD550 199.52%)',
                    //background: linear-gradient(304deg, #FFF 51.59%, rgba(251, 213, 80, 0.43) 194.04%, #FBD550 199.52%);
          'gradient-tertiary': 'linear-gradient(303deg, #FFF 49.13%, rgba(173, 164, 255, 0.26) 172.8%, rgba(173, 164, 255, 0.54) 177.56%)',
                    //background: var(--Purple-gradient, linear-gradient(303deg, #FFF 49.13%, rgba(173, 164, 255, 0.26) 172.8%, rgba(173, 164, 255, 0.54) 177.56%));
          'gradient-quaternary': 'linear-gradient(354deg, #FFF 43.29%, rgba(173, 164, 255, 0.26) 599.32%, rgba(173, 164, 255, 0.54) 620.74%)',
                    //background: linear-gradient(354deg, #FFF 43.29%, rgba(173, 164, 255, 0.26) 599.32%, rgba(173, 164, 255, 0.54) 620.74%);
          'gradient-quintary': 'rgba(173, 164, 255, 0.06)',
                    //background: rgba(173, 164, 255, 0.06);
          //'gradient-primary': 'linear-gradient(to right, #FC829C, #FBD550)', Delete for now
        },
        fontFamily: {
          display: ['Wix Madefor Display', 'sans-serif'],
          text: ['Wix Madefor Text', 'sans-serif'],
        },
      },
    },
  plugins: [],
}

