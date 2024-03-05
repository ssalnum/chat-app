export function formataTempo(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

function padZero(numero) {
	return numero.toString().padStart(2, "0");
}