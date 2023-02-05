import '../css/style.css'

import * as THREE from 'three';
import { IcosahedronGeometry } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Camera, Scene, Render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(50);
camera.position.setY(0);

//Background
const spaceBG = new THREE.TextureLoader().load("allImages/space.webp");
scene.background = spaceBG;

//Planet Earth
const planetEarth = new THREE.TextureLoader().load("allImages/PlanetEarth.jpg");
const planetEarthNormal = new THREE.TextureLoader().load("allImages/PlanetEarthNormal.jpg");
const icosahedron2 = new THREE.Mesh(
  new THREE.IcosahedronGeometry(10,6), new THREE.MeshStandardMaterial({map: planetEarth, normalMap: planetEarthNormal})
  );

//astronaut
const gltfLoader = new GLTFLoader();
let austronautReference;
gltfLoader.load("./hand_low_poly/scene.glTF", (gltfScene) => {
  gltfScene.scene.scale.set(3,3,3);
  gltfScene.scene.position.y = 10;
  gltfScene.scene.position.x = 35;
  gltfScene.scene.position.z = -35;
  gltfScene.scene.rotation.y = -0.5;
  gltfScene.scene.rotation.z = -0.5;

  austronautReference = gltfScene.scene;

  //calling method
  addSceneToScene();
});

function addSceneToScene() {
  scene.add(austronautReference);
}


//moon
let globalScene;
const gltfLoader2 = new GLTFLoader();

gltfLoader2.load("./head_phones/scene.gltf", (gltfScene2) => {
  gltfScene2.scene.scale.set(0.1,0.1,0.1);
  gltfScene2.scene.position.y = 0;
  gltfScene2.scene.position.x = 20;
  gltfScene2.scene.position.z = -40;
  

  globalScene = gltfScene2.scene;

  addSceneToScene2();
});

function addSceneToScene2() {
  scene.add(globalScene);
}

//inflatable
//"Inflatable Pool Float Ring - Low Poly" (https://skfb.ly/ourBY) by Styro is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
let inflatableReference;
const gltfLoader3 = new GLTFLoader();

gltfLoader3.load("./pool/inflatable_pool_float_ring_-_low_poly.glb", (gltfScene3) => {
  gltfScene3.scene.scale.set(10,10,10);
  gltfScene3.scene.position.y = 0;
  gltfScene3.scene.position.x = 0;
  gltfScene3.scene.position.z = 10;
  gltfScene3.scene.rotation.z = -0.5;

  inflatableReference = gltfScene3.scene;

  addSceneToScene3();
});

function addSceneToScene3() {
  scene.add(inflatableReference);
}

//lights
const pointLight = new THREE.PointLight(0xAEAEAE);
//pointLight.position.x = ;
pointLight.position.y = 100;
pointLight.position.x = 100;
const ambientLight = new THREE.AmbientLight(0x3A3543);
icosahedron2.position.setZ(-40);
icosahedron2.position.x += 20;

// Matt
const geometry4 = new THREE.BoxGeometry(2, 2, 2);
const texture4 = new THREE.TextureLoader().load('allImages/Matt.jpg');
const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
const Matt = new THREE.Mesh(geometry4, material4);
Matt.position.z = 40;
Matt.position.x = -11;
Matt.position.y -= 1;

// Mytien
const geometry6 = new THREE.BoxGeometry(2, 2, 2);
const texture6 = new THREE.TextureLoader().load('allImages/Mytien.jpg');
const material6 = new THREE.MeshBasicMaterial({ map: texture6 });
const Mytien = new THREE.Mesh(geometry6, material6);
Mytien.position.z = 40;
Mytien.position.x = -11;
Mytien.position.y -= 1;



// Tim
const geometry7 = new THREE.BoxGeometry(2, 2, 2);
const texture7 = new THREE.TextureLoader().load('allImages/Tim.jpg');
const material7 = new THREE.MeshBasicMaterial({ map: texture7 });
const Tim = new THREE.Mesh(geometry7, material7);
Tim.position.z = 40;
Tim.position.x = -11;
Tim.position.y -= 1;



// Rish
const geometry8 = new THREE.BoxGeometry(2, 2, 2);
const texture8 = new THREE.TextureLoader().load('allImages/Rish.jpg');
const material8 = new THREE.MeshBasicMaterial({ map: texture8 });
const Rish = new THREE.Mesh(geometry8, material8);
Rish.position.z = 40;
Rish.position.x = -11;
Rish.position.y -= 1;



// Josh
const geometry9 = new THREE.BoxGeometry(2, 2, 2);
const texture9 = new THREE.TextureLoader().load('allImages/Josh.jpg');
const material9 = new THREE.MeshBasicMaterial({ map: texture9 });
const Josh = new THREE.Mesh(geometry9, material9);
Josh.position.z = 40;
Josh.position.x = -11;
Josh.position.y -= 1;


scene.add(Josh);
scene.add(Matt);
scene.add(Mytien);
scene.add(Tim);
scene.add(Rish);

scene.add(ambientLight);
scene.add(pointLight);
//scene.add(icosahedron);
scene.add(icosahedron2);

//many stars function
function addStar(){
  const geometry = new THREE.IcosahedronGeometry(0.5,3);
  const material = new THREE.MeshBasicMaterial({color: 0xAEAEAE});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  star.position.set(x,y,z);

  scene.add(star);
}

Array(300).fill().forEach(addStar);


//camera scroll
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t *  -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();


function animate(){
  requestAnimationFrame(animate);

  //first object animations
  // icosahedron.rotation.x += 0.01;
  // icosahedron.rotation.z += 0.01;
  //icosahedron.rotation.y += 0.005;

  // icosahedron2.rotation.x += 0.01;
  // icosahedron2.rotation.z += 0.01;
  icosahedron2.rotation.y += 0.005;

  //globalScene.rotation.y -= 0.0005;
  globalScene.rotation.y -= 0.01;

  austronautReference.rotation.x -= 0.01;

  inflatableReference.rotation.x += 0.01;

  Matt.rotation.y += 0.01;
  Matt.rotation.x += 0.01;
  
  Mytien.rotation.y += 0.01;
  Mytien.rotation.x += 0.01;

  Rish.rotation.y += 0.01;
  Rish.rotation.x += 0.01;

  Tim.rotation.y += 0.01;
  Tim.rotation.x += 0.01;

  Josh.rotation.y += 0.01;
  Josh.rotation.x += 0.01;

  //second object animations

  renderer.render(scene, camera);
}

animate();
