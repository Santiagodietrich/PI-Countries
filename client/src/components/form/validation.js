
export default function Validation(inputs){
    const regexName=/^[a-z]{1,15}$/

    const regexDificulty=/^[0-9]+$/

    const regexDuration=/^[0-9]+(\.[0-9]+)?$/

    const regexSeason=/^[A-Z][a-zA-Z]{4,8}$/

    const errors={};

    (!inputs.name)? errors.name='Name is required':errors.name='';
    (inputs.name.length > 15)? errors.name='Name must cant be more than 15 characters':errors.name='';
    (!regexName.test(inputs.name))? errors.name='Name is invalid':errors.name='';


    (!inputs.dificulty)? errors.dificulty='Dificulty is required':errors.dificulty='';
    (!regexDificulty.test(inputs.dificulty))? errors.dificulty='Dificulty is invalid':errors.dificulty='';


    (!inputs.duration)? errors.duration='Duration is required':errors.duration='';
    (!regexDuration.test(inputs.duration))? errors.duration='Duration is invalid':errors.duration='';


    (!inputs.season)? errors.season='Season is required':errors.season='';
    (inputs.season.length > 9)? errors.season='Season must cant be more than 9 characters':errors.season='';
    (!regexSeason.test(inputs.season))? errors.season='Season is invalid':errors.season='';


    return errors;

}