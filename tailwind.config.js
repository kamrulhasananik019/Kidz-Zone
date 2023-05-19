/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily:{
      custom:["Podkova","sans-serif"]
    }
  }
  ,
  plugins: [
    require('flowbite/plugin')
]
}

