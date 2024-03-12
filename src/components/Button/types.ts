import { MouseEventHandler } from 'react';
export interface IButtonProps {
    type?: string;
    title: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disable?: boolean;
}