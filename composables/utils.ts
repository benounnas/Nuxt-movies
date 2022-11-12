import type { Video, Media } from "~/types";

export function getVideoLink(item?: Video) {
  if (!item?.key) return null;
  return `https://www.youtube.com/embed/${item.key}?rel=0&showinfo=0&autoplay=0`;
}

export function getTrailer(item: Media) {
  const trailer = item.videos?.results?.find(
    (video) => video.type === "Trailer"
  );
  return getVideoLink(trailer);
}

/**
 * Format minutes into hours and mins
 */
export function formatTime(minutes: number) {
  // seconds
  const seconds = minutes * 60;
  let secondsLeft = seconds;

  // hours
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  // mins
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  return `${hours ? `${hours}h` : ""} ${mins}min`;
}
