
import {PROJECTS} from './municipal/municipal-engine.mjs';

export function visualState(
    completed,
    previewId=null,
    previewPhases=0
){

    const delivered=id=>{

        const phases=Math.min(

            3,

            completed[id]+

            (
                id===previewId

                    ?previewPhases

                    :0
            )
        );

        return PROJECTS[id].phases

            .slice(0,phases)

            .reduce((a,b)=>a+b,0);
    };

    return {

        roads:delivered('roads')/40,

        water:delivered('water')/2500,

        park:delivered('park')/5,

        solar:delivered('solar'),

        wastewater:delivered('wastewater')/5
    };
}
