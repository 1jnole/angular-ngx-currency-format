export interface NgxCurrencyConfig {
    message: string;
}

export class NgxCurrency {

    static isValid(n): boolean {
        return n !== '' && n !== null && n !== undefined;
    }

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static isValidRegex(n): boolean {
        const reg = '^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)(?:(\\.|,)\\d+)?$';
        const reg2 = '^[0-9]+([,.][0-9]+)*$'
        const testRegex = reg.match(n);
        const testRegex2 = reg2.match(n);

        return !testRegex && !testRegex2;
    }
}
