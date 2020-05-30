function valider()
{
 if(document.getElementById('nom').value=='')
    {
document.getElementById('nomerr').innerHTML='le champ ne peut pas etre vide';
        return false;
    }
else{
    document.getElementById('nomerr').innerHTML='';
    alert('le form peut etre envoyé');
    return true;
    
} 

   
    if(document.getElementById('prenom').value=='')
    {
document.getElementById('prerr').innerHTML='le champ ne peut pas etre vide';
        return false;
    }
else{
    document.getElementById('prerr').innerHTML='';
    alert('le form peut etre envoyé');
    return true;
    
} 
}