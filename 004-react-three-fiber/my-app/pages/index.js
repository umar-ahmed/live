import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, OrbitControls, Sky } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'orange'} />
    </mesh>
  )
}

export default function Home() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <OrbitControls />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={0} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      />
      <ContactShadows
        opacity={1}
        width={1}
        height={1}
        blur={1} // Amount of blue (default=1)
        far={10} // Focal distance (default=10)
        resolution={256} // Rendertarget resolution (default=256)
      />

      <Box position={[-0.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />

      {/* <Torus position={[0, 1, 0]}>
        <meshPhongMaterial attach="material" color="red" />
      </Torus> */}

    </Canvas>
  )
}
