// top module
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Line, Chart, Scatter } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

// UI components
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Slider, Typography } from '@material-ui/core';

// child components
import UmaParams from './UmaParams';

// redux store
import * as raceSimulatorActions from '../../../raceSimulatorSlice';
import { RootState } from '../../../../../store';

// other
import { roundNumbers } from '../../../../../functions/Common';
import { UmaObject, RaceObject, UmaState } from '../../../objects/objectTypes';
import { StatusType } from '../../../types';

interface Props {
  umaObject: UmaObject;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(3),
    },
  })
);

const UmaChart = ({ umaObject }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  // const frameResultArray = umaObject.getFrameResult();
  // const name = umaObject.getName();

  // const lineObj = useMemo(() => {
  //   if (umaObject !== null) {
  //     const labelList = [];
  //     for (let i = 0; i < frameResultArray.length; i += 1) {
  //       labelList.push(i);
  //     }
  //     const data = {
  //       labels: labelList,
  //       datasets: [
  //         {
  //           label: name,
  //           data: frameResultArray.map(
  //             (frameResult: UmaState, index: number) => ({
  //               frameIndex: index,
  //               ...frameResult,
  //             })
  //           ),
  //           fill: false,
  //           borderWidth: 0,
  //           backgroundColor: `rgb(225,225,225,0.7)`,
  //           // borderColor: `rgb(255,99,132,0.9)`,
  //         },
  //       ],
  //     };
  //     const options = {
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //         title: {
  //           // display: true,
  //           text: name,
  //           color: `rgb(225,225,225,1)`,
  //           font: {
  //             size: 24,
  //             weight: 'normal',
  //           },
  //           padding: {
  //             bottom: 10,
  //           },
  //         },
  //         tooltip: {
  //           callbacks: {
  //             label: (context: Record<string, any>) => {
  //               const { pos, momentSpeed, sp } = context.raw;
  //               const label = [
  //                 `${t('位置')}: ${pos}`,
  //                 `${t('當下速度')}: ${momentSpeed}`,
  //                 `${t('剩餘體力')}: ${sp}`,
  //               ];
  //               return label;
  //             },
  //           },
  //         },
  //       },
  //       parsing: {
  //         xAxisKey: 'frameIndex',
  //         yAxisKey: 'momentSpeed',
  //       },
  //       scales: {
  //         x: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: '秒數',
  //             color: `rgb(225,225,225,1)`,
  //             font: {
  //               size: 20,
  //               weight: 'bold',
  //               // lineHeight: 1.2,
  //             },
  //             padding: { top: 20, left: 0, right: 0, bottom: 0 },
  //           },
  //           ticks: {
  //             color: `rgb(200,200,100,0.7)`,
  //             font: {
  //               size: 16,
  //             },
  //             maxRotation: 0,
  //             minRotation: 0,
  //             callback: (
  //               frameCount: number,
  //               index: number,
  //               frameCounts: number[]
  //             ) => {
  //               return String(Math.floor(frameCount / 15));
  //             },
  //           },
  //         },
  //         y: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: '當下速度',
  //             color: `rgb(225,225,225,1)`,
  //             font: {
  //               size: 20,
  //               weight: 'bold',
  //               // lineHeight: 1.2,
  //             },
  //             padding: { top: 20, left: 0, right: 0, bottom: 0 },
  //           },
  //           ticks: {
  //             color: `rgb(200,100,100,0.7)`,
  //             font: {
  //               size: 18,
  //             },
  //           },
  //         },
  //       },
  //     };
  //     return <Line data={data} options={options} />;
  //   }
  //   return <></>;
  // }, [umaObject]);

  return (
    <>
      <div className={classes.root}>aaa</div>
      <UmaParams umaObject={umaObject} />
    </>
  );
};

export default UmaChart;
