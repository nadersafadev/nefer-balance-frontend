import { tokenCache } from '@/cache'
import {
  ClerkLoaded,
  ClerkProvider,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-expo'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { Redirect, Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

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
