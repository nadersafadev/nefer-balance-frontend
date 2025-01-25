import { View, Text, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function PrivacyScreen() {
  const privacySettings: {
    title: string
    description: string
    value: string
    icon: keyof typeof MaterialIcons.glyphMap
  }[] = [
    {
      title: 'Profile Visibility',
      description: 'Control who can see your profile',
      value: 'Public',
      icon: 'visibility',
    },
    {
      title: 'Activity Status',
      description: 'Show when you are active',
      value: 'On',
      icon: 'access-time',
    },
    {
      title: 'Data Usage',
      description: 'Manage your data settings',
      value: 'Customize',
      icon: 'storage',
    },
    {
      title: 'Blocked Users',
      description: 'Manage blocked accounts',
      value: '0 users',
      icon: 'block',
    },
  ]

  return (
    <View style={styles.container}>
      {privacySettings.map((setting, index) => (
        <Pressable
          key={setting.title}
          style={[
            styles.section,
            index !== privacySettings.length - 1 && styles.borderBottom,
          ]}
        >
          <MaterialIcons name={setting.icon} size={24} color='#111827' />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{setting.title}</Text>
            <Text style={styles.description}>{setting.description}</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{setting.value}</Text>
            <MaterialIcons name='chevron-right' size={24} color='#6B7280' />
          </View>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: 14,
    color: '#6B7280',
    marginRight: 8,
  },
})
