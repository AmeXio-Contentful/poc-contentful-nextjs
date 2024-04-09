'use client';

import React, { useMemo } from 'react';
import { useContentfulContext } from '@/contentful-context';
import { componentGqlMap, componentMap } from '@/mapping';

let previousComponent: string | null = null;
interface Props {
    componentProps: {
        sys: { id: string };
        __typename: string;
    };

    /**
     * forces to do a graqhql request to get its content, instead
     * of expecting content is provided trough `props.componentProps`:
     */
    forceGql?: boolean;

    className?: string;
    inline?: boolean;
}


interface index {
    [key: string]: any
}

export const ComponentResolver = (props: Props) => {
    const { componentProps, inline = false } = props;
    const { previewActive } = useContentfulContext();

    const { locale } = useContentfulContext();

    // @ts-ignore
    const ComponentGql = componentGqlMap[componentProps.__typename];

    const shouldForceGql = useMemo(() => {
        if (props.forceGql === true) {
            return true;
        }

        if (!ComponentGql) {
            return false;
        }

        if (Object.keys(componentProps).length > 3) {
            // We expect components with no fragments set up to only contain 2 object
            // props. If there are more, it means we are providing fragments manually
            return false;
        }

        if (componentProps.__typename === undefined || componentProps.sys === undefined) {
            // We expect exactly these keys to be present in the returned props if the
            // fragment was not specified for this component
            return false;
        }

        return true;
    }, [ComponentGql, componentProps, props.forceGql]);

    // @ts-ignore
    const Component = !shouldForceGql && componentMap[componentProps.__typename];

    const previousComponentProp = previousComponent;

    previousComponent = componentProps.__typename;

    if (!Component && !ComponentGql) {
        return null;
    }

    return (
        <div
                    className={componentProps.__typename}
                >
                    {Component ? (
                        <Component
                            {...componentProps}
                            locale={locale}
                            className={props.className}
                            previousComponent={previousComponentProp}
                        />
                    ) : (
                        <ComponentGql
                            id={componentProps.sys.id}
                            __typename={componentProps.__typename}
                            className={props.className}
                            preview={previewActive}
                            locale={locale}
                            previousComponent={previousComponentProp}
                        />
                    )}
                </div>
        // <CtfTextBannerGql id={componentProps.sys.id} locale={locale} preview={previewActive}></CtfTextBannerGql>
    );
};