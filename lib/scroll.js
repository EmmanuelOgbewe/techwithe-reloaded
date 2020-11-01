
/**
 * 
 * @param {String} id
 * @param {String} src
 * Scrolls to element specified if cannot uses src as a href
 */

export const scrollToDiv = (id, src) => {
    var element = document.getElementById(id);
    if(element == null){
        navigateToPage(src);
        return;
    }
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

}


export const navigateToPage = (location) => {
    window.location.href = location;
}