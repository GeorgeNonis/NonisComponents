import { createStitches, PropertyValue } from '@stitches/react'
import { CSS, Keyframe } from '../Types'

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    keyframes,
    styled,
    theme,
} = createStitches({
    prefix: 'rr',
    theme: {
        colors: {
            primary600: '#276a82',
            primary500: '#4c8da5',
            primary400: '#86b7c9',
            primary300: '#bedfeb',
            primary200: '#ebf4f8',

            secondary600: '#2cb764',
            secondary500: '#41d774',
            secondary400: '#88eeab',
            secondary300: '#b7f1cb',
            secondary200: '#e4ffee',

            error600: '#ff7272',
            error500: '#f8a3a3',
            error400: '#ffcdcd',
            error300: '#fee2e2',
            error200: '#fff4f4',

            neutral900: '#051219',
            neutral800: '#102934',
            neutral700: '#263f4d',
            neutral600: '#3f5366',
            neutral500: '#5f788a',
            neutral400: '#95abb5',
            neutral300: '#cddae2',
            neutral200: '#e2e8f0',
            neutral100: '#f2f6fc',
            neutral50: '#f8fafc',

            black: '#000',
            white: '#fff',
        },
        fonts: {
            default: "'Source Sans Pro', Arial, Helvetica, sans-serif",
        },
        radii: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
        },
        shadows: {
            default: '0px 5px 10px 0px rgba(0, 0, 0, 0.15)',
        },
        space: {
            0: '0px',
            1: '4px',
            2: '8px',
            3: '16px',
            4: '32px',
        },
        transitions: {
            default: '0.2s cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            fast: '0.1s cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            slow: '0.4s cubic-bezier(0.785, 0.135, 0.150, 0.860)',
        },
        zIndices: {
            dropdown: 100,
            sticky: 200,
            fixed: 300,
            backdrop: 400,
            modal: 500,
            tooltip: 600,
        },
    },
    media: {
        mobile: '(max-width: 640px)',
        desktop: '(min-width: 641px)',
        canHover: '(hover: hover) and (pointer: fine)',
    },
    utils: {
        //margin utils
        m: (value: PropertyValue<'margin'>) => ({
            margin: value,
        }),
        mt: (value: PropertyValue<'marginTop'>) => ({
            marginTop: value,
        }),
        mr: (value: PropertyValue<'marginRight'>) => ({
            marginRight: value,
        }),
        mb: (value: PropertyValue<'marginBottom'>) => ({
            marginBottom: value,
        }),
        ml: (value: PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
        }),
        mx: (value: PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: PropertyValue<'marginTop'>) => ({
            marginTop: value,
            marginBottom: value,
        }),

        //padding utils
        p: (value: PropertyValue<'padding'>) => ({
            padding: value,
        }),
        pt: (value: PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
        }),
        pr: (value: PropertyValue<'paddingRight'>) => ({
            paddingRight: value,
        }),
        pb: (value: PropertyValue<'paddingBottom'>) => ({
            paddingBottom: value,
        }),
        pl: (value: PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
        }),
        px: (value: PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),

        //sizes utils
        h: (value: PropertyValue<'height'>) => ({
            height: value,
        }),
        minH: (value: PropertyValue<'minHeight'>) => ({
            minHeight: value,
        }),
        maxH: (value: PropertyValue<'maxHeight'>) => ({
            maxHeight: value,
        }),
        w: (value: PropertyValue<'width'>) => ({
            width: value,
        }),
        minW: (value: PropertyValue<'minWidth'>) => ({
            minWidth: value,
        }),
        maxW: (value: PropertyValue<'maxWidth'>) => ({
            maxWidth: value,
        }),
        size: (value: PropertyValue<'height'>) => ({
            height: value,
            width: value,
        }),
        minSize: (value: PropertyValue<'minHeight'>) => ({
            minHeight: value,
            minWidth: value,
        }),
        maxSize: (value: PropertyValue<'maxHeight' | 'maxWidth'>) => ({
            maxHeight: value,
            maxWidth: value,
        }),

        bgc: (value: PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value,
        }),
        linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),

        bc: (value: PropertyValue<'borderColor'>) => ({
            borderColor: value,
        }),
        br: (value: PropertyValue<'borderRadius'>) => ({
            borderRadius: value,
        }),
    },
})

export const createAnimation = (
    keyframe: Keyframe[] | Keyframe,
    duration = 0.2
): CSS => {
    const timingFunc = `${duration}s cubic-bezier(0.785, 0.135, 0.150, 0.860)`
    const animation = Array.isArray(keyframe)
        ? keyframe.join(` ${timingFunc}, `) + ` ${timingFunc}`
        : `${keyframe} ${timingFunc}`
    return {
        animation: animation,
    }
}
