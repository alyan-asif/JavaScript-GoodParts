function calculator(op1,op2,func,op){
    var result = func(op1,op2,op);
    return result;
}
function operator(op1,op2,op){
    if(op == "+")
    return op1 + op2;
    else if(op == "-")
    return op1 - op2
    else if(op == "*")
    return op1 * op2
    else if(op == "/")
    return op1 / op2
    else
    return 0;

}
console.log("By Adding Two Numbers is " + calculator(4,5,operator,"+"))
console.log("By Subtract Two Numbers is " + calculator(4,5,operator,"-"))
console.log("For Undefined Operator is " + calculator(4,5,operator,""))