/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
var Clock = THREE.Clock;
var FirstPersonControls = THREE.FirstPersonControls;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    var scene = new Scene();
    var renderer;
    var camera;
    var axes;
    var plane;
    var sun;
    var raedon;
    var blueBall;
    var redDevil;
    var moonLike;
    var icing;
    var eco;
    var moon;
    var sphereGeometry;
    var sphereMaterial;
    var ambientLight;
    var control;
    var gui;
    var stats;
    var step = 0;
    var clock;
    var emptyRaedon;
    var emptyBlueBall;
    var emptyRedDevil;
    var emptyMoonLike;
    var emptyIcing;
    var emptyEco;
    var emptyMoon;
    var firstPersonControls;
    var texture;
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        // setup a THREE.js Clock object
        clock = new Clock();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        // Add a Sun to the Scene
        sphereGeometry = new SphereGeometry(2, 25, 25);
        sun = new PointLight(0xffffff, 3, 35, 1.4);
        sun.position.set(0, 0, 0);
        sun.castShadow = true;
        sun.shadowCameraNear = 1;
        // sun.shadowMapHeight = 2048;
        // sun.shadowMapWidth = 2048;
        sun.name = "The Sun";
        // load texture to blueBall
        textureLoader("../../res/textures/sun.png");
        sun.add(new Mesh(sphereGeometry, new MeshBasicMaterial({ color: 0xffff00 })));
        scene.add(sun);
        console.log("Added Sun (Sphere Primitive) to the Scene");
        // setup first person controls
        // firstPersonControls = new FirstPersonControls(sun);
        //  firstPersonControls.lookSpeed = 0.1;
        //  firstPersonControls.movementSpeed = 4;
        //  firstPersonControls.lookVertical = true;
        //  firstPersonControls.constrainVertical = true;
        //  firstPersonControls.verticalMin = 0;
        //  firstPersonControls.verticalMax = 2.0;
        //  firstPersonControls.lon = -150; //-150
        //  firstPersonControls.lat = 120;    //120
        // Add an Empty Raedon to the scene
        emptyRaedon = new Object3D();
        emptyRaedon.position.set(0, 0, 0);
        sun.add(emptyRaedon);
        console.log("Added Empty Raedon to the sun object...");
        // load texture to raedon
        textureLoader("../../res/textures/raedon.jpg");
        // Add planet Raedon to the scene
        raedon = new gameObject(new SphereGeometry(0.2, 22, 22), new LambertMaterial({ map: texture }), 5, 0, 0);
        emptyRaedon.add(raedon);
        console.log("Added Raedon to empty Raedon...");
        // Add an Empty Blue Ball to the scene
        emptyBlueBall = new Object3D();
        emptyBlueBall.position.set(0, 0, 0);
        sun.add(emptyBlueBall);
        console.log("Added emptyBlueBall to the sun object...");
        // load texture to blueBall
        textureLoader("../../res/textures/blueBall.png");
        // Add planet Blue Ball to the scene
        blueBall = new gameObject(new SphereGeometry(0.3, 22, 22), new LambertMaterial({ map: texture }), 7, 0, 0);
        emptyBlueBall.add(blueBall);
        console.log("Added Blue Ball to emptyBlueBall...");
        // Add an Empty Red Devil to the scene
        emptyRedDevil = new Object3D();
        emptyRedDevil.position.set(0, 0, 0);
        sun.add(emptyRedDevil);
        console.log("Added emptyRedDevil to the sun object...");
        // load texture to redDevil
        textureLoader("../../res/textures/redDevil.jpg");
        // Add planet redDevil to the scene
        redDevil = new gameObject(new SphereGeometry(0.7, 22, 22), new LambertMaterial({ map: texture }), 10, 0, 0);
        emptyRedDevil.add(redDevil);
        console.log("Added redDevil to emptyRedDevil...");
        // Add an Empty Moon to the Red Devil
        emptyMoon = new Object3D();
        emptyMoon.position.set(0, 0, 0);
        redDevil.add(emptyMoon);
        console.log("Added emptyMoon to the redDevil object...");
        // Add moon to the Red Devil
        moon = new gameObject(new SphereGeometry(0.08, 22, 22), new LambertMaterial({ color: 0xF9F9F9 }), 1.8, 0, 0);
        emptyMoon.add(moon);
        console.log("Added moon to emptyMoon...");
        // Add an Empty Moon Like to the scene
        emptyMoonLike = new Object3D();
        emptyMoonLike.position.set(0, 0, 0);
        sun.add(emptyMoonLike);
        console.log("Added emptyMoonLike to the sun object...");
        // load texture to moonLike
        textureLoader("../../res/textures/moonLike.jpg");
        // Add planet moonLike to the scene
        moonLike = new gameObject(new SphereGeometry(0.55, 18, 18), new LambertMaterial({ map: texture }), 13, 0, 0);
        emptyMoonLike.add(moonLike);
        console.log("Added moonLike to emptyMoonLike...");
        // Add an Empty Icing to the scene
        emptyIcing = new Object3D();
        emptyIcing.position.set(0, 0, 0);
        sun.add(emptyIcing);
        console.log("Added emptyIcing to the sun object...");
        // load texture to icing
        textureLoader("../../res/textures/icing.jpg");
        // Add planet icing to the scene
        icing = new gameObject(new SphereGeometry(0.35, 18, 18), new LambertMaterial({ map: texture }), 15, 0, 0);
        emptyIcing.add(icing);
        console.log("Added icing to emptyIcing...");
        // Add an Empty Eco to the scene
        emptyEco = new Object3D();
        emptyEco.position.set(0, 0, 0);
        sun.add(emptyEco);
        console.log("Added emptyEco to the sun object...");
        // load texture to eco
        textureLoader("../../res/textures/eco.jpg");
        // Add planet eco to the scene
        eco = new gameObject(new SphereGeometry(0.3, 18, 18), new LambertMaterial({ map: texture }), 17, 0, 0);
        emptyEco.add(eco);
        console.log("Added eco to emptyEco...");
        //Natural AmbientLight
        var ambientLight = new THREE.AmbientLight(0x181818); // soft white light
        scene.add(ambientLight);
        // add controls
        gui = new GUI();
        control = new Control(0.001);
        addControl(control);
        // add an axis helper to the scene
        axes = new AxisHelper(20);
        sun.add(axes);
        console.log("Added Axis Helper to scene...");
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        gui.add(controlObject, 'rotationSpeed', -0.05, 0.20);
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        var delta = clock.getDelta();
        //firstPersonControls.update(delta);
        if (control.rotationSpeed != 0) {
            sun.rotation.y += control.rotationSpeed;
            emptyRaedon.rotation.y += control.rotationSpeed + 0.065;
            emptyBlueBall.rotation.y += control.rotationSpeed + 0.05;
            emptyRedDevil.rotation.y += control.rotationSpeed + 0.015;
            emptyMoonLike.rotation.y += control.rotationSpeed + 0.005;
            emptyIcing.rotation.y += control.rotationSpeed + 0.002;
            emptyEco.rotation.y += control.rotationSpeed + 0.0005;
            emptyMoon.rotation.y += redDevil.rotation.y + 0.05;
        }
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer({ alpha: true });
        renderer.setClearColor(0xffffff, 0.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
        //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = 0.6;
        camera.position.y = 16;
        camera.position.z = -20.5;
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    // Setup texture loader for objects
    function textureLoader(url) {
        // load a texture, set wrap mode to repeat
        texture = new THREE.TextureLoader().load(url);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);
    }
    window.onload = init;
    return {
        scene: scene
    };
})();
//# sourceMappingURL=game.js.map