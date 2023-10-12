let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
    camera.rotation.y = 45/180  * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;
    
    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load(
        'face-sculpt-practice.glb', 
        function(gltf){
            head = gltf.scene.children[0];
            head.scale.set(0.1, 0.1, 0.1);
            scene.add(gltf.scene);
            renderer.render(scene, camera);
        });
}

init();
