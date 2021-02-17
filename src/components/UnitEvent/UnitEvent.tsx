import { MyStore } from '@/store/store';
import { Component, Prop } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import { VueComponent } from '../../shims-vue';

import styles from './UnitEvent.css?module'

interface Props {
    text?: string,
    isChecked?: boolean,
    id: number
}

interface ImouseEvent {
    target: HTMLInputElement
}
const { eventBlock, eventLabel, eventCheckbox } = styles;

@Component
export default class UnitCalendar extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private isChecked!: boolean;
    @Prop() private id!: number;
    public store: MyStore = useStore(this.$store)

    handleClick(event: ImouseEvent) {
        const idToHighlight = this.store.idToHighlight;
        this.store.updateWithTaskStatus({
            key: idToHighlight,
            value: {
                isCompleted: event.target.checked,
                id: Number(this.id),
            }
        });
    }

    render() {
        const { text, isChecked, id } = this;

        return (
            <div class={eventBlock}>
                <input onClick={this.handleClick} type="checkbox" class={eventCheckbox} name="checkbox" id={id} checked={isChecked} />
                <label htmlFor={id} class={eventLabel} >
                    {text}
                </label>
            </div>
        )
    }
}