import { TextInput as RNTextInput, StyleSheet } from 'react-native'
import { ComponentProps } from 'react'

interface TextInputProps extends ComponentProps<typeof RNTextInput> {}

export function TextInput(props: TextInputProps) {
  return (
    <RNTextInput
      style={[styles.input, props.style]}
      autoCapitalize='none'
      placeholderTextColor='#666'
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
})
