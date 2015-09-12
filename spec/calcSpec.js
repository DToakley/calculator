describe('helpers', function() {
    it('adds two numbers', function() {
        var addFunc = helpers.add(5,3);
        expect(addFunc).toEqual(8);
    });
    it ('subtracts two numbers', function() {
        var subFunc = helpers.subtract(5,3);
        expect(subFunc).toEqual(2);
    })
    it ('multiplies two numbers', function() {
        var mulFunc = helpers.multiply(5,3);
        expect(mulFunc).toEqual(15);
    })
    it ('divides two numbers', function() {
        var divFunc = helpers.divide(5,4);
        expect(divFunc).toEqual(1.25);
    });
    it('adds an operator to operator list', function() {
        var operators = calcApp.sum.operators;
        helpers.addOperator('+');
        helpers.addOperator('-');
        expect(operators).toEqual(['+', '-']);
    });
    it('adds a value to values list', function() {
       var values =  calcApp.sum.values;
        helpers.addValue(4);
        helpers.addValue(-5.6);
        expect(values).toEqual([4, -5.6]);
    });
    it('resets the internal sum', function() {
        calcApp.sum.operators = ['+', '÷'];
        calcApp.sum.values = [4, -72];
        helpers.resetSum();
        expect(calcApp.sum.operators).toEqual([]);
        expect(calcApp.sum.values).toEqual([]);
    })
});
