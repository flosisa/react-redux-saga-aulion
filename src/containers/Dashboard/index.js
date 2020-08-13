import React, { useEffect } from 'react'
import DashboardComponent from 'Components/Dashboard'
import { compose, pathOr, isEmpty } from "ramda";
import { connect } from "react-redux";
import * as actions from "Redux/actions";

const enhance = compose(
  connect(({ dashboard }) => ({
    regions: pathOr({}, ['regions', 'data'], dashboard),
    districtsByRegion: pathOr([], ['districtsByRegion', 'data'], dashboard),
  }))
);

const Dashboard = props => {
  const { dispatch, regions, districtsByRegion } = props

  useEffect(() => {
    isEmpty(regions) && dispatch(actions.regions())
    isEmpty(districtsByRegion) && dispatch(actions.districtsByRegion())
  }, [])

  return <DashboardComponent
    regions={regions}
    districtsByRegion={districtsByRegion}
  />
}

export default enhance(Dashboard)
