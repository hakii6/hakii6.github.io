// top module
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Line, Chart, Scatter } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

// UI elements
import { Button, Slider, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// redux store
import * as raceSimulatorActions from '../../raceSimulatorSlice';
import { RootState } from '../../../../store';

// other
import { roundNumbers } from '../../functions/Common';

interface Props {
  raceResult: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
  })
);

const RaceLineChart = ({ raceResult }: Props): JSX.Element => {
  const raceOption = useSelector(
    (state: RootState) => state.raceSimulator.raceOption
  );
  const [frameIndex, setFrameIndex] = useState(0);

  const [moveSpeed, setMoveSpeed] = useState(15);
  const classes = useStyles();

  const intervalRef = useRef<any>(null);
  const options = useMemo(() => {
    const scales = {
      x: {
        type: 'linear',
        ticks: {
          callback: (pos: number, index: number, poses: number[]) => {
            return String(Math.floor(pos / 1));
          },
        },
        min: 0,
        max: 1600,
      },
      y: {
        // display: true,
        min: 0,
        max: raceResult.length + 1,
      },
    };
    const plugins = {
      // responsive: true,
      tooltip: {
        callbacks: {
          label: (context: Record<string, any>) => {
            const { pos, momentSpeed, sp } = context.raw;
            const label = [
              `pos: ${pos}`,
              `momentSpeed: ${momentSpeed}`,
              `sp: ${sp}`,
            ];
            return label;
          },
        },
      },
    };
    return {
      parsing: {
        xAxisKey: 'pos',
        yAxisKey: 'i',
      },
      plugins,
      interaction: {
        intersect: false,
      },
      animation: false,
      scales,
      radius: 5,
    };
  }, [raceResult]);
  const data = useMemo(
    () => ({
      datasets: [
        {
          label: '1',
          data: raceResult.map((umaLineDataList: any, i: number) => ({
            i: i + 1,
            ...umaLineDataList[frameIndex],
          })),
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 5,
        },
      ],
    }),
    [raceResult, frameIndex]
  );

  const startMoving = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setFrameIndex((prevState) => prevState + moveSpeed);
    }, 50);
  };
  const stopMoving = () => {
    if (intervalRef.current) {
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

export default RaceLineChart;
