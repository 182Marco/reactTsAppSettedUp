import { IDisplayCount } from './displayCount.models';

export const DisplayCount: React.FC<IDisplayCount> = p => (
  <div
    style={{ backgroundColor: 'lightgray', padding: '10px', margin: '10px' }}
  >
    <p style={{ color: 'blue' }}>Conteggio in ChildComponent: {p.count}</p>
  </div>
);
