var Class = (function(){
    const className = "Web Engineering.";
    let students= [];

    const Teacher = {
        name: "Mss Fatima",
        teaching: true,
        lecture: function(subject){
            console.log(`\nCourse Teacher: ${this.name} is giving a lecture on ${subject}.`)
        }
    };

    const Notes = {
        notes:[],
        addNote: function(note){
            this.notes.push(note)
        },
        getNotes: function(){
            return this.notes
        }

    };
    const Lectures = {
        title: "React js Functions",
        start: function(){
            console.log(`Message: Lecture of "${this.title}" Has Been Started.`)
        }
    };

    return{
        className: className,
        students: students,
        Teacher: Teacher,
        Notes: Notes,
        Lectures: Lectures
    };
})();

const Web = Object.create(Class);

console.log("\nBy Default Class Modules Memebers!\n")
console.log("ClassName: " + Web.className);

Web.students.push("Syed");
console.log("Student: " + Web.students);

console.log("Teacher Name: " + Web.Teacher.name);
Web.Notes.addNote("Bring Project Proposal By Tomorrow.")

console.log("Note: " + Web.Notes.getNotes());
console.log("Lecture Title: " + Web.Lectures.title)

console.log("\nAfter Some Modifications in Class Modules!\n")

console.log("              Students Name:")
Web.students.push("Alyan","Rohail","Hussain","Aarish");

console.log(Web.students);
Web.Teacher.lecture("React js");

console.log("\n   Notes:")
Web.Notes.addNote("Complete The Lab Till Next Week..");
console.log(Web.Notes.getNotes());

Web.Lectures.start();