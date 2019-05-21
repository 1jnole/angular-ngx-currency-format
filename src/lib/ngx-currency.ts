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
        const reg = '\\d{1,2}[,.]\\d{1,2}';
        const testRegex = reg.match(n);

        return !testRegex;
    }
}
