import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './Button';

const style = {
    backgroundColor: "#036bfc",
    color: "white",
    border: 'none',
    padding: '10px 20px 10px 20px',
}

storiesOf('Button', module)
    .add('default', () => <Button ariaLabel={'button'}/> )
    .add('with styling', () => <Button style={style} buttonContent={'Click Me'} ariaLabel={'button'}/>)
    .add('with aria-label', () => <Button style={style} buttonContent={'Click Me'} ariaLabel={'button'}/>)