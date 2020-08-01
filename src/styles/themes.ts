export const themes = {
  light: {
    primary: '#fff',
    black: '#1b1f23',
    gray: '#586069',
    'gray-light': '#6a737d',
    'gray-dark': '#24292e',
    orange: '#f9826c',

    header: '#24292e',
    logo: '#fff',
    username: '#666',
    search: 'rgba(255, 255, 255, 0.13)',
    'search-placeholder': 'hsla(0,0%,100%,.75)',
    icon: '#6a737d',
    link: '#0366d6',
    border: '#e1e4e8',
    ticker: 'rgba(209,213,218,.5)',

    'calendar-scale-0': '#ebedf0',
    'calendar-scale-1': '#9BE9A8',
    'calendar-scale-2': '#3FC463',
    'calendar-scale-3': '#30A14E',
    'calendar-scale-4': '#216E3A',

    javascript: '#f1e05a',
    typescript: '#2b7489',
    'other-language': '#8257e5',
  },
  dark: {
    primary: '#1D1D1D',
    black: '#c6c6c6',
    gray: '#afafaf',
    'gray-light': '#6a737d',
    'gray-dark': '#c6c6c6',
    orange: '#fff',

    header: '#181818',
    logo: '#fff',
    username: '#9b9b9b',
    search: '#151515',
    'search-placeholder': '#c6c6c6',
    icon: '#9b9b9b',
    link: 'rgb(79, 140, 201)',
    border: '#343434',
    ticker: 'rgba(90, 90, 90, .5)',

    'calendar-scale-0': '#282828',
    'calendar-scale-1': 'rgba(79, 140, 201, 0.25)',
    'calendar-scale-2': 'rgba(79, 140, 201, 0.5)',
    'calendar-scale-3': 'rgba(79, 140, 201, 0.75)',
    'calendar-scale-4': 'rgba(79, 140, 201, 1)',

    javascript: '#f1e05a',
    typescript: '#2b7489',
    'other-language': '#8257e5',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
