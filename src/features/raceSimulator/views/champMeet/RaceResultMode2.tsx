import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';

// child components
import RaceLineChart from './RaceLineChart';

// other
import { RootState } from '../../../../store';
import { roundNumbers } from '../../functions/Common';

const RaceResultMode2 = (): JSX.Element => {
  const umaStateResults = useSelector(
    (state: RootState) => state.raceSimulator.umaStateResults
  );

  return (
    <div>
      {umaStateResults[0] && <RaceLineChart raceResult={umaStateResults} />}
    </div>
  );
};

export default RaceResultMode2;

// {value.pos} {value.momentSpeed} {value.momentAcc} {value.sp}
