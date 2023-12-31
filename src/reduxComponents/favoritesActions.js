// favoritesActions.js

export const addToFavorites = (symbol) => ({
    type: 'ADD_TO_FAVORITES',
    payload: symbol,
});

export const removeFromFavorites = (symbol) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: symbol,
});
