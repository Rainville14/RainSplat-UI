const Common = {
    shaped: false,
    outlined: true,
    rounded: false,
    solo: false,
    singleLine: false,
    filled: false,
    clearable: false,
    persistaentHint: false,
    'background-color': '#FFF',
    dense: true,
    loading: false,
    ripple: false,
    flat: false
};

export default {
    TextArea: {
        ...Common
    },
    TextField: {
        ...Common
    },
    Select: {
        ...Common
    },
    Button: {
        ripple: false,
        depressed: true,
        small: false
    },
    Radio: {
        ...Common
    },
    Checkbox: {
        ...Common
    }
}