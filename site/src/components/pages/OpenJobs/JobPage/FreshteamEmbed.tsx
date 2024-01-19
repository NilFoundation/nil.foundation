import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useApplyButton } from './useApplyButton'
import { HeadingXLarge, PRIMITIVE_COLORS, SPINNER_SIZE, Spinner } from '@nilfoundation/ui-kit'
import { useStyletron } from 'styletron-react'

const FreshteamEmbed = () => {
  const [displayError, setDisplayError] = useState(false)
  const [loading, setLoading] = useState(true)
  const onError = () => {
    setDisplayError(true)
    setLoading(false)
  }
  useApplyButton({
    formId: 'applicant-form',
    buttonId: 'freshteam-job-apply',
    setIsLoading: setLoading,
    setIsError: setDisplayError,
    maxWaitFormLoadTime: 10000,
  })
  const [css] = useStyletron()

  useEffect(() => {
    // disable scrollIntoView while Freshteam widget is mounted to prevent scrolling to the application form
    const scrollIntoView = HTMLElement.prototype.scrollIntoView
    HTMLElement.prototype.scrollIntoView = function () {}

    return () => {
      HTMLElement.prototype.scrollIntoView = scrollIntoView
    }
  }, [])

  return (
    <>
      <Script
        src="https://s3.amazonaws.com/files.freshteam.com/production/142690/attachments/6004875605/original/6000069521_widget.js?1662042007"
        strategy="lazyOnload"
        onError={onError}
      />
      <div id="freshteam-widget" />
      {displayError && (
        <HeadingXLarge marginTop="24px" justifyContent="center" color={PRIMITIVE_COLORS.gray300}>
          Something went wrong while loading the application form. Please try again later.
        </HeadingXLarge>
      )}
      {loading && (
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            maxHeight: '32px',
          })}
        >
          <Spinner size={SPINNER_SIZE.large} animation />
        </div>
      )}
    </>
  )
}

export default FreshteamEmbed
