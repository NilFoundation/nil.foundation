import { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react'
import ethIcon from './assets/eth.svg'
import usdtIcon from './assets/usdt.svg'
import usdcIcon from './assets/usdc.svg'
import { ArrowIcon } from './ArrowIcon'
import styles from './SwapInput.module.scss'
import { CurrencySymbol } from './types'

const currencyIcons: Record<CurrencySymbol, any> = {
  eth: ethIcon,
  usdt: usdtIcon,
  usdc: usdcIcon,
}

interface SwapInputProps {
  label: string
  value: string
  currencies: CurrencySymbol[]
  selectedCurrency: CurrencySymbol
  disabled?: boolean
  disableCurrencySelector?: boolean
  usdValue?: string
  onChange?: (value: string) => void
  onCurrencySelect?: (currency: CurrencySymbol) => void
  error?: string
  loading?: boolean
}

export const SwapInput: FC<SwapInputProps> = ({
  label,
  value,
  currencies,
  selectedCurrency,
  disabled = false,
  disableCurrencySelector = false,
  usdValue,
  onChange,
  onCurrencySelect,
  error,
  loading,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const key = useMemo(() => Math.random().toString(), [])

  const handleCurrencySelect = (currency: CurrencySymbol) => {
    setIsDropdownOpen(false)
    onCurrencySelect?.(currency)
  }

  const handleSelectorClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.stopPropagation()
      e.preventDefault()
      if (!disableCurrencySelector) {
        setIsDropdownOpen(!isDropdownOpen)
      }
    },
    [disableCurrencySelector],
  )

  const keyOption: { htmlFor?: string } = {}
  if (!disabled || !loading) {
    keyOption['htmlFor'] = key
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <label className={`${styles.inputContainer} ${error ? styles.error : ''}`} {...keyOption}>
        {loading ? (
          <button className={styles.loading} />
        ) : (
          <input
            disabled={disabled}
            type="number"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`${styles.input} ${disabled ? styles.disabled : ''}`}
            id={key}
          />
        )}
        <button
          className={`${styles.currencySelector} ${disableCurrencySelector ? styles.disabled : ''}`}
          onClick={handleSelectorClick}
          disabled={disableCurrencySelector}
          key="selectedCurrency"
        >
          <div className={styles.currencyIcon}>
            <img src={currencyIcons[selectedCurrency].src} alt={selectedCurrency.toUpperCase()} />
          </div>
          <span className={styles.currencyText}>{selectedCurrency.toUpperCase()}</span>
          <div className={`${styles.arrow} ${isDropdownOpen ? styles.open : ''}`}>
            <ArrowIcon disabled={disableCurrencySelector} />
          </div>
        </button>
        {!disableCurrencySelector && isDropdownOpen && (
          <div className={styles.dropdown}>
            {currencies.map((currency) => (
              <button key={currency} className={styles.dropdownItem} onClick={() => handleCurrencySelect(currency)}>
                <div className={styles.currencyIcon}>
                  <img src={currencyIcons[currency].src} alt={currency.toUpperCase()} />
                </div>
                <span className={styles.currencyText}>{currency.toUpperCase()}</span>
              </button>
            ))}
          </div>
        )}
      </label>
      {usdValue && <div className={styles.usdValue}>{usdValue}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
