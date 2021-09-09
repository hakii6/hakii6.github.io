import React, { useState, useEffect, useMemo } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../../store';

import { roundNumbers } from '../../functions/Common';

const RaceResultMode2 = (): JSX.Element => {
  const umaStateResults = useSelector(
    (state: RootState) => state.raceSimulator.umaStateResults
  );

  const lineObjList = useMemo(() => {
    if (umaStateResults.length !== 0) {
      if (!umaStateResults[0]) {
        return <></>;
      }
      const maxFrameCount = umaStateResults.reduce(
        (curValue: number, umaLineDataList: any) =>
          curValue > umaLineDataList.length ? curValue : umaLineDataList.length,
        0
      );
      const labelList: number[] = [];
      for (let i = 0; i < maxFrameCount; i += 1) {
        labelList.push(i);
      }

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
        y: {
          display: true,
          min: 0,
          max: umaStateResults.length + 1,
        },
      };
      const plugins = {
        responsive: true,
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
      };
      const interaction = {
        mode: 'index',
        intersect: false,
      };
      const parsing = {
        xAxisKey: 'pos',
        yAxisKey: 'index',
      };
      const options = {
        // indexAxis: 'y',
        plugins,
        parsing,
        scales,
        interaction,
      };
      // const skipped = (ctx: any, value: any) => {
      //   console.log(ctx);
      //   console.log(value);
      //   return ctx.p0.skip || ctx.p1.skip ? value : undefined
      // };
      const highlight = (ctx: any, value: any) => {
        return ctx.p1DataIndex < 500 ? value : 'rgb(255,255,255,0.5)';
      };
      const pass = (ctx: any, value: any) => {
        return ctx.p0.parsed.x < 500 ? value : undefined;
      };
      const data = {
        labels: labelList,
        datasets: umaStateResults.map(
          (umaLineDataList: any, index: number) => ({
            label: String(index),
            data: umaLineDataList.map(
              (umaLineData: any, frameIndex: number) => ({
                index: index + 1,
                ...umaLineData,
                frameIndex,
              })
            ),
            fill: false,
            borderWidth: 1,
            borderColor: `rgb(75, 192, 192)`,
            backgroundColor: `rgb(0, 0, 0, 0)`,
            segment: {
              borderColor: (ctx: any) => highlight(ctx, 'rgb(0,0,0,1)'),
              borderDash: (ctx: any) => pass(ctx, [6, 6]),
            },
            yAxisID: umaLineDataList.umaName,
            order: index,
          })
        ),
      };
      return <Line data={data} options={options} />;
    }
    return <></>;
  }, [umaStateResults]);

  return <div>{lineObjList}</div>;
};

export default RaceResultMode2;

// {value.pos} {value.momentSpeed} {value.momentAcc} {value.sp}
