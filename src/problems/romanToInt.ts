interface RomanHash{
    [key:string]:number
}


/**i can be placed before v and x to make 4 and 9
    x can be placed before l and c to make 40 and 90
    c can be placed before d and m to make 400 and 900

 */

    export function romanToInt(s:string):number{
        const romanHash:RomanHash = {
            i:1,
            v:5,
            x:10,
            l:50,
            c:100,
            d:500,
            m:1000
        }

        let total = 0;
        let i = 0;
        const strArr = s.toLowerCase().split("")

        //Now we can loop through each character in the arr made from the string
        while(i < strArr.length){
            const current = romanHash[strArr[i]];
            const next = romanHash[strArr[i+1]];

            if(next> current){
                //if the next character is greater than the previous we need
                //to apply the roman numeral subtraction rule
                total += next - current;
                //And we also need to move past both characters, so we can add 2 to i
                i+=2
            } else{
                //if the next character is not greater than the current, we can
                // just add the value of that roman numeral to the total
                total += current;
                //And then we just move to the next character
                i += 1;
            }
        }
        return total;
    }
