const ENV = {
  development: {
    CLERK_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
  production: {
    CLERK_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
}

export default function getEnvVars() {
  // __DEV__ is a global variable that is true when running in development, false in production
  if (__DEV__) {
    return ENV.development
  }
  return ENV.production
}
