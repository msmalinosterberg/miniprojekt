
import { Badge } from 'antd';
import { CSSProperties } from 'react';

function BadgeIcon () {
    return (
<div>
    <Badge style={badgeStyle}
        count={1}>
      <a href="#" />
    </Badge>
  </div>
    )
}


const badgeStyle: CSSProperties = {
    background: 'black',
    border: 'white',
    marginRight: '2.8rem',
}

export default BadgeIcon; 
