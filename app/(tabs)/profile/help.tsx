import { View, Text, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function HelpScreen() {
  const helpItems: {
    title: string
    description: string
    icon: keyof typeof MaterialIcons.glyphMap
  }[] = [
    {
      title: 'FAQs',
      description: 'Find answers to common questions',
      icon: 'help-outline',
    },
    {
      title: 'Contact Support',
      description: 'Get help from our support team',
      icon: 'headset-mic',
    },
    {
      title: 'Report a Problem',
      description: "Let us know if something isn't working",
      icon: 'error-outline',
    },
    {
      title: 'Terms of Service',
      description: 'Read our terms and conditions',
      icon: 'description',
    },
    {
      title: 'Privacy Policy',
      description: 'Learn about our privacy practices',
      icon: 'privacy-tip',
    },
  ]

  return (
    <View style={styles.container}>
      {helpItems.map((item, index) => (
        <Pressable
          key={item.title}
          style={[
            styles.section,
            index !== helpItems.length - 1 && styles.borderBottom,
          ]}
        >
          <MaterialIcons name={item.icon} size={24} color='#111827' />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <MaterialIcons name='chevron-right' size={24} color='#6B7280' />
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
})
