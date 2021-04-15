import * as React from 'react';

type SimpleText = {
    text: string
}

export const SimpleText = ({ text }: SimpleText) => {
    return (<>{text}</>)
}