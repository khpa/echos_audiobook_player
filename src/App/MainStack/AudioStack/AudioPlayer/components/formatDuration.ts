export function formatDuration(seconds: number): string {
  const input = Math.round(seconds);

  const hours = Math.floor(input / 60 / 60);
  const minutes = Math.floor(input / 60) - hours * 60;
  const secondsOut = input % 60;

  if (hours > 0) {
    return (
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      secondsOut.toString().padStart(2, "0")
    );
  }
  const formatted =
    minutes.toString().padStart(2, "0") +
    ":" +
    secondsOut.toString().padStart(2, "0");

  return formatted;
}
