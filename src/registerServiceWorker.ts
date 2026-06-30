import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('A new version is available. Reload to update?')) {
      updateSW(true)
    }
  },
})

export default updateSW
