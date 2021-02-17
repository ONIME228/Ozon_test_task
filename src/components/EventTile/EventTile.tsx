import { Component, } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import { useStore } from 'vuex-simple';
import UnitEvent from '@/components/UnitEvent/UnitEvent';
import { IValueData } from '@/store/types';
import { MyStore } from '@/store/store';

import styles from './EventTile.css?module'

interface IkeyboardEvent extends KeyboardEvent {
    target: HTMLInputElement
}

interface ImouseEvent {
    target: HTMLInputElement
}

const { eventBlock, events, eventsTitle, eventsNewEvent } = styles;

@Component
export default class ArticleTile extends VueComponent {
    public store: MyStore = useStore(this.$store)


    handleEnter(event: IkeyboardEvent) {
        if (event.code === 'Enter') {
            this.store.updateWithEvent(
                {
                    key: this.store.idToHighlight,
                    value: event.target.value,
                });
            event.target.value = '';
        }
    }

    handleClick(event: ImouseEvent) {
        if (event.target.getAttribute('type') === 'checkbox') {
            const elementId = this.store.idToHighlight;
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
        const { store: { idToHighlight, data }, handleClick, handleEnter } = this;

        return (
            <article class={eventBlock}>
                <h5 class={eventsTitle}> События </h5>
                <section onClick={handleClick} class={events}>
                    {
                        data[idToHighlight] &&
                        data[idToHighlight].map((el: IValueData) => {
                            return <UnitEvent
                                isChecked={el.isCompleted}
                                text={el.taskName}
                                id={el.id}
                                key={String(el.id)}
                            />
                        })}
                    <input
                        type="text"
                        class={eventsNewEvent}
                        name="addNote"
                        id="addNote"
                        placeholder="Текст"
                        onKeydown={handleEnter}
                    />
                </section>
            </article>
        )
    }

}