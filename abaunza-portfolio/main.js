import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const normalTexture = new THREE.TextureLoader().load('normal.jpg');

// Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(40, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xeae19d })
);
scene.add(sun);
sun.position.z = -50;
sun.position.setX(0);

// Mercury
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({
    normalMap: normalTexture,
    color: 0xa5845c
  })
);
scene.add(mercury);
mercury.position.z = -10;
mercury.position.setX(6);

// Venus
const venusTexture = new THREE.TextureLoader().load('venus.jpg');
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(1.1, 32, 32),
  new THREE.MeshStandardMaterial({ map: venusTexture, color: 0xba6d10 })
);
scene.add(venus);
venus.position.z = -4;
venus.position.setX(-9);

// Earth
const earthTexture = new THREE.TextureLoader().load('earth.jfif');
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1.2, 32, 32),
  new THREE.MeshStandardMaterial({ map: earthTexture})
);
scene.add(earth);
earth.position.z = 1;
earth.position.setX(5);

// Moon
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.25, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
scene.add(moon);
moon.position.z = 2;
moon.position.setX(5.5);
moon.position.setY(1);

// Mars
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 32, 32),
  new THREE.MeshStandardMaterial({ normalMap: normalTexture, color: 0xe0530d })
);
scene.add(mars);
mars.position.z = 0;
mars.position.setX(20);

// Jupiter
const jupiterTexture = new THREE.TextureLoader().load('jupiter.png');
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(3.2, 32, 32),
  new THREE.MeshStandardMaterial({ map: jupiterTexture, color: 0xffcf91 })
);
scene.add(jupiter);
jupiter.position.z = 8;
jupiter.position.setX(8);

// saturn
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(8, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xe5de97 })
);
scene.add(saturn);
saturn.position.z = 12;
saturn.position.setX(-12);
// Saturn's Rings
const rings = new THREE.Mesh(
  new THREE.TorusGeometry(11, 1.7, 2, 100),
  new THREE.MeshStandardMaterial({ color: 0x7f7b4c })
);

scene.add(rings);
rings.position.z = 12;
rings.position.setX(-12);

// Uranus
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xa8f4ea })
);
scene.add(uranus);
uranus.position.z = 36;
uranus.position.setX(18);

// Uranus's Rings
const uRings = new THREE.Mesh(
  new THREE.TorusGeometry(8, 0.1, 6, 100),
  new THREE.MeshStandardMaterial({ color: 0xe0fffa })
);
scene.add(uRings);
uRings.position.z = 36;
uRings.position.setX(18);

// Neptune
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x3d94ff })
);
scene.add(neptune);
neptune.position.z = 50;
neptune.position.setX(12);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);

// Background
const spaceTexture = new THREE.TextureLoader().load('space.gif');
scene.background = spaceTexture;

// Scroll Animation
const moveCamera= () => {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.005;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.005;
  camera.position.z = t * -0.01;
  camera.position.x = t * 0.00000;
  camera.rotation.y = t * 0.00009;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate);
  mercury.rotation.y += 0.005;
  venus.rotation.y += 0.005;
  earth.rotation.y += 0.004;
  mars.rotation.y += 0.005;
  jupiter.rotation.y += 0.003;
  saturn.rotation.y += 0.002;
  rings.rotation.x += 0.003;
  rings.rotation.y += 0.003;
  // rings.rotation.z += 0.005;
  uRings.rotation.y += 0.0035;
  moon.rotation.x += 0.005;
  // controls.update();
  renderer.render(scene, camera);
}

animate();