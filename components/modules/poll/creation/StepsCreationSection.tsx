"use client";

import { usePollUIStore } from "@/model/ui-store/polls/polls-ui-model";
import { FC, useMemo } from "react";
import { StepsOne } from "./StepOne";
import { StepsTwo } from "./StepTwo";

interface StepsCreationSectionProps {
	classes?: string[];
}

export const StepsCreationSection: FC<StepsCreationSectionProps> = (props) => {

	const { classes } = props;

	const { currentStep, getActionStep, getStepsCount } = usePollUIStore();

	const stepComponent = useMemo(() => {
		if (currentStep === 1) {
			return <StepsOne classes={classes} />
		}  else if (currentStep === 2) {
			return <StepsTwo classes={classes} />
		} /*else if (currentStep === 3) {
			return <StepsThree classes={classes} />
		}  */else return null
	}, [currentStep])

	return (
		<span className={`flex w-8/12 pt-12 self-center flex-col gap-4 font-medium ${classes?.join(' ')}`}>
			{stepComponent}
        </span>
	)
}
