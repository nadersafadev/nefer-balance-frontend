export const colors = {
  // Primary colors
  primary: {
    main: '#117E87', // Teal
    dark: '#113E42', // Dark Teal
    light: '#108A94', // Light Teal
  },

  // Background colors
  background: {
    default: '#FDFDFD', // Almost White
    paper: '#D9D9D9', // Light Gray
  },

  // Text colors
  text: {
    primary: '#101010', // Almost Black
  },

  // Accent colors
  accent: {
    light: '#E6FEFE', // Very Light Teal
    lighter: '#D1F5F5', // Slightly Darker Light Teal
  },
} as const

// Type for autocompletion and type safety
export type ColorTheme = typeof colors
