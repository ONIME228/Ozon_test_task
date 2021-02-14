import { Component, Vue } from 'vue-property-decorator';

import ArticleTile from './components/ArticleTile/ArticleTile';
import EventTile from './components/EventTile/EventTile';



import './App.css'


@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <ArticleTile position="left" text="Text Block" />
        <EventTile position="right" />
      </div>
    )
  }
}
