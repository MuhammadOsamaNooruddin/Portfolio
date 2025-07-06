import React from 'react';
import { Timeline } from '../../components/Timeline';
import {experiences} from "../../constants/index";

const Experiences = () => {
    return (
        <section className="w-full" id='work'>
            <Timeline data={experiences} />
        </section>
    )

}

export default Experiences; 