import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { useApplyButton } from './useApplyButton'
import { HeadingXLarge, PRIMITIVE_COLORS } from '@nilfoundation/ui-kit'

const FreshteamEmbed = () => {
  const [displayError, setDisplayError] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  useApplyButton({
    widgetContainerRef: widgetRef,
    buttonId: 'freshteam-job-apply'
  })

  useEffect(() => {
    // disable scrollIntoView while Freshteam widget is mounted to prevent scrolling to the application form
    const scrollIntoView = HTMLElement.prototype.scrollIntoView;
    HTMLElement.prototype.scrollIntoView = function() {};

    return () => {
      HTMLElement.prototype.scrollIntoView = scrollIntoView;
    }
  }, [])

  return (
    <>
      <Script
        src="https://s3.amazonaws.com/files.freshteam.com/production/142690/attachments/6004875605/original/6000069521_widget.js?1662042007"
        strategy="lazyOnload"
        onError={() => setDisplayError(true)}
      />
      <div id="freshteam-widget" ref={widgetRef}>
        {displayError && (
          <HeadingXLarge marginTop="24px" justifyContent="center" color={PRIMITIVE_COLORS.gray300}>
            Something went wrong while loading the application form. Please try again later.
          </HeadingXLarge>
        )}
      </div>
    </>
  )
}

export default FreshteamEmbed
