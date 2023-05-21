import {ComponentProps, ComponentPropsWithoutRef, ElementType, JSX, ValidationMap, WeakValidationMap} from "react";


export type As = ElementType;

/**
 * Extract the props of a React element or component
 */

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
    as?: As
}

export type OmitCommonProps<Target,
    OmitAdditionalProps extends keyof any = never,
> = Omit<
    Target,
    'transition' | 'as' | 'color' | 'translate' | OmitAdditionalProps
> & {
    htmlTranslate?: 'yes' | 'no' | undefined
}

export type RightJoinProps<
    SourceProps extends object = {},
    OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

type Assign<T, U> = Omit<T, keyof U> & U

export type MergeWitAs<
    ComponentProps extends object,
    AsProps extends object,
    AdditionalProps extends object = {},
    AsComponent extends As = As,
> = (
    | RightJoinProps<ComponentProps, AdditionalProps>
    | RightJoinProps<AsProps, AdditionalProps>
) & {
    as?: AsComponent
}


export type ComponentWithAs<Component extends As, Props extends object = {}> = {
    <AsComponent extends As = Component>(
        props: MergeWitAs<ComponentProps<Component>,
            ComponentProps<AsComponent>,
            Props,
            AsComponent
        >,
    ) : JSX.Element

    displayName?: string
    propTypes?: WeakValidationMap<any>
    contextTypes?: ValidationMap<any>
    defaultProps?: Partial<any>
    id?: string
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'