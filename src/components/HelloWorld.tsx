import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';

import styles from './HelloWorld.css?module'

interface Props {
  msg: string,
  quantity: number,
}

@Component
export default class HelloWorld extends VueComponent<Props> {

  @Prop() private msg!: string;
  @Prop() private quantity!: number;

  render() {
    return (
      <div class={styles}>
        <h1>{this.msg + ' ' + this.quantity}</h1>
        <p>
          ...
        </p>
      </div>
    )
  }
}
