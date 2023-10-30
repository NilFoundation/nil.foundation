import React from "react";
import cx from "classnames";

import { useViewport } from "hooks/useViewport";

import HeadingSection from "components/HeadingSection";
import WhiteRectangle from "components/WhiteRectangle";

import s from "./About.module.scss";
import { homePageData } from "stubs/homePageData";
import ArrowButton from "components/ArrowButton";

type AboutProps = {
	className?: string;
	data: typeof homePageData.about;
};

const About = ({
	className,
	data: { title, social, description },
}: AboutProps) => {
	const { isMobile } = useViewport();
	return (
		<div className={cx(s.root, className)}>
			<div className={s.left}>
				<WhiteRectangle />
				<HeadingSection title={title} socials={social} />
				<WhiteRectangle />
			</div>
			<div className={s.right}>
				{!isMobile && (
					<div className={s.rightHeader}>
						<div>
							<WhiteRectangle />
						</div>
						<div>
							<WhiteRectangle />
						</div>
					</div>
				)}
				<div className={s.description}>{description}</div>
				<div className={s.rightFooter}>
					<div>
						<ArrowButton
							className={s.link}
							text="Learn more"
							href="https://proof.market/#/market/account_mina"
						/>
						<WhiteRectangle />
					</div>
					<div>
						<WhiteRectangle />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
