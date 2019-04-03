function loadingCanvas() {

	let scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	let renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.shadowMapEnabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("loading-page").appendChild(renderer.domElement);

	window.addEventListener("resize", function() {

		let width = window.innerWidth;
		let height = window.innerHeight;

		renderer.setSize(width, height);

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});

	let controls = new THREE.OrbitControls(camera, renderer.domElement);
	camera.position.z = 10;

	let logoGeo = new THREE.PlaneGeometry(5, 7, 1);
	let logo1Material = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load("../media/loading_logo1.png"),
		side: THREE.BackSide
	});
	let logo2Material = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load("../media/loading_logo2.png"),
		side: THREE.FrontSide
	});

	let logo1 = new THREE.Mesh(logoGeo, logo1Material);
	let logo2 = new THREE.Mesh(logoGeo, logo2Material);

	scene.add(logo1, logo2);

	let update = function() {

		logo1.position.y = 2;
		logo2.position.y = -1;

		logo1.rotation.y += 0.02;
		logo2.rotation.y += 0.02;
	};

	let render = function() {

		renderer.render(scene, camera);
	};

	let animate = function() {

		requestAnimationFrame(animate);

		update();
		render();
	};

	animate();
}

loadingCanvas();