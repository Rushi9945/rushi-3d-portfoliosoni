import { useRef, useEffect } from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, ContactShadows, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function CustomAvatar() {
  const group = useRef<THREE.Group>(null)
  const { nodes, scene } = useGLTF('/rushi_avatar.glb') as any
  const texture = useTexture('/profile.jpg')

  useEffect(() => {
    Object.values(nodes).forEach((node: any) => {
      if (node.isMesh) {
        node.material = new THREE.MeshStandardMaterial({
          map: texture,
          color: new THREE.Color('#ffffff'), 
          roughness: 0.9,
          metalness: 0.1,
        })
        
        node.material.onBeforeCompile = (shader: any) => {
          shader.vertexShader = shader.vertexShader.replace(
            '#include <common>',
            `#include <common>\n varying vec2 vProjectedUv;`
          )
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
             // Using final calibration values found by the user
             vProjectedUv = vec2(
               (position.x * 0.43) + 0.46, 
               (position.y * 0.45) + 0.46
             );
            `
          )
          shader.fragmentShader = shader.fragmentShader.replace(
            '#include <common>',
            `#include <common>\n varying vec2 vProjectedUv;`
          )
          shader.fragmentShader = shader.fragmentShader.replace(
            '#include <map_fragment>',
            `
            #ifdef USE_MAP
              vec4 texelColor = texture2D( map, vProjectedUv );
              diffuseColor = vec4(texelColor.rgb, opacity);
            #endif
            `
          )
        }
      }
    })
  }, [nodes, texture])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const g = group.current
    if (g) {
      g.rotation.y = 0
      g.rotation.x = 0
      g.position.y = Math.sin(t * 1.5) * 0.02 - 0.5
    }
  })

  return (
    <group ref={group} position={[0, -0.5, 0]} scale={0.7}>
      <primitive object={scene} />
    </group>
  )
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-4, 1.5, 2]} intensity={15} color="#22d3ee" />
      <pointLight position={[4, 1.5, 2]} intensity={15} color="#8b5cf6" />
      <spotLight position={[0, 6, 0]} angle={0.5} penumbra={1} intensity={20} color="#a78bfa" />
      <Suspense fallback={null}>
        <CustomAvatar />
      </Suspense>
      <ContactShadows position={[0, -1.12, 0]} opacity={0.55} scale={9} blur={2.6} far={3} color="#4c1d95" />
    </Canvas>
  )
}

