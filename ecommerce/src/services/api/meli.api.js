

/* api la revisteria :D
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=207322949`) 
mangas
https://api.mercadolibre.com/sites/MLA/search?seller_id=207322949&category=MLA412445&NARRATION_TYPE=20991991
*/
/* subcategoria:
mangas: NARRATION_TYPE=20991991
comics: NARRATION*TYPE_23694231 
&applied_value_id%3D20991991
&applied_value_id%3D23694231
&applied_value_name%3DComic
*/
/* api sector2810 mangas
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`) */

/* api yenny ateneo libros
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`) */
/* subcategoria
novelas: &NARRATION_TYPE=14833488
libros: &NARRATION_TYPE=7488906

*/

/* const endpoints ={
    comics: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380&category=MLA3025&NARRATION_TYPE=23694231&applied_value_name%3DComic',
    comicss: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=207322949&category=MLA3025&NARRATION_TYPE=23694231',
    books: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505&category=MLA3025'
} */

//let url='https://api.mercadolibre.com/sites/MLA/search?seller_id=';

const categorias ={    
    comicsymangas: '57113380&category=MLA3025',    
    libros: '186616505&category=MLA3025',
}

const subcategorias ={
    comics: '&NARRATION_TYPE=23694231&applied_value_name%3DComic',
    mangas: '&NARRATION_TYPE=20991991',
    novelas: '&NARRATION_TYPE=14833488',
    books: '&NARRATION_TYPE=7488906'
}

const misc = {
    all: '207322949&category=MLA3025',
    novedades: '207322949&category=MLA3025&NARRATION_TYPE=20991991',
}

export { categorias, subcategorias, misc};