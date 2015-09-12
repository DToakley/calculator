$(document).ready(function() {
	calcApp.setSum();
	calcApp.calcAns();
})


var helpers = {
    add: function(a, b) {
        return	Number(a) + Number(b)
    },
    subtract: function(a, b) {
        return Number(a) - Number(b);
    },
    multiply: function(a, b) {
        return Number(a) * Number(b);
    },
    divide: function(a, b) {
        return Number(a) / Number(b);
    },
    showNum: function(num) {
        $('#answer').val(num);
    },
    addOperator: function(symbol) {
        calcApp.sum.operators.push(symbol);
    },
    addValue: function(value) {
        calcApp.sum.values.push(value);
    },
    resetSum: function() {
        calcApp.sum.values = [];
        calcApp.sum.operators = [];
    },
    clearAns: function() {
        $('#answer').val('');
    }
}


var calcApp = {
    sum: {
        'values': [],
        'operators': []
    },
    answer: 0,
    setSum: function() {
        var preValIsOperator = false;
        var isFloat = false;
        $('button').click(function(e) {
            e.preventDefault;
            var val = $(this).text(),
                currVal = $('#answer').val();
            //  checks if button is number

            if (!isNaN(val)) {
                //if previous button was operator, clear answer box and show new button pressed
                if (preValIsOperator) {
                    helpers.clearAns();
                    helpers.showNum(val);
                }
                else {
                    //Otherwise, add the button to the answer box
                    val = currVal + val;
                    helpers.showNum(val);
                }
                preValIsOperator = false;
            }
            if (val === '.' && !isFloat) {
                val = currVal + val;
                helpers.showNum(val);
                isFloat = true;
            }
            // functionality if operator is pressed
            if (val === 'x' || val === '-' || val === '+' || val === '÷') {
                helpers.addOperator(val);
                helpers.addValue(currVal);
                preValIsOperator = true;
            }
            if (val === 'AC') {
                helpers.resetSum();
                helpers.clearAns();
            }
            if (val == 'CE') {
                calcApp.sum.values.pop();
                calcApp.sum.operators.pop();
                helpers.clearAns();
            }
        });
    },
    calcAns: function(){
        $('#equals').click(function(e) {
            e.preventDefault;
            var values = calcApp.sum.values;
            var operators = calcApp.sum.operators;
            var currVal = $('#answer').val();

            //Adds current value to values array
            helpers.addValue(currVal);

            //sets answers to be firts value to start with.
            answer = values[0];

            //loops through values array and runs operator on current and next value
            for (i = 0; i < values.length; i++) {
                if (operators[i] == '+') {
                    answer = helpers.add(answer, values[i+1]);
                }
                if (operators[i] == '-') {
                    answer = helpers.subtract(answer, values[i+1]);
                }
                if (operators[i] == '÷') {
                    answer = helpers.divide(answer, values[i+1]);
                }
                if (operators[i] == 'x') {
                    answer = helpers.multiply(answer, values[i+1]);
                }
            }
            $('#answer').val(answer);
            helpers.resetSum();
            console.log(values);
            console.log(operators);
        });
    }
};











