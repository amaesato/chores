import React from 'react';
import {
  Card,
  CardPrimaryAction,
  CardActions,
  CardAction,
  CardActionIcons,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';

export const ChoreCard = ({ chore }) => {
  return (
    <Card>
      <CardPrimaryAction className="choreCard-container">
        <Typography use="headline6">{chore.chore_name}</Typography>
        <Typography use="caption">{chore.chore_description}</Typography>
      </CardPrimaryAction>
      <CardActions>
        <Typography use="caption">{chore.assigned_to}</Typography>
        <CardActionIcons>
          <Typography>Complete</Typography>
          <CardAction onIcon="check_box" icon="check_box_outline_blank" />
          <CardAction icon="edit" />
          <CardAction icon="delete_forever" />
        </CardActionIcons>
      </CardActions>
    </Card>
  );
};
