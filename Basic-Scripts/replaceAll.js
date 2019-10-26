/**
 * Replace all occurences of a string in a string
 * @param {string} str original string
 * @param {string} find string to replace
 * @param {string} replace string to use
 * @returns {string} New string
 */
export function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), replace);
}
