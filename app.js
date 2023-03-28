const container = document.getElementById("container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const numCards = 10;
const cardUrls = new Array(numCards).fill('https://i.imgur.com/Dt9B96r.jpeg');
const cardBackUrl = 'https://i.imgur.com/W3PV9D9.jpeg';
const cardGeometry = new THREE.PlaneGeometry(1.81, 2.52);

const loadCards = (cardUrls, cardBackUrl, onLoad) => {
  let loadedCards = 0;
  const cardMaterials = [];

  textureLoader.load(cardBackUrl, (backTexture) => {
    const backMaterial = new THREE.MeshBasicMaterial({ map: backTexture });

    cardUrls.forEach((url, index) => {
      textureLoader.load(url, (frontTexture) => {
        const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture });
        const materialPair = { front: frontMaterial, back: backMaterial };
        cardMaterials[index] = materialPair;
        loadedCards++;

        if (loadedCards === cardUrls.length) {
          onLoad(cardMaterials);
        }
      });
    });
  });
};

loadCards(cardUrls, cardBackUrl, (cardMaterials) => {
  cardMaterials.forEach((materialPair, i) => {
    const frontCard = new THREE.Mesh(cardGeometry, materialPair.front);
    const backCard = new THREE.Mesh(cardGeometry, materialPair.back);
    backCard.rotation.y = Math.PI;

    const cardGroup = new THREE.Group();
    cardGroup.add(frontCard);
    cardGroup.add(backCard);

    const angle = (2 * Math.PI * i) / numCards;
    const radius = 5;

    cardGroup.position.x = radius * Math.sin(angle);
    cardGroup.position.z = radius * Math.cos(angle);
    cardGroup.rotation.y = angle;

    scene.add(cardGroup);
  });
});

camera.position.z = 7;

function animate() {
  requestAnimationFrame(animate);

  scene.rotation.y += 0.0025;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
});
