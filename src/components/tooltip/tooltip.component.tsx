import {ReactElement, FC} from 'react';
import {TooltipContainer} from './tooltip.component.styled';

type TooltipProps = {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: ReactElement
};

export const Tooltip: FC<TooltipProps> = ({text, position = 'top', children}) => {
    return (
        <TooltipContainer position={position}>
            {children}
            <span>{text}</span>
        </TooltipContainer>
    );
};

