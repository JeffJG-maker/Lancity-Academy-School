import { ArrowUpRight } from "lucide-react";
import { programs } from "../data/programs";
import Reveal from "./Reveal";

function Programs() {
    return (
        <section
            id="admissions"
            className="bg-white py-24 dark:bg-slate-950"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <Reveal>
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                                Our Programs
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Learning designed for every stage of growth.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
                            From the early years through secondary education, our programs
                            are designed to help students grow academically and personally.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {programs.map((program, index) => (
                        <Reveal key={program.title} delay={index * 120}>
                            <article className="group h-full rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-900 dark:hover:shadow-black/20">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                                        0{index + 1}
                                    </span>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-hover:bg-emerald-700 group-hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-emerald-600">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                <p className="mt-12 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
                                    {program.level}
                                </p>

                                <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                                    {program.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                    {program.description}
                                </p>

                                <a
                                    href="#contact"
                                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-emerald-700 dark:text-slate-200 dark:group-hover:text-emerald-400"
                                >
                                    Learn more
                                    <ArrowUpRight size={16} />
                                </a>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programs;