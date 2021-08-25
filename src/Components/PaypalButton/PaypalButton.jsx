import React, { useState, useEffect, useContext } from 'react';
import { i18n } from '../../translate/i18n';
import {GlobalContext} from '../../Contexts/GlobalContext';

function PaypalButton() {

    const { lang } = useContext(GlobalContext);
    const [currency, setCurrency] = useState('USD');

    useEffect(() => {
        setCurrency(lang === 'pt-BR' ? 'BRL' : 'USD');
    }, [currency, lang]);

    return (
        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="WYLDPSDW4YBBU" />
            <input type="hidden" name="no_recurring" value="0" />
            <input type="hidden" name="currency_code" value={currency} />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title={i18n.t('buttons.paypalTitle')} alt={i18n.t('buttons.paypalAlt')} />
            <img alt="Paypal" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
        </form>
    );
}

export default PaypalButton;