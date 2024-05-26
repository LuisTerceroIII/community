"use client";

import { FormInput } from "@/components/molecules/form-input";
import { FormTextArea } from "@/components/molecules/form-texr-area";
import { usePollsModuleStore } from "@/model/polls/polls-module-store";
import { usePollUIStore } from "@/model/ui-store/polls/polls-ui-model";
import { FC, use, useMemo } from "react";

interface StepsTwoProps {
	classes?: string[];
}

export const StepsTwo: FC<StepsTwoProps> = (props) => {

	const { classes } = props;

	const { actionPoll, setActionPollDescription, setActionPollTitle, addOption } = usePollsModuleStore(state => state);
	const { nextStep } = usePollUIStore(state => state);

	const options = useMemo(() => {
		return actionPoll?.options?.map((option, index) => {
			return (
				<FormInput
					id={option?.title || "option"+index}
					label="Poll title"
					placeholder="Enter option 1"
					type="text"
					value={option?.title}
					onChange={setActionPollTitle}
				/>
			)
		})
	}, [])

	return (
		<form className={`flex w-8/12 pt-12 self-center flex-col gap-4 font-medium ${classes?.join(' ')}`}>
			{options}

			<div className="flex gap-3">
				<button type="button" onClick={nextStep} className="w-full text-white bg-green-700 hover:bg-blue-800  focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Add option</button>
				<button type="button" onClick={nextStep} className="w-full text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
			</div>
		</form>
	)
}
