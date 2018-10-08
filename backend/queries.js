var aa = {
    800: "round='F' AND place != -1",
    1500: "round='F' AND place <= 8 AND place > 0",
    5000: "place <= 8 AND place > 0",
    10000: "place <= 8 AND place > 0",
    steeple: "round='F' AND place <= 8 AND place > 0"
}

// returns list of all distinct values from a particular column
exports.getColumn = function(column){
    query = "SELECT DISTINCT "
    query += column;
    query += " FROM regionals ORDER BY ";
    query += column;
    return query;
}

// // returns list of schools with athletes at regionals
// exports.getSchools = function(){
//     query = "SELECT DISTINCT school FROM regionals ORDER BY school";
//     return query;
// }

// // returns list of events
// exports.getEvents = function(){
//     query = "SELECT DISTINCT event FROM regionals ORDER BY event";
//     return query;
// }

// returns how many regional qualifiers schools have had
exports.getNumberRegionalQualifiers = function(school, event, year, region,  sex){
    query = "SELECT school, count(DISTINCT name, year) AS qualifiers FROM regionals WHERE sex = '" + sex + "'"; 
    if (year != 'all'){
        query = query + " AND year = " + year;
    }
    if (school != 'all'){
        query = query + " AND school = '" + school + "'";
    }else{
        if (region != 'all'){
            query = query + " AND region = '" + region + "'";
        }
    }
    if (event != 'all'){
        query = query + " AND event = '" + event + "'";
    }
    query += " GROUP BY school ORDER BY qualifiers DESC, school ASC";
    return query;
}

// returns how many ncaa qualifiers schools have had
exports.getNumberNCAAQualifiers = function(school, event, year, round,  sex){
    query = "SELECT school, count(DISTINCT name, year) AS qualifiers FROM ncaa WHERE sex = '" + sex + "'"; 
    if (round == 'aa'){
        query = query + " AND round = 'F' AND place <= 8 AND place > 0";
    }else if (round == 'final'){
        query = query + " AND round = 'F'";
    }else if (round == 'champ'){
        query = query + " AND round = 'F' AND place = 1";
    }
    if (year != 'all'){
        query = query + " AND year = " + year;
    }
    if (school != 'all'){
        query = query + " AND school = '" + school + "'";
    }
    if (event != 'all'){
        query = query + " AND event = '" + event + "'";
    }
    query += " GROUP BY school ORDER BY qualifiers DESC, school ASC";
    return query;
}