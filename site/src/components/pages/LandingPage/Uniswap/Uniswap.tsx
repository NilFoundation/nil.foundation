import s from './Uniswap.module.scss'
import commonStyle from '../common.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { SwapInput } from 'components/SwapInput/SwapInput';
import classNames from 'classnames';
import { CurrencySymbol } from 'components/SwapInput/types';
import { LimitedButton } from 'components/LimitedButton/LimitedButton';
import { Magic } from './Magic';

export const Uniswap = () => {
    const [sell, setSell] = useState('0.01')
    const [buy, setBuy] = useState('')
    const [buyCurrency, setBuyCurrency] = useState<CurrencySymbol>('usdt')
    const [loading, setLoading] = useState(true)

    const onSetSell = useCallback(async (value: string) => {
        setSell(value)
        setLoading(true)
        setBuy('0')
        setLoading(false)
    }, [setSell, buyCurrency, setBuy, setLoading])

    const onSetBuy = useCallback(async (value: string) => {
        setBuy(value)
        setLoading(true)
    }, [setBuy, buyCurrency, setSell, setLoading])

    useEffect(() => {

    }, [])

    
    return <div className={commonStyle.wrap}>
        <div className={s.title}>Check out how Uniswap v2 works on =nil;</div>
        <div className={s.blocks}>
            <div className={classNames(s.block, s.block__top, s.block__top_left)} />
            <div className={classNames(s.block, s.block__top, s.block__top_right)} />
            <div className={classNames(s.block, s.block__middle, s.block__middle_left, s.swap)}>
                <SwapInput 
                disabled 
                label='Sell' 
                currencies={['eth']} 
                selectedCurrency='eth'
                value={sell} 
                onChange={onSetSell}
                
                />
                <SwapInput
                label='Buy'
                currencies={['usdt', 'usdc']}
                selectedCurrency={buyCurrency}  
                value={buy}
                onChange={onSetBuy}
                onCurrencySelect={(currency) => setBuyCurrency(currency)}
                />
                {loading ? <LimitedButton primary icon={<Magic />} className={s.swap__button}><span>&nbsp;</span></LimitedButton> : <LimitedButton primary icon={<Magic />} className={s.swap__button}>Swap</LimitedButton>}
            </div>
            <div className={classNames(s.block, s.block__middle, s.block__middle_right, s.animation)}>

            </div>
            <div className={classNames(s.block, s.block__bottom, s.block__bottom_left)} />
            <div className={classNames(s.block, s.block__bottom, s.block__bottom_right)} />
        </div>
    </div>
}