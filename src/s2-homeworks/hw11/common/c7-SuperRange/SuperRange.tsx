import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                maxWidth: '150px',
                color: 'rgba(0, 204, 34, 1)',
                height: 4,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 27,
                    width: 27,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    },
                    // Добавляем точку внутри ползунка
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'currentColor',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                },
                '& .MuiSlider-track': {
                    height: 3,
                },
                '& .MuiSlider-rail': {
                    color: '#d8d8d8',
                    opacity: 1,
                    height: 3,
                },
            }}
            {...props} // Передаем все пропсы
        />
    );
};

export default SuperRange;