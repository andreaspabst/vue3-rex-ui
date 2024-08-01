/**
 * Fill up all variants with the same value
 * @param what
 * @param value
 * @returns {{}|{secondary, light, success, dark, warning, danger, primary, info}|{xl, md, sm, xs, lg}}
 */
export const fillUpAllVariants = (what, value) => {
    switch (what) {
        case 'size':
            return {
                xs: value,
                sm: value,
                md: value,
                lg: value,
                xl: value,
            };
        case 'theme':
            return {
                primary: value,
                secondary: value,
                success: value,
                danger: value,
                warning: value,
                info: value,
                light: value,
                dark: value,
            };
        default:
            return {};
    }
};
