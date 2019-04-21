


//texture Loader 
var textureLoader = new THREE.TextureLoader();
textureLoader.load('https://cdn.clien.net/web/api/file/F01/1910776/1a89030094bd432ca1a.GIF?w=780&h=30000&gif=true', function(texture){
    texture.mapping = THREE.UVMapping;
    init(texture);
    //animate();

});


// var planeLoader = new THREE.MaterialLoader();
// planeLoader.load('https://previews.123rf.com/images/rangizzz/rangizzz1308/rangizzz130800009/21383873-%EB%B3%B5%EC%82%AC-%EA%B3%B5%EA%B0%84-%ED%95%B4%EB%B3%80-%EC%A7%88%EA%B0%90-%EB%AA%A8%EB%9E%98.jpg'
//     ,function(planeLoader){
//         planeLoader.mapping = material;
//         inti(planeLoader);
//     });


function init(texture) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    //For bouncing balls;
    var step = 0;
    renderer.setClearColor(0xEEEEEE);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    //Show Axis
    var axes = new THREE.AxisHelper(10);
    scene.add(axes);




    // background 
    var options = {
                    resolution: 1024,
                    generateMipmaps: true,
                    minFilter: THREE.LinearMipMapLinearFilter,
                    magFilter: THREE.LinearFilter

                };
    scene.background = new THREE.CubemapGenerator( renderer ).fromEquirectangular( texture, options );
   
  /*  material = new THREE.MeshBasicMaterial( {
                    envMap: camera.renderTarget.texture
                } );
*/
    
    
    //model import 
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
		}
	};
	
//	let arr = [1,2,3,4,5,6]
	 var onError = function () { };
		THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
		new THREE.MTLLoader()
			.setPath( 'resources/obj/' )
			.load( 'fish.mtl', function ( materials ) {
				materials.preload();
				new THREE.OBJLoader()
					.setMaterials( materials )
					.setPath( 'resources/obj/' )
					.load( 'fish.obj', function ( fishs_1 ) {
						fishs_1.position.y = 5;
						fishs_1.position.x = 10;
						fishs_1.position.z = 1;
						scene.add( fishs_1 );
					}, onProgress, onError );
			} );
//	$.each(arr,(i,j)=>{
			
//	});
	

	
   
    
    
    
    //Let's make a plane
    var planeGeometry = new THREE.PlaneGeometry(6,6,1,1);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xCCCCCC});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);

    //Let's make a spheres. *****
    var sphereGeometry = new THREE.SphereGeometry(4,32,32);
    var sphereMeterial = new THREE.MeshPhongMaterial({color: 0x442DF4
        /*,side: THREE.DoubleSide*/});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMeterial);
    sphere.castShadow = true;
    sphere.position.x = 0;
    sphere.position.y = 2.5;
    sphere.position.z = 0;
    scene.add(sphere);  

    //camera controll
    cameraControls = new THREE.OrbitControls( camera, renderer.domElement );

	//cameraControls.addEventListener( 'change', render );
   
    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(40,60,30);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 5120;
    spotLight.shadow.mapSize.height = 5120;
    scene.add(spotLight);
    camera.position.x = 0;
    camera.position.y = 50;
    camera.position.z = 50;
    camera.lookAt(scene.position);  
    document.getElementById("threejs_scene").appendChild(renderer.domElement);
    // renderScene();
    var renderScene = new function renderScene() {
        requestAnimationFrame(renderScene);

        //sphere animation  
        step = 0.1;
        //fishs_1.position.y = 0;
//        fishes.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
//        fishes.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );

        
        renderer.render(scene,camera);
    }
    function animate() {
        requestAnimationFrame( animate );
        
        
        render();
    }
}
window.onload = init();