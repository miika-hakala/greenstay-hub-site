/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'text-gsh-green',
    'text-gsh-blue',
    'text-gsh-dark',
    'bg-gsh-green',
    'bg-gsh-blue',
    'bg-gsh-dark',
    'from-gsh-green',
    'from-gsh-blue',
    'from-gsh-dark',
    'to-gsh-green/40',
    'to-gsh-blue/40',
    'to-gsh-dark/40',
    'bg-gsh-green/[0.06]',
    'bg-gsh-blue/[0.06]',
    'bg-gsh-dark/[0.06]'
  ],
  theme: {
    extend: {
      colors: {
        'gsh-green': '#1F7A63',
        'gsh-blue': '#2E8BC0',
        'gsh-beige': '#E6D8A2',
        'gsh-off-white': '#F4F7F5',
        'gsh-dark': '#1a2e28',
        'gsh-light': '#4a6b62'
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif']
      }
    }
  },
  plugins: []
};
