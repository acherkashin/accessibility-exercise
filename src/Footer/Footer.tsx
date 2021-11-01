/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import './Footer.css';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className={classNames("footer", className)}>
      <div className="footer__inner">
        <div className="footer__left">
          <a className="footer__left-link" href="#">{t('visitorsWithDisabilities')}</a>
          <a className="footer__left-link" href="#">{t('ticketsAndBenefits')}</a>
          <a className="footer__left-link" href="#">{t('antiCorruption', { defaultValue: "Противодействие коррупции" })}</a>

          <section>
            <h3>{t('socialNetwork')}</h3>
            <a
              className="footer__social-link footer__social-link--mail"
              href="mailto:cherkalexander@gmail.com"
              aria-label="Связаться по почте"></a>
            <a
              className="footer__social-link footer__social-link--telegram"
              href="t.me/cherkalexander"
              aria-label="Связаться через Телеграм"></a>
            <a
              className="footer__social-link footer__social-link--facebook"
              href="#"
              aria-label="Связаться через Facebook"></a>
          </section>
        </div>

        <section className="footer__right">
          <h3>{t('newsSubscription')}</h3>
          <form>
            <div className="footer__row">
              <input className="footer__agree-checkbox" id="agree" type="checkbox" required />
              <label className="footer__agree-label" htmlFor="agree">Согласен на обработку персональных данных</label>
            </div>
            <div className="footer__row">
              <input className="footer__email-field" id="email" type="email" required />
              <label className="footer__email-label" htmlFor="email">Введите E-mail</label>
              <button className="footer__subscribe-btn" type="submit">Подписаться</button>
            </div>
          </form>
        </section>
      </div>
    </footer>
  );
}
