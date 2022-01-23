
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(20);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(10,10,10);
const material = new THREE.MeshStandardMaterial( {color: 0x202428 });
const cube = new THREE.Mesh(geometry, material);
scene.add( cube );



const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-20,-20,20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

// const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    // controls.update();

    renderer.render( scene, camera );
}

animate();