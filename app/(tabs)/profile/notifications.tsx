import { View, Text, StyleSheet, Switch } from 'react-native'
import { useState } from 'react'

export default function NotificationsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true)
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [marketingEnabled, setMarketingEnabled] = useState(false)

  const notifications = [
    {
      title: 'Push Notifications',
      description: 'Receive push notifications for important updates',
      value: pushEnabled,
      onValueChange: setPushEnabled,
    },
    {
      title: 'Email Notifications',
      description: 'Receive email notifications for account activity',
      value: emailEnabled,
      onValueChange: setEmailEnabled,
    },
    {
      title: 'Marketing Communications',
      description: 'Receive updates about new features and promotions',
      value: marketingEnabled,
      onValueChange: setMarketingEnabled,
    },
  ]

  return (
    <View style={styles.container}>
      {notifications.map((notification, index) => (
        <View
          key={notification.title}
          style={[
            styles.section,
            index !== notifications.length - 1 && styles.borderBottom,
          ]}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.description}>{notification.description}</Text>
          </View>
          <Switch
            value={notification.value}
            onValueChange={notification.onValueChange}
          />
        </View>
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
    marginRight: 16,
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
