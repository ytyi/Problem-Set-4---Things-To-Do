function addTask(description,dueTime){
    const list=document.querySelector('#task_list');
    let new_task=document.createElement('li');
    new_task.textContent=description;
    if(dueTime){
        let new_span=document.createElement('span');
        let data=new Date(dueTime);
        new_span.classList.add('due');
        new_span.textContent='due '+data.toLocaleDateString()+' '+data.toLocaleTimeString('en-US');
        new_task.append(new_span);

    }
    let new_button=document.createElement('button');
    new_button.setAttribute('class','btn btn-sm btn-outline-danger done');
    new_button.setAttribute('type','button');
    new_button.textContent='Done';
    new_button.addEventListener('click',()=>{
        new_task.remove();
    });
    new_task.append(new_button);
    list.append(new_task);
}


function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}


const addtask=document.querySelector('#add_task');
//const due_date=document.querySelector('input#duedate_input');
//const due_time=document.querySelector('input#duetime_input');
const desc=document.querySelector('input#task_description_input');
addtask.addEventListener('click',()=>{

    let due_date=document.querySelector('input#duedate_input');
    let due_time=document.querySelector('input#duetime_input');
    addTask(desc.value,dateAndTimeToTimestamp(due_date,due_time));
    desc.value='';
});

desc.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        addtask.click();
    }
})
