
function shortenTitle(titles){

    let words = titles ? titles.split (' ') : null;

    if(words && words.length > 3){
        words = words.slice(0, 4).join(' ');
        return words
    }else if(words && words.length == 3){
        words = words.slice(0, 3).join(' ');
        return words
    }else{
        words = titles || null
        return words
    }
}

function shortenName (names, title){

    const word = shortenTitle(title)

    const nameUrl = names ? names.replace(/\. /g, "-").replace(/\s/g, "-") : null;
    const titleUrl = word ? word.replace(/-/g, "").replace(/\s+/g, "-") : null;

    return nameUrl || titleUrl;
}

export default shortenName;