import React from 'react';
import userRolesHandler, { filterByRoles } from 'Util/userRolesHandler'
import { compose, path, pathOr, prop } from 'ramda';
import { connect } from 'react-redux';
import * as ROUTES from "Constants/routes";
import {
  juridicalApplicationsTypes,
  yattApplicationsTypes,
  noActivityApplicationsTypes
} from 'Constants/applicationsTypes'
import { Spinner } from 'reactstrap'
import cx from "clsx";

const enhance = compose(
  connect(({ profile }) => ({
    userRoles: pathOr([], ['account', 'data', 'authorities'], profile),
  })),
);

const UserRolesLoading = () => {
  return (
    <div className={cx('main-window spinner')}>
      <Spinner color="light" />
    </div>
  )
}

const RoleChecker = RoutedComponent => {
  const Component = props => {
    const { userRoles, match } = props
    const id = +path(['params', 'id'], match)
    const url = prop('url', match)

    const actualRoles = userRolesHandler(userRoles)

    const activeApplicationsTypes = url.startsWith(ROUTES.JURIDICAL_APPLICATIONS) ?
      juridicalApplicationsTypes :
      url.startsWith(ROUTES.YATT_APPLICATIONS) ?
        yattApplicationsTypes :
        noActivityApplicationsTypes

    const activeApplicationsTypesIds = filterByRoles(activeApplicationsTypes, actualRoles)

    if (activeApplicationsTypesIds.includes(id)) {
      return <RoutedComponent {...props} />
    } else {
      return UserRolesLoading(userRoles)
    }
  }

  return enhance(Component);
}

export default RoleChecker
