import '../css/style.css'

import * as THREE from 'three';
import { IcosahedronGeometry } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(50);
camera.position.setY(0);



const spaceBG = new THREE.TextureLoader().load("allImages/space.webp");
const spaceNormal = new THREE.TextureLoader().load("allImages/spaceNormal.png");
scene.background = spaceBG;
scene.normalMap = spaceNormal;

//first object, outline
// const geometry = new THREE.IcosahedronGeometry(10,1);
// const material = new THREE.MeshStandardMaterial({color: 0xFF3135, wireframe: true});
// const icosahedron = new THREE.Mesh(geometry, material);

//first object, fill
const planetEarth = new THREE.TextureLoader().load("allImages/PlanetEarth.jpg");
const planetEarthNormal = new THREE.TextureLoader().load("allImages/PlanetEarthNormal.jpg");

const icosahedron2 = new THREE.Mesh(
  new THREE.IcosahedronGeometry(10,6), new THREE.MeshStandardMaterial({map: planetEarth, normalMap: planetEarthNormal})
  );

//second object
const gltfLoader = new GLTFLoader();
gltfLoader.load("./hand_low_poly/scene.gltf", (gltfScene) => {
  gltfScene.scene.scale.set(0.1,0.1,0.1);
  gltfScene.scene.position.y = -50;
  gltfScene.scene.position.x = 20;
  gltfScene.scene.position.z = -35;

  scene.add(gltfScene.scene);

});

//second object
const gltfLoader2 = new GLTFLoader();
let sceneObject;

gltfLoader2.load("./head_phones/scene.gltf", (gltfScene2) => {
  gltfScene2.scene.scale.set(1,1,1);
  gltfScene2.scene.position.y = 0;
  gltfScene2.scene.position.x = 0;
  gltfScene2.scene.position.z = -40;

  sceneObject = gltfScene2.scene;
  scene.add(gltfScene2.scene);

});


//lights
const pointLight = new THREE.PointLight(0xAEAEAE);
//pointLight.position.x = ;
pointLight.position.y = 100;
pointLight.position.x = 100;
const ambientLight = new THREE.AmbientLight(0x3A3543);
icosahedron2.position.setZ(-40);
icosahedron2.position.x += 20;

scene.add(ambientLight);
scene.add(pointLight);
//scene.add(icosahedron);
scene.add(icosahedron2);

function addStar(){
  const geometry = new THREE.IcosahedronGeometry(0.5,3);
  const material = new THREE.MeshBasicMaterial({color: 0xAEAEAE});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  star.position.set(x,y,z);

  scene.add(star);
}

Array(300).fill().forEach(addStar);

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

  //second object animations

  renderer.render(scene, camera);
}

animate();


