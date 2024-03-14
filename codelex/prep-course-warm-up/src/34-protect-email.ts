export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string): string {
    //izveidot tuksu stringu
    // jauns mainigais, kura glabat e-pastu dalu sakot ar @ -> noskaidrot, kur ir @, lai lidz tam var slaiot nost
    //tuksajam stringam assignot jauno stringu
    //ja nakamais simbols @, tad pievienot burtus jaunajam stringam normali
    // ja e-pasta garums garaks/vienads par 18 zimem, atstat pirmos 3 burtus un parejos aizvietot ar punktiem lidz @
    //ja e-pasta garums isaks par 18 zimem, atstat pirmos divus un parejos aizvietot ar punktiem lidz @
    //ja e-pasta garums isaks par 15 zimem, aizvietot ar punktiem visu lidz @
    let protectedEmail:string='';
    let emailSafePart:string = email.slice(email.indexOf('@'));

        for (let i = 0; i < email.length; i++) {
            if (email.length < 15) {
                protectedEmail= '...' + emailSafePart;
            } else if (email.length < 18) {
                protectedEmail= email[0] + email[1] + '...' + emailSafePart;
            } else if (email.length >= 18) {
                protectedEmail= email[0]+email[1]+email[2] + '...' + emailSafePart;
            }
        }
        return protectedEmail;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com