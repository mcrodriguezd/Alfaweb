//Firebase express cors
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors");
const router = express();
// origenes cruzados CORS
router.use(cors({origin: true}));


//crear datos en la coleccion cursos (CREATE)
router.post('/curso', async (req,res)=>{
  const curso = await
  admin.firestore().collection('cursos').add(req.body);
  res.send(curso);
});

//leer un curso en particular (READ)
router.get('/curso/:id', async (req,res)=>{
  const curso = await
  admin.firestore().collection('cursos').doc(req.params.id).get();
  res.send(curso);
});


//actualizar datos en la coleccion cursos (UPDATE)
router.put('/curso/:id', async (req,res)=>{
  const curso = await
  admin.firestore().collection('cursos').doc(req.params.id).update(req.body);
  res.send(curso);
});

// eliminar datos en la coleccion cursos (DELETE)
router.delete('/curso/:id', async (req,res)=>{
  const curso = await
  admin.firestore().collection('cursos').doc(req.params.id).delete();
  res.send(curso);
});

//trae una lista de cursos
router.get('/cursos', async (req,res)=>{
  const cursos = await
  admin.firestore().collection('cursos').get();
  let lista=[];
  cursos.docs.forEach(doc=>{
    lista.push({id:doc.id, data: doc.data() });
  });
  res.send(lista);
});

// API como una Cloud Function
exports.prueba = functions.https.onRequest(router);
