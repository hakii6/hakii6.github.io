import React, { useState, useEffect, useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import { useSelector, useDispatch } from 'react-redux';
// import * as racesActions from '../features/races/racesSlice'

// import * as InitRaceFunctions from './InitRaceFunctions';
// import * as InitUmasFunctions from './InitUmasFunctions';
// import * as RaceFunctions from './RaceFunctions';

import { UmaState } from '../../types';
import { RootState } from '../../../../store';

import { roundNumbers } from '../../functions/Common';

const RaceResult = (): JSX.Element => {
  const raceFrames = useSelector(
    (state: RootState) => state.raceSimulator.raceFrames
  );
  const umaFrames = useMemo(() => {
    const index = 0;
    return raceFrames.map((frame: UmaState[]) => roundNumbers({ ...frame[0] }));
  }, [raceFrames]);

  const lineObj = useMemo(() => {
    if (umaFrames.length !== 0) {
      const labelList: any[] = [];
      const momentSpeedList: any[] = [];
      const unusedSpList: any[] = [];
      umaFrames.forEach((value, index) => {
        labelList.push(index);
        momentSpeedList.push({
          index,
          pos: value.pos,
          value: value.momentSpeed,
        });
        unusedSpList.push({
          index,
          pos: value.pos,
          value: value.unusedSp,
        });
      });

      const data = {
        labels: labelList,
        datasets: [
          {
            label: 'momentSpeed',
            data: momentSpeedList,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
            order: 1,
          },
          {
            label: 'unusedSp',
            data: unusedSpList,
            fill: false,
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
              label: (context: any) => {
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
              callback: (value: any, index: any, values: any) => {
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
  }, [raceFrames]);

  return (
    <div>
      <div>{lineObj}</div>

      {false &&
        umaFrames.length !== 0 &&
        umaFrames.map((value) => (
          <div>
            {value.pos} {value.momentSpeed} {value.momentAcc} {value.unusedSp}
          </div>
        ))}
    </div>
  );
};

export default RaceResult;
