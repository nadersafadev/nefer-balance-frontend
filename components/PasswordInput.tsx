import { View, Pressable, StyleSheet } from 'react-native'
import { useState, ComponentProps } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput } from './TextInput'
import { GestureResponderEvent } from 'react-native'

interface PasswordInputProps extends ComponentProps<typeof TextInput> {
  // Add any password-specific props here
  onPress?: (event: GestureResponderEvent) => void
}

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={!showPassword}
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
      />
      <Pressable
        style={styles.eyeIcon}
        hitSlop={8}
        onPress={() => setShowPassword(!showPassword)}
      >
        <MaterialIcons
          name={showPassword ? 'visibility' : 'visibility-off'}
          size={20}
          color='#6B7280'
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 15,
    justifyContent: 'center',
  },
})
