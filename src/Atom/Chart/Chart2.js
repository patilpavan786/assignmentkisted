
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data2 = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 30],
      backgroundColor: [
       " rgb(243, 107, 107)",
        'rgb(116, 231, 126)',
        'rgb(252, 252, 122)',
      
      ],
    
      borderWidth: 1,
    },
  ],
};



