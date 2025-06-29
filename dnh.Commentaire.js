// ✅ Ta configuration Firebase (à coller ici aussi)
const firebaseConfig = {
  apiKey: "AIzaSyAkfWtE910f6c0zPflpdVonEAdee-UZZpc",
  authDomain: "dnhevents-5b020.firebaseapp.com",
  projectId: "dnhevents-5b020",
  storageBucket: "dnhevents-5b020.firebasestorage.app",
  messagingSenderId: "734511876345",
  appId: "1:734511876345:web:e20ff86e342ebf65d9fa28",
  measurementId: "G-VBHVVKCWTE"
};
  // Initialiser Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  const form = document.getElementById("formulaire");
  const liste = document.getElementById("listeCommentaires");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nom = document.getElementById("nom").value;
    const message = document.getElementById("message").value;
    const id = Date.now();
  
    db.ref("commentaires/" + id).set({
      nom,
      message,
      date: new Date().toLocaleString()
    });
  
    form.reset();
  });
  
  db.ref("commentaires").on("value", function(snapshot) {
    liste.innerHTML = "";
    snapshot.forEach(function(child) {
      const data = child.val();
      const id = child.key;
  
      const div = document.createElement("div");
      div.className = "commentaire";
      div.innerHTML = `
        <strong>${data.nom}</strong> <small>(${data.date})</small>
        <button class="supprimer" onclick="supprimerCommentaire('${id}')">Supprimer</button>
        <p>${data.message}</p>
      `;
      liste.prepend(div);
    });
  });
  
  function supprimerCommentaire(id) {
    if (confirm("Supprimer ce commentaire ?")) {
      db.ref("commentaires/" + id).remove();
    }
  }
  