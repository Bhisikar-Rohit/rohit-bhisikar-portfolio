import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows={ false }
        camera={ {
            fov: 33,
            near: 0.10,
            far: 100,
            position: [ - 4, 2, 6 ]
        } }
    >
        <Experience />
    </Canvas>
)