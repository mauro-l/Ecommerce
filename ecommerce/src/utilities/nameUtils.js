

function shortenName (names){
// Eliminar "Libro" del título
  if (names.startsWith('Libro')) {
    return names.slice(6).trim();
  }
  return names.replace(/^[-]+/, '').trim();

}

export default shortenName;