describe('bracketsValidation', function () {

  	it('(){}[] must be valid', function () {
    	expect(isValidBracketBalance('(){}[]')).toEqual(true);
  	});

 	it('[{()}](){} must be valid', function () {
		expect(isValidBracketBalance('[{()}](){}')).toEqual(true);
	});
  	
  	it('[]{() must be invalid', function () {
		expect(isValidBracketBalance('[]{()')).toEqual(false);
	});
 	
 	it('[{)] must be invalid', function () {
		expect(isValidBracketBalance('[{)]')).toEqual(false);
	});

});
