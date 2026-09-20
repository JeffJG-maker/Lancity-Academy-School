import { ArrowUpRight } from "lucide-react";
import { features } from "../data/features";
import Reveal from "./Reveal";

function Features() {
    return (
        <section
            id="academics"
            className="bg-white py-24 dark:bg-slate-950"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <Reveal>
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                            Why Lancity
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            More than education.
                            <br />
                            A foundation for life.
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
                            We believe education should develop the whole child — building
                            knowledge, character, confidence, and the ability to make a
                            meaningful impact.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 dark:border-slate-800 dark:bg-slate-800">
                    {features.map((feature, index) => (
                        <Reveal key={feature.number} delay={index * 100}>
                            <article className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-slate-50 sm:p-10 dark:bg-slate-900 dark:hover:bg-slate-800">
                                <div className="flex items-start justify-between">
                                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                                        {feature.number}
                                    </span>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-emerald-400"
                                    />
                                </div>

                                <h3 className="mt-12 text-xl font-semibold text-slate-900 dark:text-white">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
                                    {feature.description}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;