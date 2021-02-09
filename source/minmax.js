'use strict';

/**
 * Возвращает массив из 2 элементов:
 *      1 элемент - минимальное число последовательности
 *      2 элемент - максимальное число последовательности
 *
 * @param {string} string, которая содержит набор чисел.
 * @return {Array} массив, первым элементом которого является
 *                 минимальное число последовательности, вторым - максимальное.
 *
 * @author Егоров Алексей <egorovaleksey0@mail.ru>
 *
 * @example
 * // returns [0, Infinity]
 * minmax('5 3 1 0 alex Infinity');
 *
 */
const minmax = (string) => {
    if (typeof string !== 'string') {
        return [ undefined, undefined ];
    }

    const numbers = string.split(/\s+/)
                          .map((item) => parseFloat(item))
                          .filter((item) => !isNaN(item));

    return numbers.length ? [ Math.min(...numbers), Math.max(...numbers) ] : [ undefined, undefined ];
}