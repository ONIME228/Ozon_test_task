import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import UnitEvent from '../UnitEvent/UnitEvent';

// import store from '../../store/vuex-simple_store';
import { mapGetters, mapMutations, } from 'vuex';
import { useStore } from 'vuex-simple';

import styles from './EventTile.css?module'

//TSX Interface
interface Props {
    position: string,
}
// interface Store;

@Component
export default class ArticleTile extends VueComponent<Props>{
    @Prop() private position!: string;
    public store: any = useStore(this.$store)

    methods: any = { ...mapMutations(['updateWithEvent']) }
    handleEnter(e: any) {
        if (e.code === 'Enter') {
            // console.log('HERE', e.target.getAttribute('checked'));
            this.store.updateWithEvent(
                {
                    key: this.store.elementId,
                    value: {
                        taskName: e.target.value,
                    }
                });
            e.target.value = '';
        }
    }
    handleClick(e: any) {
        // console.log(e.target);
        if (e.target.getAttribute('type') === 'checkbox') {
            const elementId = this.store.getElementId;
            const taskName = e.target.parentElement &&
                e.target.parentElement.querySelector('label') &&
                e.target.parentElement.querySelector('label').textContent;
            // console.log('HERE', taskBody);
            this.store.updateWithTaskStatus({
                key: elementId,
                value: {
                    taskName: taskName,
                    isCompleted: e.target.checked
                }
            });
        }
    }
    render() {
        const { store } = this;
        // console.log('render Event Tile', store.elementId);
        const { position } = this;
        const { eventTile } = styles;

        const listOfEvents = store.getData;
        return (
            <article
                style={position ? `margin-${position}:auto;` : ''}
                class={eventTile}
            >
                <h5> События </h5>
                <section onClick={this.handleClick}>
                    {/* <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox" >
                        Выполнить задание
                    </label> */}
                    {/* <UnitEvent text="Выполнить задание" /> */}
                    {
                        store.elementId &&
                        listOfEvents[store.elementId] &&
                        listOfEvents[store.elementId].map((el: any) => {
                            // console.log('el', el);
                            return <UnitEvent
                                isChecked={el && el.isCompleted}
                                text={el && el.taskName}
                            />
                        })}
                    <input
                        type="text"
                        name="addNote"
                        id="addNote"
                        placeholder="Текст"
                        onKeydown={this.handleEnter}
                    />
                </section>
            </article>
        )
    }

}