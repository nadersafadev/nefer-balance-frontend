import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useUser, useAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

export default function ProfileScreen() {
  const { user } = useUser()
  const { signOut } = useAuth()
  const router = useRouter()
  const primaryColor = '#000'

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileSection}>
          {user?.imageUrl ? (
            <Image source={{ uri: user.imageUrl }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={styles.avatarText}>
                {user?.firstName?.[0] ||
                  user?.emailAddresses[0].emailAddress[0].toUpperCase()}
              </Text>
            </View>
          )}

          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {user?.firstName
                ? `${user.firstName} ${user.lastName || ''}`
                : 'Set your name'}
            </Text>
            <Text style={styles.userEmail}>
              {user?.emailAddresses[0].emailAddress}
            </Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/profile/edit')}
          >
            <MaterialIcons name='person' size={24} color={primaryColor} />
            <Text style={styles.menuText}>Edit Profile</Text>
            <MaterialIcons name='chevron-right' size={24} color='#6B7280' />
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => router.push('/profile/security')}
          >
            <MaterialIcons name='security' size={24} color={primaryColor} />
            <Text style={styles.menuText}>Security</Text>
            <MaterialIcons name='chevron-right' size={24} color='#6B7280' />
          </Pressable>

          <Pressable
            style={[styles.menuItem, styles.signOutButton]}
            onPress={() => signOut()}
          >
            <MaterialIcons name='logout' size={24} color='#DC2626' />
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  avatarPlaceholder: {
    backgroundColor: '#113E42',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfo: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
  },
  menuContainer: {
    width: '100%',
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
  signOutButton: {
    borderBottomWidth: 0,
  },
  signOutText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#DC2626',
  },
})
