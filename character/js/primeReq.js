/*Ability Score Prime Requisite XP Bonus/Penality*/
/*Halfling*/

function primeReq(strength, dexterity)
{
    let message = "";
    
    if((strength >= 13) && (dexterity < 13))
        {
            message = "+5% Experience Point Adjustment (Prime Requisite)";
        }
    else if((strength < 13) && (dexterity >= 13))
        {
            message = "+5% Experience Point Adjustment (Prime Requisite)";
        }
    else if((strength >= 13) && (dexterity >= 13))
        {
            message = "+10% Experience Point Adjustment (Prime Requisite)";
        }
    
    return message;
}

