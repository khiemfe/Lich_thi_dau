var btn = document.querySelector('.schedule_')
var overlay = document.querySelector('.overlay')
var schedule = document.querySelector('.schedule-detail')
var close_schedule = document.querySelector('.icon-close')
var lich = document.querySelector('.schedule-detail')
var scroll = document.querySelector('.schedule-detail-body')
// var scroll_mobile = document.querySelector('.schedule-detail-body-mobile')
var body = document.querySelector('body')

btn.onclick = function(){
    overlay.style.display = 'block'
    lich.style.transform = 'translateY(0%)'
    body.style.overflow = 'hidden'

    document.onkeyup = function(e) {
        switch(e.which) {
            case 27: //khi bấm phím esc thì:
                overlay.style.display = 'none'
                lich.style.transform = 'translateY(150%)'
                scroll.scrollTo(0, 1);
                body.style.overflow = 'unset'
                break
         }
    }
}

close_schedule.onclick = function() {
    overlay.style.display = 'none'
    lich.style.transform = 'translateY(150%)'
    scroll.scrollTo(0, 1); //scroll trở lại ban đầu
    body.style.overflow = 'unset'
}





//************** */
const top_goal_click = document.querySelector('.top_goal_')
const close_topGoal = document.querySelector('.close-top_goal')
const top_goal = document.querySelector('.top_goal-detail')

top_goal_click.onclick = () => {
    overlay.style.display = 'block'
    top_goal.style.transform = 'translateY(-50%)'
    body.style.overflow = 'hidden'
    
    document.onkeyup = function(e) {
        switch(e.which) {
            case 27:
                overlay.style.display = 'none'
                top_goal.style.transform = 'translateY(150%)'
                body.style.overflow = 'unset'
                break;
        }
    }
}

close_topGoal.onclick = () => {
    overlay.style.display = 'none'
    top_goal.style.transform = 'translateY(150%)'
    body.style.overflow = 'unset'
}


// *******************
const bang_thi_dau_click = document.querySelector('.bang_thi_dau')
const close_model_bangdau = document.querySelector('.close-model_bangdau')
const model_bangdau = document.querySelector('.model_bangdau')
const scroll_bangdau = document.querySelector('.body_bangdau')

bang_thi_dau_click.onclick = () => {
    overlay.style.display = 'block'
    // model_bangdau.style.display = 'block'
    model_bangdau.style.transform = 'translateY(0)'
    body.style.overflow = 'hidden'

    document.onkeyup = function(e) {
        switch(e.which) {
            case 27:
                overlay.style.display = 'none'
                scroll_bangdau.scrollTo(0, 1);
                // model_bangdau.style.display = 'none'
                model_bangdau.style.transform = 'translateY(150%)'
                body.style.overflow = 'unset'
                break
         }
    }
}

close_model_bangdau.onclick = () => {
    overlay.style.display = 'none'
    scroll_bangdau.scrollTo(0, 1);
    // model_bangdau.style.display = 'none'
    model_bangdau.style.transform = 'translateY(150%)'
    body.style.overflow = 'unset'
}

//********************* */

function padding_tyso() {
    let tyso = document.querySelectorAll('.match .tyso')
    tyso.forEach(item => {
        item.parentElement.classList.add('match_tyso')
    })
}

padding_tyso()