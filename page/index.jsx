import { useState } from 'react';

export default function Home() {
  const [wireDiameter, setWireDiameter] = useState('');
  const [coilCount, setCoilCount] = useState('');
  const [outerDiameter, setOuterDiameter] = useState('');

  const calculate = () => {
    const result = parseFloat(wireDiameter) * parseInt(coilCount);
    setOuterDiameter(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>대성스프링 스프링 외경 계산기</h1>
      <div style={{ marginBottom: 10 }}>
        <label>선경(mm): </label>
        <input 
          type="number" 
          value={wireDiameter} 
          onChange={(e) => setWireDiameter(e.target.value)} 
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>코일수: </label>
        <input 
          type="number" 
          value={coilCount} 
          onChange={(e) => setCoilCount(e.target.value)} 
        />
      </div>
      <button onClick={calculate}>계산하기</button>
      <div style={{ marginTop: 20 }}>
        {outerDiameter && <h2>외경: {outerDiameter} mm</h2>}
      </div>
    </div>
  );
}
