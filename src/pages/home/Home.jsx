import React, { Suspense, useState, useEffect, useRef } from 'react'
import "./Home.css"
import { Canvas } from "@react-three/fiber"
import Spinner from "../../components/spinner/Spinner"
import Island from '../../models/Island'
import Sky from '../../models/Sky'
import Bird from '../../models/Bird'
import Plane from '../../models/Plane'
import HomeInfo from '../../components/homeInfo/HomeInfo'
import godspeed from "../../assets/godspeed.mp3"
import soundOn from "../../assets/icons/soundon.png"
import soundOff from "../../assets/icons/soundoff.png"

const Home = () => {

    const audioRef = useRef(new Audio(godspeed))
    audioRef.current.volume = 0.6
    audioRef.current.loop = true
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play()
        }

        return () => {
            audioRef.current.pause()
        }
    }, [isPlayingMusic])

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        } else if (window.innerWidth < 500) {
            screenScale = [0.7, 0.7, 0.7]
        } else {
        } screenScale = [1, 1, 1]

        return [screenPosition, screenScale, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale;
        let screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [4, 3, 4]
            screenPosition = [0, -5.5, -6]
        }
        return [screenPosition, screenScale]
    }

    const [islandPosition, islandScale, IslandRotation] = adjustIslandForScreenSize()
    const [planePosition, planeScale] = adjustPlaneForScreenSize()

    return (
        <section className='home-container'>
            <div className="pop-up-container">
                {
                    currentStage && <HomeInfo currentStage={currentStage} />
                }
            </div>
            <Canvas
                className={isRotating ? "home-canvas-grab" : "home-canvas"}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Spinner />}>
                    <directionalLight position={[1, 10, 1]} intensity={2} />
                    <ambientLight intensity={1} />
                    <spotLight />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2} />
                    <Sky isRotating={isRotating} />
                    <Bird />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={IslandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        position={planePosition}
                        scale={planeScale}
                        rotation={[0, 20, 0]}
                        isRotating={isRotating}
                    />
                </Suspense>
            </Canvas>
            <div className='music-container'>
                <img
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    src={isPlayingMusic ? soundOn : soundOff}
                    alt="music"
                />
            </div>
        </section>
    )
}

export default Home