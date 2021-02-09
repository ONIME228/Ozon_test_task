import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from './EventTile.css?module'

//TSX Interface
interface Props {
    position: string,
}

@Component
export default class ArticleTile extends VueComponent<Props>{
    @Prop() private position!: string;

    render() {
        const { position } = this;
        const { eventTile } = styles;
        return (
            <article
                style={position ? `margin-${position}:auto;` : ''}
                class={eventTile}
            >
                <h5> События </h5>
                <section>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        Выполнить задание
                    </label>

                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        Выполнить задание
                    </label>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        Выполнить задание
                    </label>
                    <input type="text" name="addNote" id="addNote" placeholder="Текст" />
                </section>
            </article>
        )
    }
} 