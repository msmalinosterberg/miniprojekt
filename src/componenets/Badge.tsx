
import { Badge } from 'antd';
import { Component, CSSProperties } from 'react';


class BadgeIcon extends Component {
    
    
    render() {
        return (
            <div>
                <Badge style={badgeStyle}
                    count={1}>
                </Badge>
              </div>
                )
            }
    }
    
    
const badgeStyle: CSSProperties = {
    background: 'black',
    border: 'white',
    marginRight: '2.8rem',
}

export default BadgeIcon; 
