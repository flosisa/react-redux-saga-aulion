import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as ROUTES from 'Constants/routes';
import Home from './Home';
import ErrorPage from './Error';
import AppLocale from 'Lang';
import { compose, prop } from 'ramda';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

const enhance = compose(
    connect(({ settings }) => ({
        locale: prop('locale', settings),
    })),
);

const Index = props => {
    const { locale } = props;

    const currentAppLocale = AppLocale[locale];

    return (
        <div className="app">
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
            >
                <Switch>
                    <Route exact path={ROUTES.INDEX} component={Home} />
                    <Route exact path={ROUTES.ERROR_URL} component={ErrorPage} />
                    <Redirect to={ROUTES.ERROR_URL} />
                </Switch>
            </IntlProvider>
        </div>
    );
};

export default enhance(Index);