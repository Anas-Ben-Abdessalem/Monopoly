
// === initialating the style ===  BEGIN
const streets = Array.from(document.getElementsByClassName('street'));
let colors = []
let  style = document.createElement('style');
console.log(streets);

for (let i = 0 ; i< streets.length ; i++) {
    if (!(colors.includes(streets[i]))) {
        colors.push(streets[i].className
            .replace('street ','')
            .replace(' horizantal','')
            .replace(' vertical','')
            .replace(' top','')
            .replace(' right',''));
    }
} 

let result = ''
console.log(colors);

for (let i = 0 ; i< colors.length ; i++){
    if ( colors[i] == 'pink') {
        result+=
    '.' + colors[i] + ' .color { \n' 
            + 'background:#ff6681;'
        + '\n } \n\n'
    }else{
    result+=
    '.' + colors[i] + ' .color { \n' 
            + 'background:' + colors[i] +';'
        + '\n } \n\n'
    }
}


style.innerHTML = result; 
document.getElementsByTagName("head")[0].appendChild(style);
// === initialating the style ===  END