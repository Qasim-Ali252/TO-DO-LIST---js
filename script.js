
let tasks = [];
let taskId =1;


// function to add taskss

function addTask(text){
    tasks.push({id: taskId++,text,completed: false});
    console.log(`Task added ----> ${text}`);
}

// function to remove tasks 
function removeTasks(id){
    tasks = tasks.filter((task)=>{
        return task.id !== id;
    });

    console.log(`Task ${id} removed `);
}

// function for task completion

function completeTask(id){
    const taskFound = tasks.find(task=> task.id === id);

    if(!taskFound){
        console.log(`task ${id} nor found !!!!`);
        return;
    }
    tasks = tasks.map(task=> task.id === id ? { ...task,completed:true} : task
    );

    console.log(`--task ${id } ---> marks completed`);
}

// function to show tasks 
function showTasks(){
    console.log(" your tasks in TO-Do list are : \n");
    if(tasks.length === 0){
        console.log("no tasks here to show ");
        return;
    }
    tasks.map((task)=>{
        console.log(`${task.completed ? "[completed]----> " : " " } ${task.id}: ${task.text}` );
    })
}


addTask("Do HTML");
addTask("Do CSS");
addTask("Do JS");
addTask("Do MONGODB");
addTask("Do MERN");
console.log("\n");
showTasks();
console.log("\n");
completeTask(2);
completeTask(3);
completeTask(4);
console.log("\n");
showTasks();
console.log("\n");
removeTasks(2);
removeTasks(3);
removeTasks(4);
console.log("\n");
showTasks();