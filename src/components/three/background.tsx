'use client'

import { PointMaterial, Points } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = () => {
    const ref = useRef<any>()
    const [sphere] = useState(() => random.inSphere(new Float32Array(750), { radius: 7 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 5
        ref.current.rotation.y -= delta / 7.5
    })
    return (
        <group rotation={[0, 0, Math.PI / 3]}>
            <mesh>
                <Points ref={ref} positions={sphere} stride={3}>
                    <PointMaterial transparent color={'#58f'} size={0.035} sizeAttenuation={true} depthWrite={false} />
                </Points>
            </mesh>
        </group>
    )
}

const Background = () => {
    return (
        <Canvas style={{ position: 'absolute', zIndex: -999 }} camera={{ position: [5, 5, 1] }}>
            <Stars />
        </Canvas>
    )
}

export default Background
