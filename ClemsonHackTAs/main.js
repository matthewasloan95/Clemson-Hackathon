import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 500);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(50);
camera.position.setY(35);

renderer.render(scene,camera);

//first object, outline
const geometry = new THREE.IcosahedronGeometry(10,1);
const material = new THREE.MeshStandardMaterial({color: 0xFF3135, wireframe: true});
const icosahedron = new THREE.Mesh(geometry, material);
//first object, fill
const geometry2 = new THREE.IcosahedronGeometry(10,1);
const material2 = new THREE.MeshStandardMaterial({color: 0xAA3135});
const icosahedron2 = new THREE.Mesh(geometry2, material2);

//second object



//lights
const pointLight = new THREE.PointLight(0xAEAEAE);
//pointLight.position.x = ;
pointLight.position.y = 100;
pointLight.position.x = 100;
const ambientLight = new THREE.AmbientLight(0x3A3543);

scene.add(ambientLight);
scene.add(pointLight);
scene.add(icosahedron);
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


function animate(){
  requestAnimationFrame(animate);

  //first object animations
  // icosahedron.rotation.x += 0.01;
  // icosahedron.rotation.z += 0.01;
  icosahedron.rotation.y += 0.005;

  // icosahedron2.rotation.x += 0.01;
  // icosahedron2.rotation.z += 0.01;
  icosahedron2.rotation.y += 0.005;


  //second object animations


  renderer.render(scene, camera);
}

animate();