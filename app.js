// Global variables
const container = document.getElementById("container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const numCards = 12;
const cardBackUrl = 'https://i.imgur.com/W3PV9D9.jpeg';
const cardUrls = [
    'https://i.imgur.com/Dt9B96r.jpg','https://i.imgur.com/KcZhE7q.jpg','https://i.imgur.com/ASDi2X0.jpg',
    'https://i.imgur.com/3bwFJKd.jpg','https://i.imgur.com/1115n3i.jpg','https://i.imgur.com/kMwIAbE.jpg',
    'https://i.imgur.com/zdWplr7.jpg','https://i.imgur.com/hOOeEqD.jpg','https://i.imgur.com/72nVed1.jpg',
    'https://i.imgur.com/9NUzQI5.jpg','https://i.imgur.com/jW46rR5.jpg','https://i.imgur.com/NuKbXV9.jpg',
    'https://i.imgur.com/TPkVX2X.jpg','https://i.imgur.com/Z0YFpev.jpg','https://i.imgur.com/RP7IQRl.jpg',
    'https://i.imgur.com/dkbnQz5.jpg','https://i.imgur.com/I2n1FEQ.jpg','https://i.imgur.com/61xWwJN.jpg',
    'https://i.imgur.com/CHuBLqT.jpg','https://i.imgur.com/hNIF8zM.jpg','https://i.imgur.com/PbceIH6.jpg',
    'https://i.imgur.com/mghbpLd.jpg','https://i.imgur.com/Vqe5mYr.jpg','https://i.imgur.com/0KI6zh3.jpg',
    'https://i.imgur.com/Ber3Q3s.jpg','https://i.imgur.com/8TLfEb5.jpg','https://i.imgur.com/Ip4GbNo.jpg',
    'https://i.imgur.com/PqKR3Cs.jpg','https://i.imgur.com/g2MM1lt.jpg','https://i.imgur.com/wGmi2ct.jpg',
    'https://i.imgur.com/iKQdUIC.jpg','https://i.imgur.com/Fzrnfbn.jpg','https://i.imgur.com/ZJWVW3S.jpg',
    'https://i.imgur.com/RXnX68G.jpg','https://i.imgur.com/v2vd4v1.jpg','https://i.imgur.com/4yuTsVO.jpg',
    'https://i.imgur.com/bWvuSLW.jpg','https://i.imgur.com/sn2uWpW.jpg','https://i.imgur.com/mlOqtfY.jpg',
    'https://i.imgur.com/NGFjDUH.jpg','https://i.imgur.com/Ud4x3gO.jpg','https://i.imgur.com/sq9SIUX.jpg',
    'https://i.imgur.com/z0z1e4h.jpg','https://i.imgur.com/vMRS6AW.jpg','https://i.imgur.com/PXkrGOL.jpg',
    'https://i.imgur.com/VpC2Uvg.jpg','https://i.imgur.com/xrC4Bha.jpg','https://i.imgur.com/CG3cZtj.jpg',
    'https://i.imgur.com/YKkwLUS.jpg','https://i.imgur.com/SYzsx7C.jpg','https://i.imgur.com/PumQlHk.jpg',
    'https://i.imgur.com/WdA6bIx.jpg','https://i.imgur.com/kZqLe22.jpg','https://i.imgur.com/JHXi9TV.jpg',
    'https://i.imgur.com/JUqEm4z.jpg','https://i.imgur.com/RVaVzJT.jpg','https://i.imgur.com/WXTqGJg.jpg',
    'https://i.imgur.com/UIt8Rhh.jpg','https://i.imgur.com/5p6Df8j.jpg','https://i.imgur.com/TtBzyIs.jpg',
    'https://i.imgur.com/nml8Gci.jpg','https://i.imgur.com/k7kcK7L.jpg','https://i.imgur.com/4ZatPW0.jpg',
    'https://i.imgur.com/Ut67ldM.jpg','https://i.imgur.com/fmWaiVL.jpg','https://i.imgur.com/CwHrNYO.jpg',
    'https://i.imgur.com/11PGFqI.jpg','https://i.imgur.com/wXQUF0v.jpg','https://i.imgur.com/MBlT7Mk.jpg',
    'https://i.imgur.com/zMqVhCE.jpg','https://i.imgur.com/2rbmCS8.jpg','https://i.imgur.com/HG1UGG9.jpg',
    'https://i.imgur.com/PXaaFi6.jpg','https://i.imgur.com/paWE6Pi.jpg','https://i.imgur.com/32FOFXC.jpg',
    'https://i.imgur.com/Hxrlube.jpg','https://i.imgur.com/YBlpRBH.jpg','https://i.imgur.com/04iNy2J.jpg',
    'https://i.imgur.com/zzyVOQe.jpg','https://i.imgur.com/8s59zJy.jpg','https://i.imgur.com/DErQ5ft.jpg',
    'https://i.imgur.com/LiS1xcD.jpg','https://i.imgur.com/XTT8VVO.jpg','https://i.imgur.com/F53DIt4.jpg',
    'https://i.imgur.com/t9Sp5Lc.jpg','https://i.imgur.com/hGOVI95.jpg','https://i.imgur.com/sVkJUst.jpg',
    'https://i.imgur.com/QPlF8KP.jpg','https://i.imgur.com/kFmbebV.jpg','https://i.imgur.com/45iP40B.jpg',
    'https://i.imgur.com/Rp6Gd4Q.jpg','https://i.imgur.com/550wYum.jpg','https://i.imgur.com/b0xq64O.jpg',
    'https://i.imgur.com/GEIdVdT.jpg','https://i.imgur.com/canXNHR.jpg','https://i.imgur.com/IDZ3Wub.jpg',
    'https://i.imgur.com/qSO3T3i.jpg','https://i.imgur.com/VwLlYR9.jpg','https://i.imgur.com/iAMHPyn.jpg',
    'https://i.imgur.com/2FB4Z6O.jpg','https://i.imgur.com/WI6qy3u.jpg','https://i.imgur.com/BLXMYMG.jpg',
    'https://i.imgur.com/zq9vf7L.jpg','https://i.imgur.com/vde4IEU.jpg','https://i.imgur.com/TaWNxeX.jpg',
    'https://i.imgur.com/scCq4Hm.jpg','https://i.imgur.com/x70UCT2.jpg','https://i.imgur.com/aR4JlW3.jpg',
    'https://i.imgur.com/za2wVIV.jpg','https://i.imgur.com/8QadUZz.jpg','https://i.imgur.com/79PDozW.jpg',
    'https://i.imgur.com/1rjgUJ8.jpg','https://i.imgur.com/B3nAFmQ.jpg','https://i.imgur.com/845MulF.jpg',
    'https://i.imgur.com/Y8d5cbJ.jpg','https://i.imgur.com/nTGOQTB.jpg','https://i.imgur.com/JnJ3fP7.jpg',
    'https://i.imgur.com/XVlDmdB.jpg','https://i.imgur.com/b02Tio9.jpg','https://i.imgur.com/QhoCoaN.jpg',
    'https://i.imgur.com/pioEBZg.jpg','https://i.imgur.com/wNKYOZ9.jpg','https://i.imgur.com/6EhTe6G.jpg',
    'https://i.imgur.com/uFYvzh6.jpg','https://i.imgur.com/sySDDGB.jpg','https://i.imgur.com/5PLtJMY.jpg',
    'https://i.imgur.com/A4vmYBO.jpg','https://i.imgur.com/31vrta4.jpg','https://i.imgur.com/143dgpx.jpg',
    'https://i.imgur.com/g5wwmqz.jpg','https://i.imgur.com/Xq5plzF.jpg','https://i.imgur.com/wbAjLfK.jpg',
    'https://i.imgur.com/g0xUvjV.jpg','https://i.imgur.com/9gxswGT.jpg','https://i.imgur.com/PlPWIf4.jpg',
    'https://i.imgur.com/6kHRBmH.jpg','https://i.imgur.com/d8iFZ1Z.jpg','https://i.imgur.com/aElKRRk.jpg',
    'https://i.imgur.com/MPunNJm.jpg','https://i.imgur.com/SUhntD6.jpg','https://i.imgur.com/8RDDvCJ.jpg',
    'https://i.imgur.com/gkEWf3r.jpg','https://i.imgur.com/TOCRoGN.jpg','https://i.imgur.com/ULoxl8B.jpg',
    'https://i.imgur.com/u4BYBn7.jpg','https://i.imgur.com/q9hzGtp.jpg','https://i.imgur.com/Fkxucc4.jpg',
    'https://i.imgur.com/6uDCbzJ.jpg','https://i.imgur.com/wTvXcYT.jpg','https://i.imgur.com/pudPgoT.jpg',
    'https://i.imgur.com/RSf499f.jpg','https://i.imgur.com/9SNWbE4.jpg','https://i.imgur.com/EZgwrPf.jpg',
    'https://i.imgur.com/EhemSIo.jpg','https://i.imgur.com/PDpx1uP.jpg','https://i.imgur.com/ZJnzv9y.jpg',

];
const cardGeometry = new THREE.PlaneGeometry(1.81, 2.52);

let currentCardIndex = numCards;

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
});

