import { FC, useMemo, useState } from 'react'
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
  usdValue?: string
  onChange?: (value: string) => void
  onCurrencySelect?: (currency: CurrencySymbol) => void
}

export const SwapInput: FC<SwapInputProps> = ({
  label,
  value,
  currencies,
  selectedCurrency,
  disabled = false,
  usdValue,
  onChange,
  onCurrencySelect,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const key = useMemo(() => Math.random().toString(), [])

  const handleCurrencySelect = (currency: CurrencySymbol) => {
    onCurrencySelect?.(currency)
    setIsDropdownOpen(false)
  }

  const handleSelectorClick = () => {
    if (!disabled) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <label className={styles.inputContainer} htmlFor={key}>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={styles.input}
          placeholder="0"
          id={key}
        />
        <button
          className={`${styles.currencySelector} ${disabled ? styles.disabled : ''}`}
          onClick={handleSelectorClick}
          disabled={disabled}
        >
          <div className={styles.currencyIcon}>
            <img src={currencyIcons[selectedCurrency].src} alt={selectedCurrency.toUpperCase()} />
          </div>
          <span className={styles.currencyText}>{selectedCurrency.toUpperCase()}</span>
          <div className={`${styles.arrow} ${isDropdownOpen ? styles.open : ''}`}>
            <ArrowIcon disabled={disabled} />
          </div>
        </button>
        {!disabled && isDropdownOpen && (
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
    </div>
  )
}
