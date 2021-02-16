import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';


//TSX Interface
interface Props {
    text: string,
    id: number | string,
}

@Component
export default class UnitCalendar extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private id!: number;
    render() {
        const { text, id } = this;
        if (!id && !text) {
            return <div></div>
        } else {
            return (
                <span id={id}>{text}</span>
            )
        }

    }
}