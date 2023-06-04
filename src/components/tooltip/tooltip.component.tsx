import {FC, ReactElement} from 'react';
import {TooltipContainer} from './tooltip.component.styled';

type TooltipProps = {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: ReactElement;
};

export const Tooltip: FC<TooltipProps> = ({text, position, children}) => {
    return (
        <TooltipContainer position={position || 'top'}>
            {children}
            <span>{text}</span>
        </TooltipContainer>
    );
};
