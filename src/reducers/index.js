import {ADD_TO_FAVOURITE, ADD_MOVIES, REMOVE_FROM_FAVOURITES} from '../actions';

const initialMoviesState = {
    list : [],
    favourites: [],
    showFavourites : false
}

export default function movies (state = initialMoviesState,action){
    // if(action.type === ADD_MOVIES ){
    //     return {
    //         ...state,
    //         list: action.movies
    //     };
    // }
    // return state;
    // in react we'll avoid usng if else instead we will use switch

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
           const filteredArray = state.favourites.filter(
               movie => movie.Title !== action.movie.Title
           );
           return {
               ...state,
               favourites : filteredArray
           };
        default:
            return state;
    }
}
