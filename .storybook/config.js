import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/components/stories/Toggle');
    require('../src/components/stories/Radio');
    require('../src/components/stories/RadioGroup');
    // require as many as stories you need.
}

configure(loadStories, module);