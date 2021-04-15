import * as React from 'react';
import "../../style.css";
import { Btn } from "../Btn";
import {BtnType} from '../Btn';

type CoolButton = {
    buttons: (BtnType & { index: number })[]
}

export const CoolButton = ({ buttons }: CoolButton ) => {
    return buttons.map((btn: BtnType, index: number) => (
        <Btn key={index} index={index} { ...btn } />
    ));
}