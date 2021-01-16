import FilmTypes from "./types";

export function getListFilmShowing() {
  return {
    type: FilmTypes.GET_LIST_FILM_SHOWING,
    payload: listFilm,
  };
}

export function postBookingInfo(bookingInfo) {
  return {
    type: FilmTypes.POST_BOOKING_INFO,
    payload: bookingInfo,
  };
}
