import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import RadioGroup from '../RadioGroup/RadioGroup.js';

const radios = [
    {name: 'item1', defaultChecked: true},
    {name: 'item2'},
    {name: 'item3'}
];

storiesOf('RadioGroup', module)
    .add('defaultChecked', () => (
        <RadioGroup group="test" onChange={action('clicked')} items={radios} />
    ));