function check()
{
    let number=document.getElementById("n").value ;
    if(number%2==0)
    {
        document.getElementById("op").value = "Even Number";
    }
    else
    {
        document.getElementById("op").value = "Odd Number";
    }
}