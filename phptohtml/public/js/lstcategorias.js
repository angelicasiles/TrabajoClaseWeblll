var db = firebase.apps[0].firestore();

    const tabla = document.querySelector('#tabla');
    const btnA = document.querySelector('#btnActu');
    const ModId = document.querySelector('#ModId');
    const NombreM = document.querySelector('#MName');
    const CodM = document.querySelector('#MCode');
    const DesM = document.querySelector('#MDescrip');

    db.collection("Categorias").orderBy('Codigo', 'asc').get().then(function(query){
        tabla.innerHTML = "";
        var salida = "";
        query.forEach(function(doc){
            salida += '<tr>'
                salida += '<td id="">'+ doc.data().Codigo +'</td>'
                salida += '<td>'+ doc.data().Nombre + '</td>'
                salida += '<td>'+ doc.data().Descripcion + '</td>'
                salida += '<td align="center"><a class="btn btn-success" onclick="send(\''+  doc.id +'\')">Editar</a> <a class="btn btn-danger" onclick="Munction(\''+  doc.id +'\')">Borrar</a></td>'
            salida += '</tr>'
        })
        tabla.innerHTML = salida;
    })

    function Munction(id){
        db.collection("Categorias").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
            location.reload();
        }).catch((error) => {
            console.error("Error removing docusment: ", error);
        });
    }

    function send(id){
    
        var docRef = db.collection("Categorias").doc(id);

    docRef.get().then((doc) => {
    if (doc.exists) {
        var br = document.createElement("br"); 
        var form = document.createElement("form");
     
        CodM.setAttribute("value", doc.data().Codigo);
        NombreM.setAttribute("value", doc.data().Nombre);
        DesM.setAttribute("value", doc.data().Descripcion);
     
                    // create a submit button
  
                    ModId.setAttribute("value",id)
                    form.appendChild(br.cloneNode()); 
                    // Append the full name input to the form
                    form.appendChild(CodM); 
                     
                    // Inserting a line break
                    form.appendChild(br.cloneNode()); 
                     
                    // Append the DOB to the form
                    form.appendChild(NombreM); 
                    form.appendChild(br.cloneNode()); 
                     
                    // Append the emailID to the form
                    form.appendChild(DesM); 
                    form.appendChild(br.cloneNode()); 
                     
                     
                    // Append the submit button to the form
                    form.appendChild(btnA);
                    btnA.removeAttribute("hidden");
                    CodM.removeAttribute("hidden");
                    NombreM.removeAttribute("hidden");
                    DesM.removeAttribute("hidden"); 
     
                    document.getElementById("caja").appendChild(form);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
    console.log("Error getting document:", error);
    });     
    }