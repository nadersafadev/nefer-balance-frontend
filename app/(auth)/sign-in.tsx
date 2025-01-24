import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { PasswordInput } from '@/components/PasswordInput'
import { TextInput } from '@/components/TextInput'

const SignInScreen = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, setActive } = useSignIn()

  const onSignIn = async () => {
    try {
      setLoading(true)

      // Start the sign in process
      const completeSignIn = await signIn?.create({
        identifier: emailAddress,
        password,
      })

      // Set the active session
      await setActive!({ session: completeSignIn?.createdSessionId })
    } catch (err: any) {
      alert(err.errors[0].message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your account to continue</Text>

      <TextInput
        autoCapitalize='none'
        placeholder='Email'
        value={emailAddress}
        onChangeText={setEmailAddress}
      />

      <PasswordInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSignIn}
        disabled={loading || !emailAddress || !password}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Signing in...' : 'Sign In'}
        </Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Link href='/forgot-password' asChild>
          <TouchableOpacity>
            <Text style={styles.footerText}>Forgot Password?</Text>
          </TouchableOpacity>
        </Link>

        <Link href='/sign-up' asChild>
          <TouchableOpacity>
            <Text style={styles.footerText}>Create Account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
})

export default SignInScreen
