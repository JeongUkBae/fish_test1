var aquarium = aquarium || {};
aquarium = (()=>{
	var init =()=>{
		
	};
	var onCreate =()=>{
		
	};
	var setContentView =()=>{
		
	};
	return {init:init}

	
})();


var textureLoader = new THREE.TextureLoader();
textureLoader.load('https://cdn.clien.net/web/api/file/F01/1910776/1a89030094bd432ca1a.GIF?w=780&h=30000&gif=true', function(texture){
    texture.mapping = THREE.UVMapping;
    info(texture);
    animate();

});

function info(texture) {
	var scenc = new THREE.Scenc();
	var camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	
	renderer.setClearColor(0xEEEEEE);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    //Show Axis
    var axes = new THREE.AxisHelper(10);
    scene.add(axes);
	
	
	
	
	
}