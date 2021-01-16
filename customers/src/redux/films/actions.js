import FilmTypes from "./types";

export function getListFilmShowing() {
  return {};
}

export function postBookingInfo(bookingInfo, history) {
  return {
    type: FilmTypes.POST_BOOKING_INFO,
    payload: bookingInfo,
    history: history,
  };
}

export function getFilmDetails(info) {
  return {
    type: FilmTypes.FILM_DETAIL,
    payload: info
  }
}