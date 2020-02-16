export default function dateValidator(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !new Date(date).valueOf()) {
    return false
  }
  return true
}
