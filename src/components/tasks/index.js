import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { Title, Task, Main } from './styles'



function Tasks ({ titleTask='Title Task'}) {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


    return (
        <Main>
            <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Title>{titleTask}</Title>

        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Title>{titleTask}</Title>

        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Title>{titleTask}</Title>
        </Main>
    )
}

export default Tasks;