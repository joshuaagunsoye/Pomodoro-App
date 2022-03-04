import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack sx={{ color: 'orange' }} spacing={2} direction="row">
      <CircularProgress color='inherit' variant="determinate" value={progress} className="circlebar" />
    </Stack>
  );
}
