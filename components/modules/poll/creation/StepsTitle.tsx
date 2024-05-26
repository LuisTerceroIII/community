"use client";

import { usePollUIStore } from "@/model/ui-store/polls/polls-ui-model";
import { FC } from "react";

interface StepsTitleProps {
	classes?: string[];
}

export const StepsTitle: FC<StepsTitleProps> = (props) => {
	const { classes } = props;

	const { currentStep, getActionStep, getStepsCount } = usePollUIStore();

	const message = `Step ${currentStep}/${getStepsCount()}: ${getActionStep()?.title}`;

	return (
		<h2 className={`text-base text-black ${classes?.join(' ')}`}>{message}</h2>
	)
}
