import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { withLayoutContext } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { Navigator } = createBottomTabNavigator()

// Wrap the Navigator with expo-router compatibility
const TabNavigator = withLayoutContext(Navigator)

export default function TabLayout() {
  const insets = useSafeAreaInsets()

  return (
    <TabNavigator
      screenOptions={{
        headerShown: false,
        sceneStyle: { paddingTop: insets.top, backgroundColor: '#fff' },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 70,
          paddingBottom: insets.bottom ?? 20,
          position: 'absolute',
          elevation: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#6B7280',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        },
      }}
    >
      <TabNavigator.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name='home' size={28} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name='person' size={28} color={color} />
          ),
        }}
      />
    </TabNavigator>
  )
}
