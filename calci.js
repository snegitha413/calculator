function openpara(val)
		{
		calculator.result.value += val;
		}
		function closepara(valval)
		{
		calculator.result.value += valval;
		}

	function sin(){
	document.calculator.result.value+= 'Math.sin(';
	}

	function cos(){
	document.calculator.result.value+= 'Math.cos(';
	}

	function tan(){
	document.calculator.result.value+='Math.tan(';
	}
	function log(){
	document.calculator.result.value+= 'Math.log10(';	
	}

	function ln(){
	document.calculator.result.value+= 'Math.log(';	
	}
	
	function exp(){
		document.calculator.result.value+='Math.exp(';
    }
	function fact(x)
		{
		factvar=1;
		for (i=1;i<=x;i++)
		{
		factvar=factvar*i;
		}
		return factvar;
		}
	function factorial(x){
		calculator.result.value+='fact(';
	}

	function BACKSPC(){
	var size = document.calculator.result.value.length;
	document.calculator.result.value= document.calculator.result.value.substr(0, size-1);
	}

	function square(){
	document.calculator.result.value= Math.pow(document.calculator.result.value, 2);
	}

	function cubed(){
	document.calculator.result.value= Math.pow(document.calculator.result.value, 3);
	}

	function sqrt2(){
	document.calculator.result.value= Math.pow(document.calculator.result.value, 1/2);
	}

	function number(value){
	document.calculator.result.value+= value;
	}

	function rmv(){
	document.calculator.result.value=" ";
	}

	function equal(){
	document.calculator.result.value=eval(document.calculator.result.value);
	}
	
