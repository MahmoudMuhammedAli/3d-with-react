import './App.css';
import * as THREE from 'three'
import React , {useEffect, useState}from 'react';
import useWindowDimensions from './WidthHook'


function App() {
  const { width , height } = useWindowDimensions();
  const scene = new THREE.Scene();
//red cube
const group = new THREE.Group();
scene.add(group);
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube1);
group.add(cube2);
group.add(cube3);
group.position.set (0,.5,0) 
group.scale.set (2,3,2) 
group.rotation.y = 1;

// Camera
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 6.5;
scene.add(camera);

  useEffect(() => {
    
    const canvas = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setSize(width, height);
    
    renderer.render(scene, camera);
  }, [width , height]);
  return (
   <>
      <canvas class="webgl" ></canvas>
   </>
  );
}

export default App;
