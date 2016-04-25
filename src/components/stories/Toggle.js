import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Toggle from '../Toggle/Toggle.js';

storiesOf('Toggle', module)
    .add('active', () => (
        <Toggle active={true} onClick={linkTo('Toggle', 'inactive')} />
    ))
    .add('inactive', () => (
        <Toggle active={false} onClick={linkTo('Toggle', 'active')} />
    ))
    .add('with children', () => (
        <Toggle active={false} onClick={linkTo('Toggle', 'active')}>Item 1</Toggle>
    ));