export function getErrorMessage(error: any): string {
  if (error?.errors?.[0]?.message) {
    return error.errors[0].message
  }
  return 'An unexpected error occurred'
}
