import React, { useState, useContext } from "react";
import { barData, pieData, currentMonth, currentYear, months, years } from "Util/chartHandler";
import Select from "Components/Select";
import Bar from "Components/Chart/Bar";
import Pie from "Components/Chart/Pie";
import cx from "clsx";
import HomeContext from 'Contexts/HomeContext'
import { isEmpty } from 'ramda'

export default props => {
  const { countAll, countByRegion } = props

  const [selectedYear, setYear] = useState(currentYear);
  const [selectedMonth, setMonth] = useState(currentMonth);

  const { sideMenuState } = useContext(HomeContext)

  return (
    <div className={cx("main-window", !sideMenuState && "main-window__full")}>
      <section
        style={{
          backgroundColor: "#f4f4f4",
          padding: "50px 40px",
          overflow: "auto"
        }}
      >
        <h2 style={{ color: "#1E2D55", fontWeight: "bold", fontSize: 34 }}>
          Статистика
        </h2>
        {
          !isEmpty(countAll) && <div style={{ display: "flex" }}>
            <div style={{ marginRight: 50 }}>
              <Pie data={pieData(countAll)} />
            </div>
            <Pie data={pieData2} />
          </div>
        }
      </section>

      <section style={{ backgroundColor: "#FFFFFF", padding: "50px 40px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginBottom: 33, minWidth: 150, marginRight: 30 }}>
            <Select
              value={selectedYear}
              options={years}
              onChange={value => setYear(value)}
            />
          </div>
          <div style={{ marginBottom: 33, minWidth: 150 }}>
            <Select
              value={selectedMonth}
              options={months}
              onChange={value => setMonth(value)}
            />
          </div>
        </div>
        <div style={{ overflow: "auto" }}>
          <Bar data={barData(countByRegion)} />
        </div>
      </section>
    </div>
  );
};
