import { Stack } from 'expo-router'

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
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
        name='change-password'
        options={{
          title: 'Change Password',
        }}
      />
    </Stack>
  )
}
