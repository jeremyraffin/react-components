import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Radio from '../RadioGroup/Radio.js';

storiesOf('Radio', module)
    .add('checked', () => (
        <Radio name="test" group="test" checked={true} defaultChecked={true} onChange={linkTo('Radio', 'unchecked')} />
    ))
    .add('unchecked', () => (
        <Radio name="test" group="test" checked={false} onChange={action('editText')} onChange={linkTo('Radio', 'checked')} />
    ));