/* 
Activité : gestion des contacts
*/

//Creation un Objet . 
var lescontacts = {
    init : function(nom,prenom) {
    this.nom=nom;
    this.prenom=prenom;
    },
    afficher : function(){
        return "Nom :"+this.nom+" , Prenom :"+this.prenom ;
    }
}

// DECLARER UN TABLEAU DE CONTACT 
var tabContacts = [] ; 

//Creation de 2 Objets prototype avec notre Objet lescontacs . 
var contact1 = Object.create(lescontacts) ;
var contact2 = Object.create(lescontacts) ; 

    contact1.init("Carole","Lévisse"); 
    contact2.init("Mélodie","Nelsonne");
    tabContacts.push(contact1,contact2) ; 

// fonction permet d'afficher tous les contacts dans le tableau . 
function affichageContact(){
    for(var i=0;i<tabContacts.length;i++) {
        console.log(tabContacts[i].afficher()) ; 
    }
}

//fonction permet d'ajouter un nouveau contact . 
function ajouterContact(){
    var n = prompt("saisir le nom ")   ; 
    var p = prompt("saisir le prenom "); 
    var c = Object.create(lescontacts) ; 
    c.init(n,p) ;
    tabContacts.push(c); 
}

//ici notre programme principale avec le Menu .
do{
        var choix = Number (prompt("*** Menu *** \n 1 - afficher \n 2 - ajouter \n 0 - Quitter \n  saisir votre choix")) ;

        switch (choix) {
            case 0 :
            console.log("vous-avez quitter le programme");
            alert("quiter le programme"); 
            break; 
            case 1 : 
                console.log("affiche les contacts");
                affichageContact(); 
            break;
            case 2 : 
                console.log("ajouter un nouveau contact"); 
                ajouterContact(); 
                console.log("contact ajoutee avec succes");
                affichageContact();
                break;
            default: 
                console.log("re essayer ... ");
            }
        }while (!choix==0);
        
  
     
   // } while (!(choix ==1 | choix ==2 | choix ==0 )) ; 


