import { Box, Button, Typography, useTheme } from '@mui/material';
import { CSSProperties } from 'react';
import { getStyles } from './styles';
import { useNavigate } from 'react-router-dom';

type Card = {
  title?: string;
  subtitle?: string;
  image: string;
  description: string;
  button?: { text: string; path: string };
};

type Props = {
  cards: Card[];
  highlighted?: boolean;
};

export const Cards: React.FC<Props> = ({ cards, highlighted }) => {
  const theme = useTheme();
  const styles = getStyles(theme, highlighted);
  const navigate = useNavigate();

  const onClick = (path = '/') => {
    navigate(path);
  };

  return (
    <Box sx={styles.container}>
      {cards.map((card) => (
        <Box sx={styles.card} key={card.title}>
          {card.title && (
            <Typography
              variant="h3"
              sx={() => ({
                ...styles.title,
                ...(highlighted ? styles.titleHighlighted : {}),
              })}
            >
              {card.title}
            </Typography>
          )}
          <img
            style={
              (card.subtitle
                ? styles.borderedImage
                : styles.image) as CSSProperties
            }
            src={card.image}
            alt="card"
          />
          {card.subtitle && (
            <Typography variant="h4" sx={styles.subtitle}>
              {card.subtitle}
            </Typography>
          )}
          <Typography sx={styles.description}>{card.description}</Typography>
          {card.button && (
            <Button
              onClick={() => onClick(card.button?.path)}
              sx={styles.button}
            >
              {card.button.text}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};
