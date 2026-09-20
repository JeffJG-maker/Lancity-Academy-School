import Reveal from "./Reveal";

function About() {
    return (
        <section
            id="about"
            className="bg-[#f7f8f5] py-24 dark:bg-slate-900"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

                <Reveal>
                    <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-emerald-100 dark:bg-slate-800">
                            <div className="flex h-full items-center justify-center">
                                <div className="text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm dark:bg-slate-900">
                                        L
                                    </div>

                                    <p className="mt-5 text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                                        LANCITY ACADEMY
                                    </p>

                                    <p className="mt-2 text-xs text-emerald-800/60 dark:text-slate-400">
                                        Excellent is our minimum
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-xl dark:border-slate-700 dark:bg-slate-950 sm:-right-6">
                            <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                                100%
                            </p>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Commitment to excellence
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={150}>
                    <div className="max-w-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                            About Lancity
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Creating an environment where every child can thrive.
                        </h2>

                        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
                            At Lancity Academy, we believe that every child has unique
                            potential. Our responsibility is to provide the right
                            environment, guidance, and opportunities for that potential to
                            grow.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                            Through quality teaching, strong values, and a supportive
                            community, we prepare our students not only for academic success
                            but also for the responsibilities and opportunities of tomorrow.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Knowledge", "Character", "Confidence", "Excellence"].map(
                                (item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-300"
                                    >
                                        {item}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default About;