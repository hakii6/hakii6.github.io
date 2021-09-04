import React, { useState, useEffect, useMemo } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

import { UmaState, UmaFrame, RaceState } from '../../types';
import { RootState } from '../../../../store';

import { roundNumbers } from '../../functions/Common';

const RaceResult = (): JSX.Element => {
  const raceFrameResult = useSelector(
    (state: RootState) => state.raceSimulator.raceFrameResult
  );
  const umaFrames = useMemo(() => {
    const index = 0;
    if (raceFrameResult.length !== 0) {
      return raceFrameResult.map((umaStateList: UmaState[]) =>
        roundNumbers({ ...umaStateList[index].momentFrame })
      );
    }
    return [];
  }, [raceFrameResult]);

  const lineObj = useMemo(() => {
    if (umaFrames.length !== 0) {
      const labelList: number[] = [];
      const momentSpeedList: Record<string, number>[] = [];
      const spList: Record<string, number>[] = [];
      umaFrames.forEach((value, index) => {
        labelList.push(index);
        momentSpeedList.push({
          index,
          pos: value.pos,
          value: value.momentSpeed,
        });
        spList.push({
          index,
          pos: value.pos,
          value: value.sp,
        });
      });

      const data = {
        labels: labelList,
        datasets: [
          {
            label: 'momentSpeed',
            data: momentSpeedList,
            showLine: true,
            fill: false,
            borderWidth: 1,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
            order: 1,
          },
          {
            label: 'sp',
            data: spList,
            showLine: true,
            fill: false,
            borderWidth: 1,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-2',
            order: 2,
          },
        ],
      };

      const options = {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: Record<string, any>) => {
                const { pos, value } = context.raw;
                const label = [
                  `pos: ${pos}`,
                  `${context.dataset.label}: ${value}`,
                ];
                return label;
              },
            },
          },
        },
        parsing: {
          xAxisKey: 'index',
          yAxisKey: 'value',
        },
        scales: {
          'y-axis-1': {
            type: 'linear',
            ticks: {
              beginAtZero: true,
            },
          },
          'y-axis-2': {
            type: 'linear',
            min: 0,
            ticks: {
              beginAtZero: true,
            },
          },
          x: {
            ticks: {
              callback: (value: number, index: number, values: number[]) => {
                return String(Math.floor(value / 15));
              },
              stepSize: 15,
            },
          },
        },
      };
      return <Line data={data} options={options} />;
    }
    return <></>;
  }, [raceFrameResult]);

  return <div>{lineObj}</div>;
};

export default RaceResult;

// {value.pos} {value.momentSpeed} {value.momentAcc} {value.sp}
