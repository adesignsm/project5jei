let mouse = new THREE.Vector2();

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMapEnabled = true;
renderer.setSize(800, 650);

document.getElementById("main-page-hero").appendChild(renderer.domElement);

window.addEventListener("resize", function() {

	let width = window.innerWidth;
	let height = window.innerHeight;

	renderer.setSize(width, height);

	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

let controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

let gifGeo = new THREE.PlaneGeometry(11, 7.5, 1);
let gif1Material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../media/gif1.png")});
let gif2Material = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("../media/gif2.png")});

let gif1 = new THREE.Mesh(gifGeo, gif1Material);
let gif2 = new THREE.Mesh(gifGeo, gif2Material);
	
scene.add(gif1);

var composer = new THREE.EffectComposer(renderer);

var renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

var glitchPass = new THREE.GlitchPass(10);
composer.addPass(glitchPass);
glitchPass.renderToScreen = true;

document.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(event) {

	mouseX = event.clientX - window.innerWidth / 2;
	mouseY = event.clientY - window.innerHeight / 2;

	camera.position.x = -(mouseX - camera.position.x) * 0.002;
	camera.position.y = (mouseY - camera.position.y) * 0.002;

	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

	camera.lookAt(scene.position);
	camera.updateMatrixWorld();
}

let update = function() {
		
};

let render = function() {

	composer.render();
	// renderer.render(scene, camera);
};

let animate = function() {

	requestAnimationFrame(animate);

	update();
	render();
};

animate();
