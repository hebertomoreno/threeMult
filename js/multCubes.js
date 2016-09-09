container = document.createElement( 'div' );
document.body.appendChild(container);

/*Construct Scene and set background*/
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xFFFFFF );
/************************************/

/*Construct camera and set properties*/
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 1000;
camera.rotation.x = -1.4433;
camera.rotation.y = -1.4168;
camera.rotation.z = -1.4418;
/*************************************/

/*Construct and set Renderer*/
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
/****************************/

/****Camera Rotation Script****/
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;
/******************************/

var geometry = new THREE.BoxGeometry( 100, 100, 100 );
var material = new THREE.MeshNormalMaterial();

root = new THREE.Mesh( geometry, material );
//root.position.x = 1000;
scene.add( root );

var amount = 200, object, parent = root;

for ( var i = 0; i < amount; i ++ ) {

	object = new THREE.Mesh( geometry, material );
	object.position.x = 100;

	parent.add( object );
	parent = object;

}

parent = root;

for ( var i = 0; i < amount; i ++ ) {

	object = new THREE.Mesh( geometry, material );
	object.position.x = - 100;

	parent.add( object );
	parent = object;

}

parent = root;

for ( var i = 0; i < amount; i ++ ) {

	object = new THREE.Mesh( geometry, material );
	object.position.y = - 100;

	parent.add( object );
	parent = object;

}

parent = root;

for ( var i = 0; i < amount; i ++ ) {

	object = new THREE.Mesh( geometry, material );
	object.position.y = 100;

	parent.add( object );
	parent = object;

}

parent = root;

for ( var i = 0; i < amount; i ++ ) {

	object = new THREE.Mesh( geometry, material );
	object.position.z = - 100;

	parent.add( object );
	parent = object;

}

parent = root;

for ( var i = 0; i < amount; i ++ ) {

	object = new THREE.Mesh( geometry, material );
	object.position.z = 100;

	parent.add( object );
	parent = object;

}

container.appendChild( renderer.domElement );

function render() {
	requestAnimationFrame(render);

	var time = Date.now() * 0.001;

	var rx = Math.sin( time * 0.1 ) * 0.2;
	var ry = Math.sin( time * 0.1 ) * 0.1;
	var rz = Math.sin( time * 0.1 ) * 0.1;

	/*camera.position.x += ( mouseX - camera.position.x ) * .05;
	camera.position.y += ( - mouseY - camera.position.y ) * .05;*/

	camera.lookAt( scene.position );

	root.traverse( function ( object ) {

		object.rotation.x = rx;
		object.rotation.y = ry;
		object.rotation.z = rz;

	} );
	console.log("Camera x:", camera.rotation.x);
	console.log("Camera y:", camera.rotation.y);
	console.log("Camera z:", camera.rotation.z);
	renderer.render( scene, camera );
}

render();