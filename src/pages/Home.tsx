import ProjectComponent from "../components/project/ProjectComponent";

function Home() {
  return (
    <main className="min-h-screen pt-32">

      <div className="flex justify-center items-center">
        <div className="basis-1/2 flex flex-col">
          <div className="w-2/3 self-center">
            <h1 className="text-8xl text-primary-700 font-bold font-body">
              Guillermo Garzón
            </h1>
            <h1 className="text-6xl text-primary-950 font-bold font-body">
              Ingeniero Mecánico
            </h1>
            <p className="text-xl pt-4 text-secondary-950">
              +12 años de experiencia en el campo de la ingeniería mecánica, con
              un enfoque en diseño y análisis de sistemas mecánicos. He
              trabajado en proyectos que van desde el diseño de componentes
              individuales hasta la integración de sistemas completos,
              utilizando herramientas como AutoCAD, SolidWorks y ANSYS.
            </p>
          </div>
          <button className="bg-primary-800 text-secondary-200 p-2 my-4 rounded-xl w-40 self-center hover:bg-primary-700">
            Ver portafolio
          </button>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <div className="relative inline-block">
            <img
              src="https://placehold.co/550"
              alt="Foto de LGGR"
              className="block w-4/5 rounded-2xl shadow-lg border-4 border-primary-800"
            />

            <p className="absolute bottom-0 left-[-2rem] translate-y-1/2 p-2 bg-primary-800 text-secondary-200 rounded-2xl text-sm">
              +12 años de experiencia
            </p>
          </div>
        </div>
      </div>

      <div>

        <ProjectComponent
        title="Escritorio"
        description={`Este proyecto consiste en el diseño de un escritorio multifuncional que incorpora un espacio dedicado para la colocación de un piano, combinando productividad, creatividad y ergonomía en un mismo mueble.

La propuesta busca crear un ambiente de trabajo y composición musical donde el usuario pueda alternar fácilmente entre actividades como estudio, trabajo digital y práctica musical. El diseño integra una superficie amplia de escritorio junto a un área reservada para el piano, permitiendo mantener una distribución ordenada y cómoda.`}
        pdfUrl="/docs/test.pdf"
        specifications={[
          { name: "Numero piezas", value: "100", icon: "/logos/brick.svg" },
          { name: "Personas para ensamblar", value: "2", icon: "/logos/group.svg" },
          { name: "Numero piezasa", value: "100", icon: "/logos/brick.svg" }
        ]}
        path="/models/test.glb"
        fov={30}
        position={[0, 0, -10]}
        />

        <ProjectComponent
        title="Vaca"
        description={`Este proyecto consiste en el diseño de un escritorio multifuncional que incorpora un espacio dedicado para la colocación de un piano, combinando productividad, creatividad y ergonomía en un mismo mueble.

La propuesta busca crear un ambiente de trabajo y composición musical donde el usuario pueda alternar fácilmente entre actividades como estudio, trabajo digital y práctica musical. El diseño integra una superficie amplia de escritorio junto a un área reservada para el piano, permitiendo mantener una distribución ordenada y cómoda.`}
        pdfUrl="/docs/test.pdf"
        specifications={[
          { name: "Numero piezas", value: "100", icon: "/logos/brick.svg" },
          { name: "Personas para ensamblar", value: "2", icon: "/logos/group.svg" },
          { name: "Numero piezasa", value: "100", icon: "/logos/brick.svg" }
        ]}
        path="/models/cow.glb"
        fov={30}
        position={[0, 0, -10]}
        />

        <ProjectComponent
        title="Carro"
        description={`Este proyecto consiste en el diseño de un escritorio multifuncional que incorpora un espacio dedicado para la colocación de un piano, combinando productividad, creatividad y ergonomía en un mismo mueble.

La propuesta busca crear un ambiente de trabajo y composición musical donde el usuario pueda alternar fácilmente entre actividades como estudio, trabajo digital y práctica musical. El diseño integra una superficie amplia de escritorio junto a un área reservada para el piano, permitiendo mantener una distribución ordenada y cómoda.`}
        pdfUrl="/docs/test.pdf"
        specifications={[
          { name: "Numero piezas", value: "100", icon: "/logos/brick.svg" },
          { name: "Personas para ensamblar", value: "2", icon: "/logos/group.svg" },
          { name: "Numero piezasa", value: "100", icon: "/logos/brick.svg" }
        ]}
        path="/models/car.glb"
        fov={30}
        position={[0, 0, -10]}
        />
      </div>

    </main>
  );
}

export default Home;
