const palindrome = (str) => {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

let str = "madam"

if (palindrome(str)) {
    console.log("palindrome");
} else {
    console.log("is not a palindrome");
}
