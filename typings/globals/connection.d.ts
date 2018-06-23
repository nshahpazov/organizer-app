import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    connection: any
  }
}
