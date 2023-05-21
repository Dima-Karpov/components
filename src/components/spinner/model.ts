import {SizeType} from "../../types";

export interface ISpinnerOptions {
    /**
     * The color of the empty area in the spinner
     * @default 'transparent'
     */
    emptyColor?: string
    /**
     * The thickness of the spinner
     * @default '2px'
     * @example
     * ```jsx
     * <Spinner thickness="4px"
     * ```
     */
    thickness?: string
    /**
     * The color of the spinner
     */
    color?: string
    /**
     * The speed of the spinner
     * @default '0,45s'
     * @example
     * ```jsx
     * <Spinner speed="0,2s"/>
     * ```
     */
    speed?: string
    size?: SizeType
}