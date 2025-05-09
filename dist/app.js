"use strict";
{
    function formatString(input, toUpper = true) {
        if (toUpper) {
            return input.toUpperCase();
        }
        return input.toLocaleLowerCase();
    }
    console.log(formatString("Hello"));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));
}
