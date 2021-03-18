function zoom(multiple, event)  //Fonction de zoom sur le document
{
    coef = coef*multiple    //On modifie le coefficient global
    var newwidth = Math.round(document.getElementById("ID_DE_L'IMAGE").width * multiple); //on redefinit les dimmentions de l'image
    var newheight = Math.round(document.getElementById("ID_DE_L'IMAGE").height * multiple);
    document.getElementById("ID_DE_L'IMAGE").innerHTML = '<img id = "docannote" src='+imagefond.src+' style="width:'+newwidth+'px;height:'+newwidth+'px;z-index:0" />';
}