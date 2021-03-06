import React, { useState, useEffect, useContext } from 'react';
import { i18n } from '../../translate/i18n';
import { GlobalContext } from '../../Contexts/GlobalContext';
import ReactGA from 'react-ga';

function PaypalButton() {

    const { lang } = useContext(GlobalContext);
    const [currency, setCurrency] = useState('USD');

    useEffect(() => {
        setCurrency(lang === 'pt-BR' ? 'BRL' : 'USD');
    }, [currency, lang]);

    const handleClick = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Paypal button click'
        });
    }

    return (
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
            <input type="hidden" name="no_recurring" value="0" />
            <input type="hidden" name="currency_code" value={currency} />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"
                onClick={handleClick}
                name="submit" title={i18n.t('buttons.paypalTitle')} alt={i18n.t('buttons.paypalAlt')} />
        </form>
    );
}

export default PaypalButton;