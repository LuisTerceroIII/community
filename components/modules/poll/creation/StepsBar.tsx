"use client";

import { usePollUIStore } from "@/model/ui-store/polls/polls-ui-model";
import { FC } from "react";

interface StepsBarProps {
	classes?: string[];
}

export const StepsBar: FC<StepsBarProps> = (props) => {

	const { classes } = props;

	const { currentStep, getActionStep, getStepsCount } = usePollUIStore();

    const percentage = Math.round((currentStep / getStepsCount()) * 100);

	return (
		<span className={`flex w-5/12 border-gray-300 border-2 rounded-xl bg-white h-5 transition-all duration-800 ease-out ${classes?.join(' ')}`}>
            <span className={`bg-teal-500 h-4 rounded-xl`} style={{ width: `${percentage}%` }}/>
        </span>
	)
}
