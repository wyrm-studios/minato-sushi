import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';

let scene, camera, renderer, sushiModel, shineLight;

export function init3DScene() {
    // 1. Check if desktop (Disable 3D for mobile to save battery/lag)
    if (window.innerWidth <= 768) return;

    const container = document.getElementById('hero-3d-model');
    if (!container) return;

    // 2. Setup Scene
    scene = new THREE.Scene();
    
    // 3. Setup Camera
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5;

    // 4. Setup Renderer (Transparent background so CSS ocean shows through)
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 5. Lighting Setup
    // Ambient light (Base darkness)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Main Key Light (Stays static)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    // THE SHINE LIGHT (RectAreaLight gives a beautiful window-like reflection)
    RectAreaLightUniformsLib.init();
    shineLight = new THREE.RectAreaLight(0xffffff, 5, 3, 3);
    shineLight.position.set(-5, 2, 0); // Starts off to the side
    shineLight.lookAt(0, 0, 0);
    scene.add(shineLight);

    // 6. Load 3D Model
    const loader = new GLTFLoader();
    loader.load(
        'assets/sushi.glb', // Path to your model
        (gltf) => {
            sushiModel = gltf.scene;
            
            // Center and scale model (Adjust these numbers if your model is too big/small)
            const box = new THREE.Box3().setFromObject(sushiModel);
            const center = box.getCenter(new THREE.Vector3());
            sushiModel.position.sub(center); // Center it
            
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2.5 / maxDim; // Scale to fit nicely
            sushiModel.scale.setScalar(scale);

            scene.add(sushiModel);
            animate();
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.error('An error happened loading the 3D model:', error);
        }
    );

    // Handle Window Resize
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    const container = document.getElementById('hero-3d-model');
    if (!container || !camera || !renderer) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// 7. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    if (sushiModel) {
        // Slow Rotation (Turn too slow)
        sushiModel.rotation.y += 0.003; 
    }

    if (shineLight) {
        // The "Shine" Effect: Move light from left to right slowly
        shineLight.position.x += 0.005; 
        
        // Reset light position when it goes too far right (creates a loop)
        if (shineLight.position.x > 5) {
            shineLight.position.x = -5;
        }
    }

    renderer.render(scene, camera);
}
