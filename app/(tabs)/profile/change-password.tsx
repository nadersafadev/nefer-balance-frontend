import { View, StyleSheet, Pressable, Alert, Text } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { PasswordInput } from '@/components/PasswordInput'

export default function ChangePasswordScreen() {
  const { user } = useUser()
  const router = useRouter()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New passwords do not match')
      return
    }

    try {
      setLoading(true)
      await user?.updatePassword({
        currentPassword,
        newPassword,
      })
      Alert.alert('Success', 'Password has been updated successfully')
      router.back()
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <PasswordInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder='Enter current password'
      />

      <PasswordInput
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder='Enter new password'
      />

      <PasswordInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder='Confirm new password'
      />

      <Pressable
        style={[styles.saveButton, loading && styles.saveButtonDisabled]}
        onPress={handleChangePassword}
        disabled={loading}
      >
        <Text style={styles.saveButtonText}>
          {loading ? 'Updating...' : 'Update Password'}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  saveButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  saveButtonDisabled: {
    opacity: 0.7,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
