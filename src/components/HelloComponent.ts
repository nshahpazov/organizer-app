import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: '<button @click="onClick">Click!</button>'
})
export default class Hello extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!';

  // Component methods can be declared as instance methods
  onClick (): void {
    console.log(this.connection);
    window.alert(this.message);
  }
}
