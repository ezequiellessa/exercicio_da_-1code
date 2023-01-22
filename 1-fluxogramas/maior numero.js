var numero1 = 500;

var numero2 = 440;

var numero3 = 90;
 


if(numero1>=numero2 && numero1>=numero3)
{
maior=numero1;
}
else if(numero2>=numero1 && numero2>=numero3)
{
maior=numero2;
}
else if(numero3>=numero2 && numero3>=numero1)
{
maior=numero3;
}


console.log("o numero maior é "+maior);