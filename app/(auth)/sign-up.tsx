import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSignUp } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { TextInput } from '@/components/TextInput'
import { PasswordInput } from '@/components/PasswordInput'

const SignUpScreen = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp, isLoaded, setActive } = useSignUp()

  const onSignUp = async () => {
    if (!isLoaded) return

    try {
      setLoading(true)

      // Start the sign up process
      await signUp.create({
        emailAddress,
        password,
      })

      // Send verification email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerification(true)
    } catch (err: any) {
      alert(err.errors[0].message)
    } finally {
      setLoading(false)
    }
  }

  const onVerify = async () => {
    if (!isLoaded) return

    try {
      setLoading(true)

      // Attempt to verify email
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      await setActive!({ session: completeSignUp?.createdSessionId })
    } catch (err: any) {
      alert(err.errors[0].message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {!pendingVerification ? (
        <>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Sign up to get started</Text>

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
            onPress={onSignUp}
            disabled={loading || !emailAddress || !password}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Creating...' : 'Create Account'}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Verify Email</Text>
          <Text style={styles.subtitle}>
            We've sent a verification code to {emailAddress}
          </Text>

          <TextInput
            placeholder='Verification Code'
            value={code}
            onChangeText={setCode}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={onVerify}
            disabled={loading || !code}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Verifying...' : 'Verify Email'}
            </Text>
          </TouchableOpacity>
        </>
      )}

      <Link href='/sign-in' asChild>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </Link>
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
  footerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
})

export default SignUpScreen
