import { stats } from "../data/stats";
import Reveal from "./Reveal";

function Stats() {
    return (
        <section className="border-y border-slate-200 bg-[#f7f8f5] dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Reveal key={stat.label} delay={index * 100}>
                        <div
                            className={`px-6 py-12 text-center sm:px-8 ${index !== 0
                                    ? "border-l border-slate-200 dark:border-slate-800"
                                    : ""
                                }`}
                        >
                            <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                {stat.value}
                            </p>

                            <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                                {stat.label}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Stats;