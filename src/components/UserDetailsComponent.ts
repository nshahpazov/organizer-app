import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: '<button @click="onClick">Click!</button>'
})
export default class UserDetailsComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'UserDetailsComponent!';

  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message);
  }
}