// Load card textures and create materials for each card
const loadCardMaterials = (cardUrls, cardBackUrl, onLoad) => {
  let loadedCards = 0;
  const cardMaterials = [];

  textureLoader.load(cardBackUrl, (backTexture) => {
    const backMaterial = new THREE.MeshBasicMaterial({ map: backTexture });

    cardUrls.slice(0, numCards).forEach((url, index) => {
      textureLoader.load(url, (frontTexture) => {
        const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture });
        const materialPair = { front: frontMaterial, back: backMaterial };
        cardMaterials[index] = materialPair;
        loadedCards++;

        if (loadedCards === numCards) {
          onLoad(cardMaterials);
        }
      });
    });
  });
};



const updateCardInFocusTexture = (cardGroup) => {
  if (currentCardIndex >= cardUrls.length) {
    currentCardIndex = 0
    return;
  }

  const url = cardUrls[currentCardIndex];
  textureLoader.load(url, (newFrontTexture) => {
    cardGroup.children[0].material.map.dispose();
    cardGroup.children[0].material.map = newFrontTexture;
    cardGroup.children[0].material.needsUpdate = true;
    currentCardIndex++;
  });
};


// Create and add card objects to the scene
const createCards = (cardMaterials) => {
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
};


camera.position.z = 6.7;

