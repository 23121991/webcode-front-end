import React from 'react';


const Option = () => {
  return <div className='add_remove_select'>
        <select>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>

</select>
<p style={{cursor:"pointer"}}>Delete</p><span></span>
<p className='forremovemedia'>Save or Later</p><span></span>
<p className='forremovemedia'>See More like this</p>


    </div>;
  
};

export default Option;