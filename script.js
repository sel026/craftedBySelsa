import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometry, material);
cube.scale.set(3, 3, 3); // You can adjust the size here
scene.add(cube);

// Add light
const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
scene.add(light);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Camera position
camera.position.z = 5;

// Animation function
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02; // Rotate cube
    cube.rotation.y += 0.02; // Rotate cube
    renderer.render(scene, camera);
}
animate();

