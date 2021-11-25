import './assets/styles/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

const ratio = window.matchMedia("(max-width: 767px)").matches ? 2 : 1;

console.log(window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const normalTexture = new THREE.TextureLoader().load('//normal.jpg');

// Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(42/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ color: 0xeae19d })
);
scene.add(sun);
sun.position.z = -50/ratio;
sun.position.setX(0/ratio);

// Mercury
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({
    normalMap: normalTexture,
    color: 0xa5845c
  })
);
scene.add(mercury);
mercury.position.z = -8/ratio;
mercury.position.setX(6/ratio);

// Venus
const venusTexture = new THREE.TextureLoader().load('/venus.jpg');
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(1.1/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ map: venusTexture, color: 0xba6d10 })
);
scene.add(venus);
venus.position.z = -6/ratio;
venus.position.setX(-11/ratio);

// Earth
const earthTexture = new THREE.TextureLoader().load('/earth.jfif');
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1.2/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ map: earthTexture})
);
scene.add(earth);
earth.position.z = 0/ratio;
earth.position.setX(-12/ratio);

// Moon
const moonTexture = new THREE.TextureLoader().load('/moon.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.25/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
scene.add(moon);
moon.position.z = 1.2/ratio;
moon.position.setX(-11/ratio);
moon.position.setY(1/ratio);

// Mars
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.8/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ normalMap: normalTexture, color: 0xe0530d })
);
scene.add(mars);
mars.position.z = 4/ratio;
mars.position.setX(-2/ratio);

// Jupiter
const jupiterTexture = new THREE.TextureLoader().load('/jupiter.png');
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ map: jupiterTexture, color: 0xffcf91 })
);
scene.add(jupiter);
jupiter.position.z = 15/ratio;
jupiter.position.setX(-8/ratio);

// saturn
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(4.5/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ color: 0xe5de97 })
);
scene.add(saturn);
saturn.position.z = 32/ratio;
saturn.position.setX(8/ratio);

// Saturn's Rings
const rings = new THREE.Mesh(
  new THREE.TorusGeometry(7/ratio, 1.7/ratio, 2/ratio, 100),
  new THREE.MeshStandardMaterial({ color: 0x7f7b4c })
);

scene.add(rings);
rings.position.z = 32/ratio;
rings.position.setX(8/ratio);

// Uranus
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(4/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ color: 0xa8f4ea })
);
scene.add(uranus);
uranus.position.z = 43/ratio;
uranus.position.setX(-10/ratio);

// Uranus's Rings
const uRings = new THREE.Mesh(
  new THREE.TorusGeometry(5.5/ratio, 0.1/ratio, 6/ratio, 100),
  new THREE.MeshStandardMaterial({ color: 0xe0fffa })
);
scene.add(uRings);
uRings.position.z = 43/ratio;
uRings.position.setX(-10/ratio);

// Neptune
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(4/ratio, 32/ratio, 32/ratio),
  new THREE.MeshStandardMaterial({ color: 0x3d94ff })
);
scene.add(neptune);
neptune.position.z = 64/ratio;
neptune.position.setX(2/ratio);

// Eating Avatar
const eatingTexture = new THREE.TextureLoader().load('/eating.jpg');
const eating = new THREE.Mesh(new THREE.BoxGeometry(3/ratio, 3/ratio, 3/ratio), new THREE.MeshBasicMaterial({ map: eatingTexture }));
scene.add(eating);
eating.position.setZ(25/ratio);
eating.position.setX(-36/ratio);
eating.position.setY(-6/ratio);

// Sitting Avatar
const sittingTexture = new THREE.TextureLoader().load('/sitting.jpg');
const sitting = new THREE.Mesh(new THREE.BoxGeometry(3/ratio, 3/ratio, 3/ratio), new THREE.MeshBasicMaterial({ map: sittingTexture }));
scene.add(sitting);
sitting.position.setZ(32/ratio);
sitting.position.setX(-38/ratio);
sitting.position.setY(-2.5/ratio);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5/ratio, 5/ratio, 5/ratio);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25/ratio, 24/ratio, 24/ratio);
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
const spaceTexture = new THREE.TextureLoader().load('/space.gif');
scene.background = spaceTexture;

// Scroll Animation
const moveCamera= () => {
  const t = document.body.getBoundingClientRect().top;
  const zRotation = window.matchMedia("(max-width: 767px)").matches ? -0.0019 : -0.005;
  const xRotation = window.matchMedia("(max-width: 767px)").matches ? 0.0045 : 0.01;
  const yRotation = window.matchMedia("(max-width: 767px)").matches ? 0.000095 : 0.00025;
  console.log(t)
;  moon.rotation.x += 0.005;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.005;
  camera.position.z = t * zRotation;//-0.1; //Controls z-axis (depth)
  camera.position.x = t * xRotation;//0.005; //Controls vertical
  camera.rotation.y = t * yRotation;// 0.0001; //Controls horizontally
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
  rings.rotation.x += 0.002;
  rings.rotation.y += 0.002;
  // rings.rotation.z += 0.005;
  uRings.rotation.y += 0.003;
  moon.rotation.x += 0.005;
  eating.rotation.y += -0.003;
  eating.rotation.z += -0.003;
  sitting.rotation.y += -0.002;
  // sitting.rotation.z += 0.001;
  // controls.update();
  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
}

var body = document.body, html = document.documentElement;
const percentage = window.matchMedia("(max-width: 767px)").matches ? 93.3 : 88.6;
const maxScrollDepth = html.scrollHeight * percentage;
//We need the max scroll depth to lead to the desired coordinates in our solar system!


if (window.matchMedia("(max-width: 767px)").matches) {
  // The viewport is less than 768 pixels wide and we need to go for 93%
  console.log("This is a mobile device.");
}
else {
  console.log("This is NOT a mobile device");
}

console.log(`Height of the window is ${html.scrollHeight}`)

animate();