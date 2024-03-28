

/* api la revisteria :D
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=207322949`) 
mangas
https://api.mercadolibre.com/sites/MLA/search?seller_id=207322949&category=MLA412445&NARRATION_TYPE=20991991
*/
/* subcategoria:
mangas: NARRATION_TYPE=20991991
comics: NARRATION*TYPE_23694231 
*/
/* api sector2810 mangas
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`) */

/* api yenny ateneo libros
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`) */

const endpoints ={
    comicss: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=207322949&category=MLA412445&NARRATION_TYPE=20991991',
    comics: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380&category=MLA412445&NARRATION*TYPE_20991991',
    books: 'https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505&category=MLA3025'
}

export default endpoints;