/**
 * The logic here is very simple. We remove all occurrences of (), [] and {}.
 * We consider the sequence of brackets valid if the result is a empty string. 
 */

function isValidBracketBalance(brackets) {
	return brackets.replaceAll(/\(\)|\[\]|\{\}/g, '') === '';
};

/**
 * This function invoke the replace function while the regex matches in a string.
 */
String.prototype.replaceAll = function(rgx, to) {

	var str = this;

	while(rgx.test(str)) {
	  str = str.replace(rgx, to);
	}

	return str;

};