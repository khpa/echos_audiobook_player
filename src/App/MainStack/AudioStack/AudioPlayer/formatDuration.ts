export function formatDuration(seconds: number): string {
  const input = Math.round(seconds);
  const hours = Math.floor(input / 60 / 60);
  const minutes = Math.floor(input / 60) - hours * 60;
  var seconds = input % 60;

  var formatted =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  return formatted;
}
