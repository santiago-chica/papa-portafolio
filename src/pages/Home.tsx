

function Home() {
    return <main className="min-h-screen pt-32">



        <div className="flex justify-center items-center">
            <div className="basis-1/2 flex flex-col">
                <div className="w-4/5 self-center">  
                    <h1 className="text-8xl text-primary-700 font-bold font-body">Guillermo Garzón</h1>
                    <h1 className="text-6xl text-primary-950 font-bold font-body">Ingeniero Mecánico</h1>
                    <p className="text-xl pt-4 text-secondary-950">+12 años de experiencia en el campo de la ingeniería mecánica, con un enfoque en diseño y análisis de sistemas mecánicos. He trabajado en proyectos que van desde el diseño de componentes individuales hasta la integración de sistemas completos, utilizando herramientas como AutoCAD, SolidWorks y ANSYS.</p>
                </div>
                <button className="bg-primary-800 text-secondary-200 p-2 my-4 rounded-xl w-40 self-center hover:bg-primary-700">Ver portafolio</button>
            </div>
            <div className="basis-1/2 flex flex-col items-center">
                <div className="relative inline-block w-5/6">
                    <img src="https://placehold.co/400" alt="Foto de LGGR" className="w-3/4"/>

                    <p className="absolute bottom-0 left-[-2rem] translate-y-1/2 ml-3 p-2 bg-primary-800 text-secondary-200 rounded-2xl text-sm">
                    +12 años de experiencia
                    </p>
                </div>
                </div>
        </div>
    </main>
}

export default Home;