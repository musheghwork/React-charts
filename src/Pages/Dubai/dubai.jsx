import "./dubai.css";
import CharCreator from "../../components/charCreator";
import DiagramCreator from "../../components/diagramCreator";
import PieCreator from "../../components/pieCreator";
import RadioGroup from "../../components/radioGroup";
import {
  charOne,
  charTwo,
  pieOne,
  pieThird,
  pieTwo,
  headerInfo,
} from "../../utils/charsInfo";
import { useState } from "react";

function Dubai() {
  const [activeRange, setActiveRange] = useState("1W");
  const [activeMarket, setActiveMarket] = useState("All");
  const [salesType, setSalesType] = useState("value");
  const [salesLocType, setSalesLocType] = useState("valueLoc");
  const [salesProjType, setSalesProjType] = useState("valueProj");

  return (
    <div className="dubai">
      <h1>Market Insights</h1>
      <div className="firstCont">
        <div className="inerCont">
          <p>Select Date Range</p>
          <div className="dataRange">
            {["1W", "1M", "3M", "6M", "1Y", "2Y"].map((range) => (
              <p
                key={range}
                onClick={() => setActiveRange(range)}
                className={activeRange === range ? "activeRange" : "range"}
              >
                {range}
              </p>
            ))}
          </div>
        </div>

        <div className="inerCont">
          <p>Select Market</p>
          <div className="selectMark">
            {["All", "Primary", "Secondary"].map((market) => (
              <p
                key={market}
                className={activeMarket === market ? "activeRange" : "range"}
                onClick={() => setActiveMarket(market)}
              >
                {market}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="secondCont">
        {headerInfo.map((stat, idx) => (
          <div className="infoCont" key={idx}>
            <p className="infoContStat">{stat.value}</p>
            <span>{stat.label}</span>
            <div className="yoy">
              <p>{stat.change}</p>
              <p>YoY Change</p>
            </div>
          </div>
        ))}
      </div>

      <div className="thirdCont">
        <div className="charts">
          <div className="chartHeader">
            <p className="leftTitle">2023 VS 2024</p>
            <div className="centerTitle">
              <p className="redDot">2023</p>
              <p className="greenDot">2024</p>
            </div>
          </div>
          <CharCreator chart={charOne} nameOne="2023" nameTwo="2024" />
          <RadioGroup
            name="sales"
            selected={salesType}
            onChange={setSalesType}
            options={[
              { id: "value", label: "Sales Value", value: "value" },
              { id: "volume", label: "Sales Volume", value: "volume" },
            ]}
          />
        </div>
        <div className="pie">
          <PieCreator data={pieOne} />
        </div>
      </div>

      <div className="thirdCont">
        <div className="charts">
          <div className="chartHeader">
            <p className="leftTitle">Top 10 Trending Locations</p>
          </div>
          <DiagramCreator data={charTwo} color="#289991" />
          <RadioGroup
            name="salesLoc"
            selected={salesLocType}
            onChange={setSalesLocType}
            options={[
              { id: "valueLoc", label: "Sales Value", value: "valueLoc" },
              { id: "volumeLoc", label: "Sales Volume", value: "volumeLoc" },
            ]}
          />
        </div>
        <div className="pie">
          <PieCreator data={pieTwo} />
        </div>
      </div>

      <div className="thirdCont">
        <div className="charts">
          <div className="chartHeader">
            <p className="leftTitle">Top 10 Trending Projects</p>
          </div>
          <DiagramCreator data={charTwo} color="#D12D34" />
          <RadioGroup
            name="salesProj"
            selected={salesProjType}
            onChange={setSalesProjType}
            options={[
              { id: "valueProj", label: "Sales Value", value: "valueProj" },
              { id: "volumeProj", label: "Sales Volume", value: "volumeProj" },
            ]}
          />
        </div>
        <div className="pie">
          <PieCreator data={pieThird} columns={4} />
        </div>
      </div>
    </div>
  );
}

export default Dubai;
