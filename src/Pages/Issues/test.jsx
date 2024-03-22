import { useState } from 'react';
import usecalculateTimeDifference from '../../CustomHooks/useTimeDifference';
import LoadingSkeleton from '../../Components/IssueSkeleton';
import { extractRepoName } from '../../utils/BasicUtils';
import IssueCard from '../../Components/IssueCard';
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