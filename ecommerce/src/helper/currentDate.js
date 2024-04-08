// Función para obtener la fecha actual en formato 'dd/mm/yyyy'
export const getCurrentDate = () => {
    const now = new Date();
    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0');
    const anio = now.getFullYear();
    return `${dia}/${mes}/${anio}`;
};

    // Función para obtener la hora actual en formato 'hh:mm:ss'
export const getCurrentTime = () => {
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
};