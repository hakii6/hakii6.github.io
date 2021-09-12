import React, { useState, useEffect, useMemo } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../store';

import { roundNumbers } from '../../../functions/Common';

const RaceResult = (): JSX.Element => {
  const raceResult = useSelector(
    (state: RootState) => state.raceSimulator.raceResult
  );

  const lineObj = useMemo(() => {
    if (raceResult.length !== 0) {
      if (!raceResult[0]) {
        return <></>;
      }

      const umaLineDataList = raceResult;
      const scales = {
        x: {
          ticks: {
            callback: (
              frameCount: number,
              index: number,
              frameCounts: number[]
            ) => {
              return String(Math.floor(frameCount / 15));
            },
          },
        },
      };
      const labelList = [];
      for (let i = 0; i < umaLineDataList[0].length; i += 1) {
        labelList.push(i);
      }
      const data = {
        labels: labelList,
        datasets: umaLineDataList.map((umaLineData: any, index: number) => ({
          label: String(index),
          data: umaLineData.map((d: any, frameIndex: number) => ({
            ...d,
            frameIndex,
          })),
          fill: false,
          borderWidth: 1,
          backgroundColor: `rgb(${255 - index * 50}, ${index * 60 + 39}, ${
            index * 30 + 132
          })`,
          borderColor: `rgba(${255 - index * 50}, ${index * 60 + 39}, ${
            index * 30 + 132
          }, 0.2)`,
          yAxisID: umaLineData.umaName,
          order: index,
        })),
      };
      const options = {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: Record<string, any>) => {
                const { pos, momentSpeed, sp } = context.raw;
                const label = [
                  '',
                  `pos: ${pos}`,
                  `momentSpeed: ${momentSpeed}`,
                  `sp: ${sp}`,
                ];
                return label;
              },
            },
          },
        },
        parsing: {
          xAxisKey: 'frameIndex',
          yAxisKey: 'momentSpeed',
        },
        scales,
      };
      return <Line data={data} options={options} />;
    }
    return <></>;
  }, [raceResult]);

  return <div>{lineObj}</div>;
};

export default RaceResult;

// {value.pos} {value.momentSpeed} {value.momentAcc} {value.sp}
