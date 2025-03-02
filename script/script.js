

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
            historyDiv.innerHTML = `
            <h2>Your task is done ${cartTitle} at ${new Date().toLocaleString('en-US',{
               hour: '2-digit', 
               minute: '2-digit'
           })}</h2>
            `;
            sideMenu.appendChild(historyDiv)
            historyDiv.classList.add('bg-white', 'p-3', 'rounded-lg', 'mt-4', 'dynamic');

            document.getElementById('side-btn').addEventListener('click', function () {
                const allItems = document.querySelectorAll('.dynamic');

                if (allItems.length > 0) {
                    for (let allItem of allItems) {
                        allItem.remove()
                    }
                }
            });

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
const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
});

document.getElementById('calender').innerText = today;
const todaySub = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
});

document.getElementById('calenderSub').innerText = todaySub;


document.getElementById('nav-btn').addEventListener('click', function () {
    let randomColor = `rgb(${(Math.random() * 256)}, 
                           ${(Math.random() * 256)}, 
                           ${(Math.random() * 256)}, 
                           ${(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
});






