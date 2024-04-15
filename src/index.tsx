import * as React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaPause, FaStepBackward, FaPlay } from 'react-icons/fa';

const inputStyle = {
  width: '3em',
  backgroundColor: 'white',
  border: '0',
  textAlign: 'center' as 'center',
  display: 'block',
  padding: '1px 0px',
};

interface IconProps {
  onClick?: () => void,
};

const PauseIcon: React.FC<IconProps> = ({onClick}) => (
  <div style={{marginRight: '5px'}} onClick={onClick}>
    <FaPause />
  </div>
);

const PlayIcon: React.FC<IconProps> = ({onClick}) => (
  <div style={{marginRight: '5px'}} onClick={onClick}>
    <FaPlay />
  </div>
);

const RestartIcon: React.FC<IconProps> = ({onClick}) => (
  <div style={{marginRight: '5px'}} onClick={onClick}>
    <FaStepBackward />
  </div>
);

const Controls: React.FC<{
  n: number, 
  max: number,
  setTick: (tick: number) => void,
  start: () => void,
  stop: () => void,
  started: boolean,
}> = ({n, max, started, stop, start, setTick}) => {
  return (
    <div style={{width: '100%', display: 'flex', marginTop: '5px', marginRight: '5px'}}>
      <RestartIcon onClick={() => setTick(0)} />
      { started ? <PauseIcon onClick={stop} /> : <PlayIcon onClick={start} /> }
      <Slider min={0} max={max} value={n} style={{ flex: '1 1 auto', marginRight: '1em' }} onBeforeChange={stop} onChange={setTick} />
      <input value={n} style={inputStyle} onChange={e => setTick(Number(e.target.value))} />
      <div>/</div>
      <input value={max} disabled style={inputStyle}  />
    </div>
  );
}

export default Controls;
