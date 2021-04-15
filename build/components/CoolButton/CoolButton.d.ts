/// <reference types="react" />
import "../../style.css";
import { BtnType } from '../Btn';
declare type CoolButton = {
    buttons: (BtnType & {
        index: number;
    })[];
};
export declare const CoolButton: ({ buttons }: CoolButton) => JSX.Element[];
export {};
