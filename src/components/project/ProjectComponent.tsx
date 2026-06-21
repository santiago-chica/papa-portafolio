
import ReactMarkdown from "react-markdown";
import { View } from "../viewer/View";
import type { ViewProps } from "../viewer/View";
import { SpecificationCard } from "./SpecificationCard";


interface Spec {
  name: string;
  value: string;
  icon: string;
}

interface ProductShowcaseProps {
  title: string;
  pdfUrl: string;
  specifications: Spec[];
  description: string;
};

interface ProductShowcaseProps extends ViewProps {};

export default function ProductShowcase({
  title,
  pdfUrl,
  specifications,
  description,
  path,
  fov,
  position
}: ProductShowcaseProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_420px]">
        {/* Canvas */}
        <div>
          <View path={path} fov={fov} position={position} />
        </div>

        {/* Sidebar */}
        <aside>
          <h1 className="mb-8 text-5xl font-bold leading-tight">
            {title}
          </h1>

          <div className="rounded-lg border bg-white">
            {specifications.map((item) => (
              <SpecificationCard
                key={item.name}
                item={item}
              />
            ))}
          </div>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex h-14 items-center justify-center rounded bg-slate-900 font-medium text-white transition hover:bg-slate-800"
          >
            Descargar planos (PDF)
          </a>
        </aside>
      </div>

      {/* One-column description */}
      <div className="mt-16 max-w-5xl">
        <h2 className="mb-4 text-sm uppercase tracking-[0.25em] text-slate-500">
          Descripción
        </h2>

        <p className="whitespace-pre-line text-lg leading-9 text-slate-700 markdown">
          <ReactMarkdown>{description}</ReactMarkdown> 
        </p>
      </div>
    </section>
  );
}