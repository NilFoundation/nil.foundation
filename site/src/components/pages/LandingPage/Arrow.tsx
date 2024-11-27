import cn from 'classnames';
import commonStyles from './common.module.scss';

export const Arrow = ({fillColor, className }: {fillColor?: string, className?: string}) => {
    const fill = fillColor || '#212121';
    return <div className={commonStyles.arrowContainer}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(className, commonStyles.arrow)}>
<rect x="13.1055" y="25.5364" width="17.7246" height="2.29197" transform="rotate(-45 13.1055 25.5364)" fill={fill}/>
<rect x="16.3594" y="12.5593" width="11.3246" height="2.29197" fill={fill}/>
<rect x="25.4121" y="23.9016" width="11.321" height="2.29197" transform="rotate(-90 25.4121 23.9016)" fill={fill}/>
</svg></div>

}