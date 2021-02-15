import { Component, } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';
import { useStore } from 'vuex-simple';
import UnitEvent from '../UnitEvent/UnitEvent';
import { Istate, IvalueData } from '../../store/store_interfaces';

import styles from './EventTile.css?module'

interface IkeyboardEvent extends KeyboardEvent {
    target: HTMLInputElement
}
interface ImouseEvent {
    target: HTMLInputElement
}
@Component
export default class ArticleTile extends VueComponent {
    public store: Istate = useStore(this.$store)


    handleEnter(event: IkeyboardEvent) {
        if (event.code === 'Enter') {
            this.store.updateWithEvent(
                {
                    key: this.store.getElementId,
                    value: event.target.value,
                });
            event.target.value = '';
        }
    }

    handleClick(event: ImouseEvent) {
        if (event.target.getAttribute('type') === 'checkbox') {
            const elementId = this.store.getElementId;
            this.store.updateWithTaskStatus({
                key: elementId,
                value: {
                    isCompleted: event.target.checked,
                    id: Number(event.target.getAttribute('id')),
                }
            });
        }
    }

    render() {
        const { store } = this;
        const { eventBlock, events, eventsTitle, eventsNewEvent } = styles;
        const elementId = store.getElementId;
        const data = store.getData;
        return (
            <article
                class={eventBlock}
            >
                <h5 class={eventsTitle}> События </h5>
                <section onClick={this.handleClick} class={events}>
                    {
                        data[elementId] &&
                        data[elementId].map((el: IvalueData) => {
                            return <UnitEvent
                                isChecked={el.isCompleted}
                                text={el.taskName}
                                id={el.id}
                            />
                        })}
                    <input
                        type="text"
                        class={eventsNewEvent}
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