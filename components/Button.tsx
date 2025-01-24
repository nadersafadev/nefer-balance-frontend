import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<typeof TouchableOpacity> {
  loading?: boolean
  loadingText?: string
  children: string
}

export function Button({
  loading,
  loadingText,
  children,
  style,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      disabled={disabled || loading}
      {...props}
    >
      <Text style={styles.buttonText}>{loading ? loadingText : children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
