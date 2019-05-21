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
}
