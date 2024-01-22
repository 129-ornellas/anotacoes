import { createVuetify } from "vuetify"
import { aliases, md } from "vuetify/iconsets/md"
import "vuetify/styles"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
      },
    },
  })

  app.vueApp.use(vuetify)
})
