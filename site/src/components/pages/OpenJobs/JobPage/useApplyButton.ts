import { useEffect } from "react";

type UseApplyButtonProps = {
    widgetContainerRef: React.RefObject<HTMLDivElement>;
    buttonId: string;
}

export const useApplyButton = ({widgetContainerRef, buttonId}: UseApplyButtonProps) => {
    useEffect(() => {
        const widgetContainer = widgetContainerRef.current;

        if (!widgetContainer) {
            return;
        }

        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    
                    if (!document.querySelector('.rc-anchor-content')) {
                        return;
                    }

                    setTimeout(() => {
                        const button = document.getElementById(buttonId);
                        button && button.click();
                        console.log(window.freshTeam.JobWidget);
                        mutationObserver.disconnect();
                    }, 0);

                    console.log(window.freshTeam.JobWidget);
                }
            });
        });

        mutationObserver.observe(widgetContainer, {
            attributes: false,
            childList: true,
            subtree: true,
            characterData: false,
        });

        return () => {
            mutationObserver.disconnect();
        };
    }, [widgetContainerRef, buttonId]);
};
