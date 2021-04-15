/// <reference types="react" />
export declare type BtnType = {
    text: string;
    border: boolean;
    radius: boolean;
    width: number;
    height: number;
};
export declare const Btn: ({ index, text, border, radius, width, height }: BtnType & {
    index: number;
}) => JSX.Element;
