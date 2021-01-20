export default {
  onUpdate: (registration: ServiceWorkerRegistration): void => {
    registration.unregister().then(() => {
      window.location.reload()
    })
  },
}
