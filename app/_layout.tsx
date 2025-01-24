import { Slot } from 'expo-router'
import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
} from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { Stack } from 'expo-router'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { Redirect } from 'expo-router'

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (err) {
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <ClerkLoaded>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(auth)' />
            <Stack.Screen name='(tabs)' />
          </Stack>

          <SignedIn>
            <Redirect href='/(tabs)' />
          </SignedIn>

          <SignedOut>
            <Redirect href='/(auth)/sign-in' />
          </SignedOut>
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  )
}
