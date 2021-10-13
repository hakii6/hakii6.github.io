// // top module
// import React, { useState, useCallback, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useSelector, useDispatch } from 'react-redux';
// import useStyles from './styles';

// // UI components
// import {
//   TextField,
//   ButtonGroup,
//   Button,
//   InputLabel,
//   MenuItem,
//   FormHelperText,
//   FormControl,
//   Select,
//   Grid,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Accordion,
//   AccordionSummary,
//   Typography,
//   AccordionDetails,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // other
// import { UmaSetting } from '../types';

// import SkillFormCheckbox from './SkillFormCheckbox';
// import generalSkills from '../data/GeneralSkills';
// import passiveSkills from '../data/PassiveSkills';
// import activeSkills from '../data/ActiveSkills';
// import healingSkills from '../data/HealingSkills';
// import skillsDict from '../data/SkillsDict';

// interface Props {
//   skillCheckbox: Record<string, boolean[]>;
//   setSkillCheckbox: (arg1: Record<string, boolean[]>) => void;
// }

// const skillKeys = ['passive', 'active', 'healing'];

// const SkillForm = ({ skillCheckbox, setSkillCheckbox }: Props): JSX.Element => {
//   // common hooks
//   const { t, i18n } = useTranslation();
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   // console.log(defaultSkills);
//   const handleChange = (index: number, key: string) => {
//     const newSkillCheckbox = { ...skillCheckbox };
//     newSkillCheckbox[key][index] = !newSkillCheckbox[key][index];
//     setSkillCheckbox(newSkillCheckbox);
//   };

//   return (
//     <Grid container>
//       {skillKeys.map((keyString) => (
//         <SkillFormCheckbox
//           key={keyString}
//           skillKey={keyString}
//           checkbox={skillCheckbox[keyString]}
//           setCheckbox={(index: number) => handleChange(index, keyString)}
//         />
//       ))}
//     </Grid>
//   );
// };

// export default SkillForm;
export {};
