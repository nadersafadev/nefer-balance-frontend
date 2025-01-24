import { ActivityIndicator, StyleSheet, View } from 'react-native'

export function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#000' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
