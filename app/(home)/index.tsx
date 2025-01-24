import { colors } from '@/constants/Colors'
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Button, Text, View, StyleSheet } from 'react-native'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useAuth()
  return (
    <View style={styles.container}>
      <SignedIn>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>
            Welcome, {user?.emailAddresses[0].emailAddress}
          </Text>
          <Button title='Sign out' onPress={() => signOut()} color='#E11D48' />
        </View>
      </SignedIn>
      <SignedOut>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Please sign in or create an account to continue
          </Text>

          <View style={styles.buttonContainer}>
            <Link href='/(auth)/sign-in' style={styles.link}>
              <Text style={styles.linkText}>Sign in</Text>
            </Link>

            <Link href='/(auth)/sign-up' style={styles.link}>
              <Text style={styles.linkText}>Sign up</Text>
            </Link>

            <Link href='/(auth)/forgot-password' style={styles.forgotLink}>
              <Text style={styles.forgotLinkText}>Forgot password?</Text>
            </Link>
          </View>
        </View>
      </SignedOut>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.background.paper,
    textAlign: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  link: {
    backgroundColor: colors.primary.main,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkText: {
    color: colors.background.default,
    fontSize: 16,
    fontWeight: '600',
  },
  forgotLink: {
    padding: 12,
    alignItems: 'center',
  },
  forgotLinkText: {
    color: colors.background.paper,
    fontSize: 14,
  },
})
