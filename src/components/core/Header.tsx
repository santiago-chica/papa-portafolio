function bulletPoint(text: string, link?: string) {
    return <li className="transition-transform duration-100 hover:scale-125">
        {link ? <a href={link}>{text}</a> : text}
    </li>;
}

function header() {
    return <header className="bg-secondary-950 text-secondary-100 py-4 px-14 flex justify-between items-center fixed w-full rounded-b-3xl z-10">
        <h1 className="text-2xl font-medium">Luis Guillermo Garzón Reyes</h1>
        
        <ul className="flex gap-4">
            {bulletPoint("Proyectos", "#projects")}
            {bulletPoint("Experiencia", "#experience")}
            {bulletPoint("Educación", "#education")}
            {bulletPoint("Contacto", "#contact")}
        </ul>

        <h1 className="text-2xl from-neutral-700">Ingeniero Mecánico</h1>
    </header>;
}

export default header;