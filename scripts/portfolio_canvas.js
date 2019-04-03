function portfolioCanvas() {

	let scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	let renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true
	});
	renderer.shadowMapEnabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("portfolio-media").appendChild(renderer.domElement);

	window.addEventListener("resize", function() {

		let width = window.innerWidth;
		let height = window.innerHeight;

		renderer.setSize(width, height);

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	});

	let controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target = new THREE.Vector3(0, 0, -300);
	controls.zoomSpeed = .009;
	controls.enableRotate = false;

	camera.position.z = 7;

	let picGeo_landscape = new THREE.PlaneGeometry(8, 7, 1);
	let picGeo_portrait = new THREE.PlaneGeometry(5, 7, 1);

	let pic1Material = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load("../media/test1.jpg")
	});

	let pic1 = new THREE.Mesh(picGeo_portrait, pic1Material);
	let pic2 = new THREE.Mesh(picGeo_portrait, pic1Material);
	let pic3 = new THREE.Mesh(picGeo_portrait, pic1Material);
	let pic4 = new THREE.Mesh(picGeo_portrait, pic1Material);
	let pic5 = new THREE.Mesh(picGeo_portrait, pic1Material);
	let pic6 = new THREE.Mesh(picGeo_portrait, pic1Material);

	scene.add(pic1, pic2, pic3, pic4, pic5, pic6);

	let update = function() {

		pic1.position.z = 0;

		pic2.position.z = -10;

		pic3.position.z = -20;

		pic4.position.z = -30;

		pic5.position.z = -40;

		pic6.position.z = -50;
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

portfolioCanvas();