import { ref } from "vue"

export default {
  install: (app, options) => {
    const opened = ref(false)
  
    app.config.globalProperties.$sidebar = {
      opened: opened,
      show() {
        opened.value = true
      },
      hide() {
        opened.value = false
      }
    }
  }
}