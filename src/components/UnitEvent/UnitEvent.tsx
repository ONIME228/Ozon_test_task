import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';

import styles from './UnitEvent.css?module'

//TSX Interface
interface Props {
    text?: string,
    isChecked?: boolean,
    id: number
}

@Component
export default class UnitCalendar extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private isChecked!: boolean;
    @Prop() private id!: number;

    render() {
        const { text, isChecked, id } = this;
        const { eventBlock, eventLabel, eventCheckbox } = styles;

        return (
            <div class={eventBlock}>
                <input type="checkbox" class={eventCheckbox} name="checkbox" id={id} checked={isChecked} />
                <label htmlFor={id} class={eventLabel} >
                    {text}
                </label>
            </div>
        )
    }
}