let lastUpdatedCard = null;
let rotationCounter = 0;

// Animate the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the scene
  angular_increment = 0.0025
  
  //angular_increment = 0.01 //debug speed
  
  scene.rotation.y += angular_increment;
  rotationCounter += angular_increment;

  let cardInFocus = null;
  let maxDistance = -Infinity;

  // Find the card farthest from the camera
  scene.traverse((object) => {
    if (object.type === "Group") {
      // Calculate the rotated card position
      const cardPosition = object.position.clone();
      cardPosition.applyAxisAngle(new THREE.Vector3(0, 1, 0), scene.rotation.y);

      const distance = camera.position.distanceTo(cardPosition);
      if (distance > maxDistance) {
        maxDistance = distance;
        cardInFocus = object;
      }
    }
  });

  // Check if a full rotation has occurred and the card in focus has changed
  if (rotationCounter >= 2 * Math.PI) {
    rotationCounter = 0;
    lastUpdatedCard = null;
  }

  // Update card in focus texture
  if (cardInFocus && cardInFocus !== lastUpdatedCard) {
    updateCardInFocusTexture(cardInFocus);
    lastUpdatedCard = cardInFocus;
  }

  // Render the scene with the camera
  renderer.render(scene, camera);
}


// Start animation
animate();

// Handle window resize event
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Update camera aspect ratio and projection matrix
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(width, height);
});

// Load card materials and create cards in the scene
loadCardMaterials(cardUrls, cardBackUrl, createCards);
