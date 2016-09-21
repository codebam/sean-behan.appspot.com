// from http://www.romcartridge.com/2010/01/javascript-function-to-calculate-age.html

function calculateAge(birthMonth, birthDay, birthYear)
{
        todayDate = new Date();
        todayYear = todayDate.getFullYear();
        todayMonth = todayDate.getMonth();
        todayDay = todayDate.getDate();
        age = todayYear - birthYear;

        if (todayMonth < birthMonth - 1)
        {
                age--;
        }

        if (birthMonth - 1 == todayMonth && todayDay < birthDay)
        {
                age--;
        }
        return age;
}


years_age = calculateAge(9,7,1998);
years_linux = calculateAge(1,1,2012);
document.getElementById('years_linux').textContent = years_linux;
document.getElementById('years_age').textContent = years_age;
