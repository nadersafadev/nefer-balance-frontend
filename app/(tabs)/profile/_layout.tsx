import { Stack } from 'expo-router'

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerBackTitle: '',
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='edit'
        options={{
          title: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name='security'
        options={{
          title: 'Security',
        }}
      />
      <Stack.Screen
        name='notifications'
        options={{
          title: 'Notifications',
        }}
      />
      <Stack.Screen
        name='privacy'
        options={{
          title: 'Privacy',
        }}
      />
      <Stack.Screen
        name='help'
        options={{
          title: 'Help & Support',
        }}
      />
      <Stack.Screen
        name='about'
        options={{
          title: 'About',
        }}
      />
    </Stack>
  )
}
