import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Grid,
  Link,
  TextField,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  MenuItem,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

import AppLayout from '@components/AppLayout';

import useRace from '@hooks/useRace';

const RaceDetails = () => {
  const { t, i18n } = useTranslation();
  const [raceTrackArray, getRaceArray] = useRace();

  const [raceTrackId, setRaceTrackId] = React.useState<string>(
    raceTrackArray[0].id,
  );
  const [raceId, setRaceId] = React.useState<string | undefined>(undefined);

  const raceTrackMenu = React.useMemo(() => {
    return raceTrackArray.map(({ id, name }: any) => (
      <MenuItem key={id} value={id}>
        {name}
      </MenuItem>
    ));
  }, []);

  const raceMenu = React.useMemo(() => {
    const raceArray = getRaceArray(raceTrackId);
    setRaceId(raceArray[0].id);
    return raceArray.map(({ id, name }: any) => (
      <MenuItem key={id} value={id}>
        {name}
      </MenuItem>
    ));
  }, [raceTrackId]);

  return (
    <AppLayout>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={6} sm={5}>
            <InputLabel id="raceTrackId-label">
              {t('RaceOption.raceTrackId')}
            </InputLabel>
            <Select
              fullWidth
              labelId="raceTrackId-label"
              id="raceTrackId"
              name="raceTrackId"
              value={raceTrackId}
              onChange={(event: SelectChangeEvent) => {
                setRaceTrackId(event.target.value);
              }}
            >
              {raceTrackMenu}
            </Select>
          </Grid>
          <Grid item xs={6} sm={5}>
            <InputLabel id="raceId-label">{t('RaceOption.raceId')}</InputLabel>
            <Select
              fullWidth
              labelId="raceId-label"
              id="raceId"
              name="raceId"
              value={raceId}
              onChange={(event: SelectChangeEvent) => {
                setRaceId(event.target.value);
              }}
            >
              {raceMenu}
            </Select>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              sx={{
                mt: {
                  xs: 3,
                  sm: 0,
                },
                mb: {
                  xs: 2,
                  sm: 0,
                },
              }}
            >
              {t('檢視')}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </AppLayout>
  );
};

export default RaceDetails;
