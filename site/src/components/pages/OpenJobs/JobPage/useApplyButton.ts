import { useEffect } from 'react'

type UseApplyButtonProps = {
  formId: string
  buttonId: string
  setIsLoading: (isLoading: boolean) => void
  setIsError: (isError: boolean) => void
  maxWaitFormLoadTime?: number
}

export const useApplyButton = ({
  formId,
  buttonId,
  setIsLoading,
  setIsError,
  maxWaitFormLoadTime = 5000,
}: UseApplyButtonProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const form = document.getElementById(formId)

      if (form) {
        setIsLoading(false)
        clearInterval(interval)
        clearTimeout(timeout)
      }

      const button = document.getElementById(buttonId)

      if (button) {
        button.click()
      }
    }, 150)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setIsLoading(false)
      setIsError(true)
    }, maxWaitFormLoadTime)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [formId, buttonId, setIsLoading, maxWaitFormLoadTime, setIsError])
}
