import { useAuth, useUser } from '@clerk/clerk-expo'
import { MaterialIcons } from '@expo/vector-icons'
import { Route, useRouter } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function ProfileScreen() {
  const { user } = useUser()
  const { signOut } = useAuth()
  const router = useRouter()
  const primaryColor = '#000'

  const menuItems: {
    icon: keyof typeof MaterialIcons.glyphMap
    text: string
    route: Route
  }[] = [
    {
      icon: 'person',
      text: 'Edit Profile',
      route: '/profile/edit',
    },
    {
      icon: 'security',
      text: 'Security',
      route: '/profile/security',
    },
    {
      icon: 'notifications',
      text: 'Notifications',
      route: '/profile/notifications',
    },
    {
      icon: 'lock',
      text: 'Privacy',
      route: '/profile/privacy',
    },
    {
      icon: 'help',
      text: 'Help & Support',
      route: '/profile/help',
    },
    {
      icon: 'info',
      text: 'About',
      route: '/profile/about',
    },
  ]

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
          {menuItems.map((item, index) => (
            <Pressable
              key={item.route}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.lastMenuItem,
              ]}
              onPress={() => router.push(item.route)}
            >
              <MaterialIcons name={item.icon} size={24} color={primaryColor} />
              <Text style={styles.menuText}>{item.text}</Text>
              <MaterialIcons name='chevron-right' size={24} color='#6B7280' />
            </Pressable>
          ))}

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
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#111827',
  },
  signOutButton: {
    marginTop: 20,
    borderBottomWidth: 0,
  },
  signOutText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#DC2626',
  },
})
