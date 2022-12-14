import React from 'react'
import ResumeItem from '../ResumeItem';
import * as C from './styles'

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,

} from 'react-icons/fa'

const Resume = ({income, expense, total}) => {
  return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    )
}

export default Resume;