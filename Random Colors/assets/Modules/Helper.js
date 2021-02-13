
export default function changeFirstChar(str) {
    let strAr = str.split("");
    strAr[0] = str.charAt(0).toUpperCase();
    str = strAr.join("");
    return str;
}