export function newIdem() {
  return 'idem_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
}
