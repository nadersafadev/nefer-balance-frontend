import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import { router } from 'expo-router'
import { TextInput } from '@/components/TextInput'

const ForgotPasswordScreen = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { signIn } = useSignIn()

  const onRequestReset = async () => {
    try {
      setLoading(true)

      // Start the password reset flow
      await signIn?.create({
        strategy: 'reset_password_email_code',
        identifier: emailAddress,
      })

      setSuccess(true)

      // Navigate to reset password code verification
      router.push({
        pathname: '/reset-password',
        params: { email: emailAddress },
      })
    } catch (err: any) {
      alert(err.errors[0].message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Enter your email address and we'll send you instructions to reset your
        password.
      </Text>

      <TextInput
        autoCapitalize='none'
        placeholder='Email'
        value={emailAddress}
        onChangeText={setEmailAddress}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onRequestReset}
        disabled={loading || !emailAddress}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Sending...' : 'Reset Password'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Sign In</Text>
      </TouchableOpacity>
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
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#666',
    fontSize: 14,
  },
})

export default ForgotPasswordScreen
