let num1='';
let num2='';
let op='';
let res='';

$(document).ready(function()
{

    $('button').on('click',function(e){

        let btn=e.target.innerHTML;

        if(btn>='0' && btn<="9" || btn=='.'){
            handleNum(btn);
        }
        else if(btn==='Clear')
        {
            num1=num2=op=res='';
            displayButton(res);
        }
        else{
            handleOp(btn);
        }
    });

});

function handleNum(num)
{
    if(op===""){
        num1+=num;
        displayButton(num1);
    }
    else{
        num2+=num;
        displayButton(num1+op+num);
    }

    

}
function handleOp(oper)
{
    if(op==="")
    {
        op=oper;
    }
    else{
            handleres();
            op=oper;
    }
        
}

function handleres()
{
    switch(op){
        
        case '+':
            res= +num1 + +num2;
            
            break;
        
        case '-':
            res = +num1 - +num2;
            
            break;  
        
        case '/':
                    res = +num1 / +num2;
                    
                    break; 
                
        case 'X':
            res = +num1 * +num2;
            
            break;
        
        case '%':
                res = +num1 % +num2;
                
                break;
        case '^':
            res = Math.pow(+num1 ,+num2);
                    
            break;
            
    }

displayButton(res);    

updateVariables();
        

}

function displayButton(btn)
{   
    if(btn=='')
        $('.input').text(0);
    else
        $('.input').text(btn);

}

function updateVariables()
{
    num1=res;
    num2="";
}