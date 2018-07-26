/*HitPoints randomly generate hit points*/
function hitPoints (hitDice, constitutionModifier)
{
    let hitPoints = 0;
    
    for(let counter = 0; counter < hitDice; counter++)
        {
            let points = 0;
            
            points = Math.floor((Math.random() * 6) + 1) + constitutionModifier;
            
            if(points < 2)
                {
                    points = 2;
                }
            
            hitPoints += points;
        }

    return hitPoints;
}

function addHighLevelHp(input)
{
    let addHp = 0;
    
    if(input === 10)
        {
            addHp = 3;
        }
    else if(input === 11)
        {
            addHp = 6;
        }
    else if(input === 12)
        {
            addHp = 9;
        }
    
    return addHp;
}