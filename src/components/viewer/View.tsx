import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";

function Model({path}: {path: string}) {
    const realUrl = import.meta.env.BASE_URL + path;

    const { scene } = useGLTF(realUrl);


    return <primitive object={scene} />
}

interface ViewProps {
    path: string;
    position?: [number, number, number];
    fov?: number;
}

function View({path, position = [10, 0, 0], fov = 50}: ViewProps) {
  return <Canvas
  className="w-full h-96 bg-secondary-100 rounded-2xl border-primary-800 border-4"
  camera={{ position, fov }}>
    <mesh>
        <Model path={path} />
    </mesh>
    <OrbitControls autoRotate autoRotateSpeed={0.5} />
    <ambientLight intensity={1.0} />
    <pointLight position={[10, 10, 10]} />
  </Canvas>
}

export { View };
export type { ViewProps };
