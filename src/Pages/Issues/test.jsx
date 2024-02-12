import { useState } from 'react';

function test() {
    const [label, setLabel] = useState([]);

    const fetchLabel = async () => {
        const response = await fetch(`https://api.github.com/repos/${org}/${repo}/labels`);
        const data = await response.json();
        setLabel(data);
    }

  return (
    <div>
        test
        <div>
            <input type="text"
            value={}/></div></div>
  )
}

export default test