import { Component, Prop, Vue } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';


//TSX Interface
interface Props {
    text: string,
    id: number,
}

@Component
export default class UnitCalendar extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private id!: number;
    render() {
        const { text, id } = this;
        return (
            <span id={isNaN(id) ? '' : id}>{text}</span>
        )
    }
}