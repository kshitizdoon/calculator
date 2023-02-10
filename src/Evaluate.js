import React from 'react'
function lcm(a,b) {
    return (a*b)/gcd(a,b);
}
function gcd(a,b) {

    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}
function Evaluate(expression)
    {
        let tokens = expression.split('');
  
         // Stack for numbers: 'values'
        let values = [];
  
        // Stack for Operators: 'ops'
        let ops = [];
  
        for (let i = 0; i < tokens.length; i++)
        {
             // Current token is a whitespace, skip it
            if (tokens[i] === ' '||tokens[i]=== ',')
            {
                continue;
            }
  
            // Current token is a number, push it to stack for numbers
            if ((tokens[i] >= '0' && tokens[i] <= '9')||(tokens[i]==='.'))
            {
                let sbuf = "";
                  
                // There may be more than
                // one digits in number
                while (i < tokens.length && (tokens[i] >= '0' && tokens[i] <= '9')||(tokens[i]==='.'))
                {
                    sbuf = sbuf + tokens[i++];
                }
                values.push(parseFloat(sbuf, 10));
                
                // Right now the i points to
                // the character next to the digit, since the for loop also increases
                // the i, we would skip one token position; we need to
                // decrease the value of i by 1 to correct the offset.
                  i--;
            }
  
            // Current token is an opening
            // brace, push it to 'ops'
            else if (tokens[i] == '(')
            {
                ops.push(tokens[i]);
            }
  
            // Closing brace encountered, solve entire brace
            else if (tokens[i] == ')')
            {
                while (ops[ops.length - 1] != '(')
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                  values.pop()));
                }
                ops.pop();
            }
  
            // Current token is an operator.
            else if (tokens[i] == '+' ||tokens[i] == '-' ||tokens[i] == '*' ||
                     tokens[i] == '/' )
            {
                  
                // While top of 'ops' has same
                // or greater precedence to current
                // token, which is an operator.
                // Apply operator on top of 'ops'
                // to top two elements in values stack

                while (ops.length > 0 &&
                         hasPrecedence(tokens[i],
                                     ops[ops.length - 1]))
                {
                    if(ops[ops.length-1]==='S'||ops[ops.length-1]==='C'){
                        values.push(applyOpp(ops.pop(),values.pop()));
                    }
                    else
                        values.push(applyOp(ops.pop(),values.pop(),values.pop()));
                }
  
                // Push current token to 'ops'.
                ops.push(tokens[i]);
            }
            else if(tokens[i] == 'S' ||tokens[i] == 'C' || tokens[i] == 'G' ||tokens[i] == 'L'){
                let num_braces=1;
                let operation = tokens[i];
                // Sin(
                i+=4;
                let exp = ""; let exp2="";
                while(num_braces){
                    if(tokens[i]==')')num_braces-=1;
                    else if(tokens[i]=='(')num_braces+=1;
                    else if(tokens[i]==','){
                        exp2=exp; exp="";
                    }
                    else exp+=tokens[i];
                    i++;
                }
                if(operation=='S')values.push(Math.sin(Evaluate(exp)));
                else if(operation=='C')values.push(Math.cos(Evaluate(exp)));
                else if(operation=='G')values.push(gcd(Evaluate(exp),Evaluate(exp2)));
                else {
                    values.push(lcm(Evaluate(exp),Evaluate(exp2)));
                }
            }
            else{
              return "Please Check your Expression Again";
            }
        }
  
        // Entire expression has been
        // parsed at this point, apply remaining
        // ops to remaining values
        while (ops.length > 0)
        {
            if(ops[ops.length-1]==='S'||ops[ops.length-1]==='C'){
                values.push(applyOpp(ops.pop(),values.pop()));
            }
            else
                values.push(applyOp(ops.pop(),values.pop(),values.pop()));
        }
  
        // Top of 'values' contains
        // result, return it
        return values.pop();
    }
  
    // Returns true if 'op2' has
    // higher or same precedence as 'op1',
    // otherwise returns false.
    function hasPrecedence(op1, op2)
    {
        if (op2 == '(' || op2 == ')' || op2 == 'S'||op2 == 'G'||op2=='L'||op2=='C')
        {
            return false;
        }
        if ((op1 == '*' || op1 == '/') &&
               (op2 == '+' || op2 == '-'))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    // A utility method to apply an
    // operator 'op' on operands 'a'
    // and 'b'. Return the result.
function applyOp(op, b, a)
{
    switch (op)
    {
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        if (b == 0)
        {
            return "Cannot divide by zero";
        }
        return parseFloat(a / b, 10);
    }
    return 0;
}
function applyOpp(op,a){
    if(op=='S')return Math.sin(a);
    else return Math.cos(a);
}

export default Evaluate;