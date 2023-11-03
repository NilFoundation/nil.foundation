import { memo } from "react";
import { InferProps, string } from "prop-types";
import cx from "classnames";

import s from "./LinkCard.module.scss";
import { Card } from "components/Card";

function LinkCard({
	className,
	title,
	linkTo,
	description,
}: InferProps<typeof LinkCard.propTypes>) {
	return (
		<Card className={cx(s.root, className)} href={linkTo}>
			<h2 className={s.title}>{title}</h2>
			<p className={s.description}>{description}</p>
		</Card>
	);
}

LinkCard.propTypes = {
	className: string,
	title: string,
	linkTo: string.isRequired,
	description: string,
};

export default memo(LinkCard);
