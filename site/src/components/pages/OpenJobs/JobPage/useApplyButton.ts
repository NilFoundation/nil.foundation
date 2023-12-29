import { useEffect } from 'react'

type UseApplyButtonProps = {
  formId: string
  buttonId: string
  setIsLoading: (isLoading: boolean) => void
  maxWaitFormLoadTime?: number
}

export const useApplyButton = ({ formId, buttonId, setIsLoading, maxWaitFormLoadTime = 5000 }: UseApplyButtonProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const form = document.getElementById(formId)

      if (form) {
        setIsLoading(false)
        clearInterval(interval)
      }

      const button = document.getElementById(buttonId)

      if (button) {
        button.click()
      }
    }, 150)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setIsLoading(false)
    }, maxWaitFormLoadTime)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [formId, buttonId, setIsLoading, maxWaitFormLoadTime])
}
