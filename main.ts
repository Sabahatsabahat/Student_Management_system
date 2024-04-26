#! /usr/bin/env node

//                                               """ STUDENTS MANAGE SYSTEM PROJECT"""

import { toASCII } from "punycode";

// Class school
class School{
    name: string;

    students: student[]=[];
    Teachers: Teacher[]=[];
// AddStudent Object constructor
    addStudent(stdObj: student){
        this.students.push(stdObj);
    } 
    // AddTeacher Object constructor
    addTeacher(TecObj: Teacher){
        this.Teachers.push(TecObj);
    }
    
    // CONSTRUCTOR
    constructor(name: string){
        this.name = name;
    }

    }// class Student
    class student{
        name: string;
        age: number;
        schoolName:string;
        constructor(name: string, age: number, schoolName:string){
            this.name = name;
            this.age = age;
            this.schoolName = schoolName;
        }
        } // class Teacher new method extends
        class Teacher extends student{}
        // class Teacher{
        //     name: string;
        //     age: number;
        //     schoolName:string;
        //     constructor(name: string, age: number, schoolName:string){
        //         this.name = name;
        //         this.age = age;
        //         this.schoolName = schoolName;
        //     }
        // }

    
    // schoolName
    let school1 = new School("The City Grammar");
    let school2 = new School("Beaconhouse School System");
    let school3 = new School("Habib Public School")
    // student with name
    let student1 = new student("Arbish Faheem",15,school1.name);
    let student2 = new student("FatimaZehra Faheem",12,school2.name);
    let student3 = new student("Sabahat Fayyaz",23,school3.name);

    // Teacher with name 
    let Teacher1 = new Teacher("Miss Batool Ikram",25,school1.name);
    let Teacher2 = new Teacher("Miss taybyba Rao",22,school2.name);
    let Teacher3 = new Teacher("Miss Fatima Nazeer",23,school3.name);

    // DATA PASS Students
    school1.addStudent(student1);
    school2.addStudent(student2);
    school3.addStudent(student3);

    // dataPASS Teacher
    school1.addTeacher(Teacher1);
    school2.addTeacher(Teacher2);
    school3.addTeacher(Teacher3);

    //console SCHOOL 
    console.log( school1);
    console.log( school2);
    console.log( school3);
    // console teacher
    console.log( Teacher1);
    console.log(Teacher2);
    console.log( Teacher3);
    //               ---------------------------PROJECT END --------------------------------                  // 

