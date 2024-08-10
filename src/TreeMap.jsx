import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import data from "./data";
import Roma from "./Roma";
const TreeMap = () => {
  const [option, setOption] = useState(null);

  useEffect(() => {

    // Set chart options
    const chartOption = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          data: [data],
          top: "1%",
          left: "7%",
          bottom: "1%",
          right: "20%",
          symbolSize: 7,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 9,
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
            },
          },
          emphasis: {
            focus: "descendant",
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };

    setOption(chartOption);
  }, []);

  return (
    <div className="w-full h-full">
      {option && (
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
          theme={Roma}
        />
      )}
    </div>
  );
};

export default TreeMap;
