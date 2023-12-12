var db = firebase.apps[0].firestore();

const btnActu = document.querySelector("#btnActu");
const txtCod = document.querySelector('#MCode');
const txtNom = document.querySelector('#MName');
const txtDes = document.querySelector('#MDescrip');
const ModI = document.querySelector('#ModId');

btnActu.addEventListener("click",function(){
    db.collection("Categorias").doc(ModI.value).update({
        "Codigo":txtCod.value,
        "Nombre":txtNom.value,
        "Descripcion":txtDes.value
    }).then(() => {
        console.log("Document successfully updated!");
        location.reload();
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });

});