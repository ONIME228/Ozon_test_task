import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '../../shims-vue';


//TSX Interface
interface Props {
    text: string,
    isChecked: boolean | undefined
}

@Component
export default class UnitCalendar extends VueComponent<Props>{
    @Prop() private text!: string;
    @Prop() private isChecked!: boolean | undefined;
    render() {
        const { text, isChecked } = this;
        return (
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" checked={isChecked} />
                <label htmlFor="checkbox" >
                    {text}
                </label>
            </div>
        )
    }
}