class Project{

    constructor(name){
        this.name = name
    }

} 

function createProjects(){
    a = new Project('Bulucu');
    b = new Project('Mangoose');
    var projects = [a,b];
    return projects;
}