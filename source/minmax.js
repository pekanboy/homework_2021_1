'use strict';

const minmax = string => {
    // Регулярное выражение ищет все возможные числа в строке
    // "12.3 ssa3 3e3 Infinity" => [12.3, 3, 3e3, Infinity]
    let numbers = string.match(/[+-]?(\d*\.)?\d+(e[+-]?(\d*\.)?\d+)?|Infinity|-Infinity/g)
    return numbers !== null ? [Math.min(...numbers), Math.max(...numbers)] : [undefined, undefined];
}