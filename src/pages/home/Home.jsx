import React, { Suspense, useState } from 'react'
import "./Home.css"
import { Canvas } from "@react-three/fiber"
import Spinner from "../../components/spinner/Spinner"
import Island from '../../models/Island'
import Sky from '../../models/Sky'
import Bird from '../../models/Bird'
import Plane from '../../models/Plane'

const Home = () => {

    const [isRotating, setIsRotating] = useState(false)

    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else {
            screenScale = [1, 1, 1]
        }
        return [screenPosition, screenScale, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale;
        let screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -6]
        }
        return [screenPosition, screenScale]
    }

    const [islandPosition, islandScale, IslandRotation] = adjustIslandForScreenSize()
    const [planePosition, planeScale] = adjustPlaneForScreenSize()


    return (
        <section className='home-container'>
            <Canvas
                className={isRotating ? "home-canvas-grab" : "home-canvas"}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Spinner />}>
                    <directionalLight position={[1, 10, 1]} intensity={2} />
                    <ambientLight intensity={1} />
                    <spotLight />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2} />
                    <Bird />
                    <Sky />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={IslandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        position={planePosition}
                        scale={planeScale}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home