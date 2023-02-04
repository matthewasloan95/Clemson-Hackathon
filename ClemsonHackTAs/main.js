import './style.css'

import * as THREE from 'three';
import { WireframeGeometry } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 500);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.IcosahedronGeometry(6,10);
const material = new THREE.MeshBasicMaterial({color: 0xFA3135,wireframe: true});
const icosahedron = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate(){
  requestAnimationFrame(animate);

  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.z += 0.01;
  icosahedron.rotation.y += 0.005;


  renderer.render(scene, camera);
}

animate();