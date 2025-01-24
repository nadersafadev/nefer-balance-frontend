import { View, Text, StyleSheet, Pressable, Switch } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function SecurityScreen() {
  const { user } = useUser()
  const [biometricEnabled, setBiometricEnabled] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {/* Password Change */}
        <Pressable
          style={styles.menuItem}
          onPress={() => router.push('/profile/change-password')}
        >
          <MaterialIcons name='lock' size={24} color='#000' />
          <Text style={styles.menuText}>Change Password</Text>
          <MaterialIcons name='chevron-right' size={24} color='#6B7280' />
        </Pressable>

        {/* Biometric Authentication Toggle */}
        <View style={styles.menuItem}>
          <MaterialIcons name='fingerprint' size={24} color='#000' />
          <Text style={styles.menuText}>Biometric Login</Text>
          <Switch
            value={biometricEnabled}
            onValueChange={setBiometricEnabled}
            trackColor={{ false: '#D1D5DB', true: '#000' }}
          />
        </View>

        {/* Login Notifications Toggle */}
        <View style={styles.menuItem}>
          <MaterialIcons name='notifications' size={24} color='#000' />
          <Text style={styles.menuText}>Login Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#D1D5DB', true: '#000' }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#111827',
  },
})
