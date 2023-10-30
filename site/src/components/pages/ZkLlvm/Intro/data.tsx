import { ANIMATION_CARD_ALIGNMENT } from "components/AnimatedDottedContainer";
import ArrowButton from "components/ArrowButton";
import { IntroDescription } from "components/IntroAnimation";
import s from "./Intro.module.scss";

export const getAnimatedItemList = (prefersReduceMotion?: boolean) => [
	{
		id: "z1",
		ySourceValue: "-32%",
		yTransformValue: "-99%",
	},
	{
		id: "z2",
		ySourceValue: "-12%",
		yTransformValue: "-115%",
	},
	{
		id: "z3",
		ySourceValue: "-64%",
		yTransformValue: "-99%",
		children: (isCompleted: boolean) => (
			<IntroDescription
				className={s.description}
				text="Get high-performance circuits straight from C++, Rust, or other mainstream code using this powerful tool designed for developers."
				isVisible={isCompleted}
			/>
		),
	},
	{
		id: "z4",
		ySourceValue: "-28%",
		yTransformValue: "-99%",
	},
	{
		id: "z5",
		ySourceValue: "-20%",
		yTransformValue: "-80%",
	},
	{
		id: "z6",
		ySourceValue: "-48%",
		yTransformValue: "-99%",
	},
	{
		id: "z7",
		ySourceValue: "-86%",
		yTransformValue: "-99%",
	},
	{
		id: "z8",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
	{
		id: "z9",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
	{
		id: "z10",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
	{
		id: "z11",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
	{
		id: "z12",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
	{
		id: "z13",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
	{
		id: "z14",
		ySourceValue: "20%",
		alignment: ANIMATION_CARD_ALIGNMENT.bottom,
	},
];

export const animatedItemMobileList = [
	{
		id: "m1",
		ySourceValue: "-30%",
		children: (
			<ArrowButton
				className={s.link}
				text="Discover zkLLVM"
				href="https://github.com/NilFoundation/zkllvm"
			/>
		),
	},
	{
		id: "m2",
		ySourceValue: "-60%",
		yTransformValue: "-50%",
		yTransformValueList: [
			{ value: "-50%", duration: 0.8 },
			{ value: "-92%", duration: 0.8 },
		],
	},
	{
		id: "m3",
		ySourceValue: "-60%",
		yTransformValue: "-90%",
		yTransformValueList: [
			{ value: "-50%", duration: 0.8 },
			{ value: "-92%", duration: 0.8 },
		],
	},
	{
		id: "m4",
		ySourceValue: "-40%",
		yTransformValue: "-90%",
		yTransformValueList: [
			{ value: "-90%", duration: 0.8 },
			{ value: "-65%", duration: 0.8 },
		],
	},
];
