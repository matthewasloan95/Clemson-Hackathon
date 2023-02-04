import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

//first object, outline
const geometry = new THREE.IcosahedronGeometry(10,1);
const material = new THREE.MeshBasicMaterial({color: 0xFF3135, wireframe: true});
const icosahedron = new THREE.Mesh(geometry, material);
//first object, fill
const geometry2 = new THREE.IcosahedronGeometry(10,1);
const material2 = new THREE.MeshBasicMaterial({color: 0xAA3135});
const icosahedron2 = new THREE.Mesh(geometry2, material2);

scene.add(icosahedron);
scene.add(icosahedron2);

function animate(){
  requestAnimationFrame(animate);

  //first object animations
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.z += 0.01;
  icosahedron.rotation.y += 0.005;

  icosahedron2.rotation.x += 0.01;
  icosahedron2.rotation.z += 0.01;
  icosahedron2.rotation.y += 0.005;
  //second object animations


  renderer.render(scene, camera);
}

animate();