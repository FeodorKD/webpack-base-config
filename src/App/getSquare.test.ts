import { getSquare } from './getSquare';

describe('Тестирование функции получения квадрата числа', () => {
    test('getSquare', () => {
        expect(getSquare(5)).toBe(25);
        expect(25).toMatchSnapshot();
    });
    test('getSquare', () => {
        expect(getSquare(-5)).toBe(25);
        expect(25).toMatchSnapshot();
    });
    test('getSquare', () => {
        expect(getSquare(0)).toBe(0);
        expect(0).toMatchSnapshot();
    });
});
