import { ANIMATION_CARD_ALIGNMENT } from "components/AnimatedDottedContainer";
import ArrowButton from "components/ArrowButton";
import s from "./FooterAnimationSection.module.scss";

type AnimationGetter = (
	text?: string,
	href?: string,
	prefersReducedMotion?: boolean,
	onClick?: (...args: any[]) => any,
) => any[];

export const getAnimatedItemList: AnimationGetter = (
	text,
	href,
	prefersReducedMotion,
	onClick,
) => {
	return [
		{
			id: "1",
			ySourceValue: "-30%",
			yTransformValue: "-30%",
			// hideLine: true,
		},
		{
			id: "2",
			ySourceValue: "-90%",
			yTransformValue: "-75%",
		},
		{
			id: "3",
			ySourceValue: "-100%",
			yTransformValue: "-100%",
			hideLine: true,
			// children: text && (
			//   <ArrowButton
			//     className={s.arrowButton}
			//     text={text}
			//     href={href}
			//     onClick={onClick}
			//   />
			// ),
		},
		{
			id: "4",
			ySourceValue: "-120%",
			yTransformValue: "-75%",
		},
		// {
		//   id: '5',
		//   ySourceValue: '-42%',
		//   yTransformValue: '-50%',
		// },
		{
			id: "6",
			ySourceValue: "85%",
			yTransformValue: "85%",
			alignment: ANIMATION_CARD_ALIGNMENT.bottom,
		},
		{
			id: "7",
			ySourceValue: "85%",
			// ySourceValue: prefersReducedMotion ? '90%' : '40%',
			yTransformValue: "85%",
			alignment: ANIMATION_CARD_ALIGNMENT.bottom,
		},
		{
			id: "8",
			ySourceValue: "85%",
			// ySourceValue: prefersReducedMotion ? '85%' : '85%',
			yTransformValue: "85%",
			alignment: ANIMATION_CARD_ALIGNMENT.bottom,
		},
		{
			id: "9",
			ySourceValue: "85%",
			// ySourceValue: prefersReducedMotion ? '90%' : '55%',
			yTransformValue: "85%",
			alignment: ANIMATION_CARD_ALIGNMENT.bottom,
		},
		// {
		//   id: '10',
		//   ySourceValue: '85%',
		//   // ySourceValue: prefersReducedMotion ? '90%' : '43%',
		//   yTransformValue: '85%',
		//   alignment: ANIMATION_CARD_ALIGNMENT.bottom,
		// },
	];
};
export const getAnimatedItemMobileList: AnimationGetter = (
	text,
	href,
	prefersReducedMotion,
	onClick,
) => {
	return [
		{
			id: "footer_nav",
			ySourceValue: "-80%",
		},
		{
			id: "m2",
			ySourceValue: "0%",
			children: text && (
				<ArrowButton
					className={s.arrowButton}
					text={text}
					href={href}
					onClick={onClick}
				/>
			),
		},
		{
			id: "m3",
			ySourceValue: "100%",
		},
		{
			id: "m4",
			ySourceValue: "100%",
		},
	];
};
