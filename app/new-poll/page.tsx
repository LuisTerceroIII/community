"use client"

import { StepsBar } from "@/components/modules/poll/creation/StepsBar";
import { StepsCreationSection } from "@/components/modules/poll/creation/StepsCreationSection";
import { StepsTitle } from "@/components/modules/poll/creation/StepsTitle";
import { usePollUIStore } from "@/model/ui-store/polls/polls-ui-model";

export default function Page() {

	const { currentStep, getActionStep, getStepsCount } = usePollUIStore();

    return (
        <main className="flex align-center min-h-screen p-12 bg-slate-50 flex-col w-full">
            <h1 className="text-4xl text-slate-800 text-center">Create new poll</h1>
            <StepsTitle classes={["text-center", "pt-4"]} />
            <StepsBar classes={["text-center", "mt-4", "self-center"]} />
            <p className="pt-4 text-lg text-slate-800 text-center">{getActionStep()?.description}</p>
            <StepsCreationSection/>

        </main>
    )
}