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
import {
  Button,
  Slider,
  Typography,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// child components
import UmaChart from './UmaChart';

// other
import { roundNumbers } from '../../../../functions/Common';
import { UmaClass } from '../../functions/Uma';
import { RaceObject } from '../../functions/Race';

interface Props {
  raceObject: RaceObject;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    tabs: {
      display: 'flex',
      margin: theme.spacing(1),
      centered: true,
    },
  })
);

const RaceChart = ({ raceObject }: Props): JSX.Element => {
  // common hooks
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  // state & selector
  const [frameIndex, setFrameIndex] = useState<number>(0);
  const [moveSpeed, setMoveSpeed] = useState<number>(15);

  // ref
  const intervalRef = useRef<any>(null);

  // memo & callback
  const raceParams = useMemo(() => raceObject.getRaceParams(), [raceObject]);
  const umaFrameResultList = useMemo(
    () =>
      raceObject
        .getUmaObjectList()
        .map((umaObject: UmaClass, index: number) =>
          umaObject.getFrameResult()
        ),
    [raceObject]
  );
  const {
    raceName,
    dist,
    phaseLine,
    sectionDist,
    distType,
    surface,
    turn,
    statusCheck,
    laneMax,
    finishTimeMin,
    finishTimeMax,
    corners,
    slopes,
    surfaceConstant,
    surfaceCoef,
    raceBaseSpeed,
  } = useMemo(() => raceParams, [raceObject]);
  const options = useMemo(() => {
    const maxPos = umaFrameResultList.reduce(
      (curValue: any, umaFrameResult: any) => {
        if (!umaFrameResult[frameIndex]) return dist;
        return Math.max(curValue, umaFrameResult[frameIndex].pos);
      },
      0
    );
    const scales = {
      x: {
        type: 'linear',
        ticks: {
          callback: (pos: number, index: number, poses: number[]) => {
            return String(pos / 1);
          },
        },
        max: Math.floor(Math.min(maxPos + 30, dist)),
        min: Math.floor(Math.max(0, maxPos - 50)),
      },
      y: {
        // display: true,
        min: 0,
        max: umaFrameResultList.length + 1,
      },
    };
    return {
      parsing: {
        xAxisKey: 'pos',
        yAxisKey: 'i',
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: Record<string, any>) => {
              const { name, pos, momentSpeed, sp } = context.raw;
              const label = [
                `pos: ${pos}`,
                `momentSpeed: ${momentSpeed}`,
                `sp: ${sp}`,
              ];
              return label;
            },
          },
        },
      },
      interaction: {
        intersect: false,
      },
      animation: false,
      scales,
      radius: 5,
    };
  }, [frameIndex]);
  const data = useMemo(
    () => ({
      datasets: [
        {
          label: '1',
          data: umaFrameResultList.map((umaFrameResult: any, i: number) => ({
            i: i + 1,
            ...umaFrameResult[frameIndex],
          })),
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 5,
        },
      ],
    }),
    [frameIndex]
  );
  const startMoving = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setFrameIndex((prevState) => prevState + moveSpeed);
    }, 100);
  };
  const stopMoving = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const handleChange = (e: any, newValue: any) => {
    setMoveSpeed(newValue);
  };

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 15,
      label: '1',
    },
    {
      value: 30,
      label: '2',
    },
    {
      value: 45,
      label: '3',
    },
    {
      value: 60,
      label: '4',
    },
    {
      value: 75,
      label: '5',
    },
  ];
  useEffect(() => {
    return () => stopMoving(); // stopMoving when unmounted
  }, []);
  return (
    <>
      <div className={classes.root}>
        <Typography id="move-speed-slider" gutterBottom>
          速度(秒為單位)
        </Typography>
        <Slider
          id="move-speed-slider"
          marks={marks}
          value={moveSpeed}
          min={3}
          step={3}
          max={75}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onMouseDown={startMoving}
        onMouseUp={stopMoving}
        onMouseLeave={stopMoving}
      >
        按住我前進
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setFrameIndex(0);
          stopMoving();
        }}
      >
        重設
      </Button>
      <Scatter data={data} options={options} />
    </>
  );
};

export default RaceChart;
