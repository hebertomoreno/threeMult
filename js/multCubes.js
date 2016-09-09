container = document.createElement( 'div' );
document.body.appendChild(container);

/*Construct Scene and set background*/
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xFFFFFF );
/************************************/

/*Construct camera and set properties*/
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.z = 1000;
/*************************************/

/*Construct and set Renderer*/
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
/****************************/

/****Camera Rotation Script****/
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
/******************************/

var geometry = new THREE.BoxGeometry( 100, 100, 100 );
var material = new THREE.MeshNormalMaterial();
/*var material = new THREE.MeshPhongMaterial( {
						color: 0x000000,
						emissive: 0x000000,
						side: THREE.DoubleSide,
						shading: THREE.FlatShading,
						//map: texture
					});*/

root = new THREE.Mesh( geometry, material );
//root.position.x = 1000;
scene.add( root );

var amount = 200, object, parent = root;

var xyDiagonalCubes = function() {
	/*Experimental +x +y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = 100;
		object.position.y = 100;

		parent.add( object );
		parent = object;

	}
	parent = root;

	/*Experimental +x -y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = 100;
		object.position.y = -100;

		parent.add( object );
		parent = object;

	}
	parent = root;
	/*Experimental -x +y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = -100;
		object.position.y = 100;

		parent.add( object );
		parent = object;

	}

	parent = root;

	/*Experimental -x -y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = -100;
		object.position.y = -100;

		parent.add( object );
		parent = object;

	}

	parent = root;
}

xyDiagonalCubes();

var xyzCubes = function() {
	/*Positive X*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = 100;

		parent.add( object );
		parent = object;

	}

	parent = root;
	/*Negative X*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = - 100;

		parent.add( object );
		parent = object;

	}

	parent = root;
	/*Negative Y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.y = - 100;

		parent.add( object );
		parent = object;

	}

	parent = root;
	/*Positive Y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.y = 100;

		parent.add( object );
		parent = object;

	}

	parent = root;
	/*Negative Z*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.z = - 100;

		parent.add( object );
		parent = object;

	}

	parent = root;
	/*Positive Z*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.z = 100;

		parent.add( object );
		parent = object;

	}
	parent = root;
}

xyzCubes();

var zyDiagonalCubes = function() {
	/*Experimental +z +y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.z = 100;
		object.position.y = 100;

		parent.add( object );
		parent = object;

	}
	parent = root;

	/*Experimental +z -y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.z = 100;
		object.position.y = -100;

		parent.add( object );
		parent = object;

	}
	parent = root;
	/*Experimental -z +y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.z = -100;
		object.position.y = 100;

		parent.add( object );
		parent = object;

	}

	parent = root;

	/*Experimental -x -y*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.z = -100;
		object.position.y = -100;

		parent.add( object );
		parent = object;

	}

	parent = root;
}

zyDiagonalCubes();

var xzDiagonalCubes = function() {
	/*Experimental +x +z*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = 100;
		object.position.z = 100;

		parent.add( object );
		parent = object;

	}
	parent = root;

	/*Experimental +x -z*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = 100;
		object.position.z = -100;

		parent.add( object );
		parent = object;

	}
	parent = root;
	/*Experimental -x +z*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = -100;
		object.position.z = 100;

		parent.add( object );
		parent = object;

	}

	parent = root;

	/*Experimental -x -z*/
	for ( var i = 0; i < amount; i ++ ) {

		object = new THREE.Mesh( geometry, material );
		object.position.x = -100;
		object.position.z = -100;

		parent.add( object );
		parent = object;

	}

	parent = root;
}

xzDiagonalCubes();

container.appendChild( renderer.domElement );

function render() {
	requestAnimationFrame(render);

	var time = Date.now() * 0.001;
	//console.log("Time is ", time);

	var rx = Math.sin( time * 0.2 ) * 0.3;
	console.log("Rx is ", rx);
	var ry = Math.sin( time * 0.2 ) * 0.3;
	var rz = Math.sin( time * 0.2 ) * 0.3;

	/*camera.position.x += ( mouseX - camera.position.x ) * .05;
	camera.position.y += ( - mouseY - camera.position.y ) * .05;*/

	camera.lookAt( scene.position );

	root.traverse( function ( object ) {

		object.rotation.x = rx;
		object.rotation.y = ry;
		object.rotation.z = rz;

		object.position.x += 5 * rx;
		object.position.y += 5 * ry;
		object.position.z += 5 * rz;

	} );
	/*console.log("Camera x:", camera.rotation.x);
	console.log("Camera y:", camera.rotation.y);
	console.log("Camera z:", camera.rotation.z);*/
	renderer.render( scene, camera );
}

render();