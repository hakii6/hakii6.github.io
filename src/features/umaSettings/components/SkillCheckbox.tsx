// // top module
// import React, { useState, useCallback, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useSelector, useDispatch } from 'react-redux';
// import useStyles from '@styles';

// // UI components
// import {
//   FormHelperText,
//   FormControl,
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

// import generalSkills from '../data/GeneralSkills';
// import passiveSkills from '../data/PassiveSkills';
// import activeSkills from '../data/ActiveSkills';
// import healingSkills from '../data/HealingSkills';
// import skillsDict from '../data/SkillsDict';

// const skillArrs: Record<string, Record<string, unknown>[]> = {
//   passive: passiveSkills,
//   active: activeSkills,
//   healing: healingSkills,
// };

// interface Props {
//   skillKey: string;
//   checkbox: boolean[];
//   setCheckbox: (index: number) => void;
// }

// const SkillFormCheckbox = ({
//   skillKey,
//   checkbox,
//   setCheckbox,
// }: Props): JSX.Element => {
//   // common hooks
//   const { t, i18n } = useTranslation();
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   const skillArr = skillArrs[skillKey];

//   return (
//     <Grid container>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls={`${skillKey}Skills-content`}
//           id={`${skillKey}Skills-header`}
//         >
//           <Typography>{t(`${skillKey}Skills`)}</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <FormGroup className={classes.formGroup}>
//             {checkbox.map((checked: boolean, index: number) => (
//               <FormControlLabel
//                 key={skillArr[index].id as string}
//                 control={
//                   <Checkbox
//                     key={skillArr[index].id as string}
//                     checked={checked}
//                     onChange={() => setCheckbox(index)}
//                     color="primary"
//                     inputProps={{ 'aria-label': 'primary checkbox' }}
//                   />
//                 }
//                 label={skillArr[index].name as string}
//               />
//             ))}
//           </FormGroup>
//         </AccordionDetails>
//       </Accordion>
//     </Grid>
//   );
// };

// export default SkillFormCheckbox;
export {};
