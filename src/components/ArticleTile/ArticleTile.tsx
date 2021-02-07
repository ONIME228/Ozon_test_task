import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from './ArticleTile.css?module'

//TSX Interface
interface Props {
    text: string,
    position: string,
}

@Component
export default class ArticleTile extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private position!: string;

    render() {
        const { text, position } = this;
        const { articleBlock } = styles;
        return (
            < article
                style={position ? `margin-${position}:auto;` : ''}
                class={articleBlock}
            >

                { text}
            </article>
        )
    }
} 