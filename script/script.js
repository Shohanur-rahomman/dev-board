

document.addEventListener('DOMContentLoaded', function () {
    const allCompleteBtn = document.querySelectorAll('.primary-btn');
    const heroBoxText = document.getElementById('heroBox1Text');
    const navId = document.getElementById('navId');
    const sideMenu = document.getElementById('sideBar');
    for (let i = 0; i < allCompleteBtn.length; i++) {
        allCompleteBtn[i].addEventListener('click', function (e) {
            const countHero = parseInt(heroBoxText.innerText);
            const navCountNumber = parseInt(navId.innerText);
            if (countHero > 0) {
                heroBoxText.innerText = countHero - 1;
            }
            navId.innerText = navCountNumber + 1;

            const cartTitle = e.target.closest('.p-5').querySelector('h2').innerText;
            const historyDiv = document.createElement('div');
            historyDiv.innerText = `
            You have complete the task
            ${cartTitle} ${new Date()
                }
            
            `;
            sideMenu.appendChild(historyDiv)
            historyDiv.classList.add('bg-white', 'p-3', 'rounded-lg', 'mt-4');


            if (navCountNumber > 0) {
                alert('board update successfully')
                if (i === allCompleteBtn.length - 1) {
                    alert('Congratulation !!!!You have complete all the current task')
                }
            }
            else {
                alert('something is wrong')
            }
            e.target.disabled = true;
            this.classList.add('opacity-40', 'cursor-not-allowed');
        });
    }
});
const today = document.getElementById('calender').innerText = new Date().toLocaleDateString({
    time: 'medium'
});

// document.getElementById('side-btn').addEventListener('click', function () {
//     const historyContainer = document.querySelector('.clear');
//     if (historyContainer) {
//         historyContainer.innerHTML = ''; // Clear only history content
//     }
// });

