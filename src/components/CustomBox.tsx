import React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react';

export const CustomBox = props => {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Box', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
};
