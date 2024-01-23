import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export const useGLTFWithShadows = (location: string) => {
    const { scene } = useGLTF(location)

    useEffect(() => {
        scene.traverse((child) => {
            if (child.type === 'Mesh') {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
    })

    return { scene }
}
