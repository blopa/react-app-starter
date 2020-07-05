import * as constants from '../constants';

export const updateTheme = (theme) => (dispatch) => dispatch({
    type: constants.UPDATE_THEME,
    payload: {
        theme,
    },
});

export const updateThemeType = (type) => (dispatch) => dispatch({
    type: constants.UPDATE_THEME_TYPE,
    payload: {
        type,
    },
});
